import AdminHeader from "@/components/AdminHeader";
import StatusBadge from "@/components/StatusBadge";
import { createSupabaseAdminClient } from "@/lib/supabaseAdmin";
import { formatDate } from "@/lib/utils";
import { Boxes, Gift, MessageSquare, TrendingUp } from "lucide-react";

type RecentInquiry = {
  id: string;
  name: string;
  status?: string | null;
  created_at?: string | null;
};

type RecentDonation = {
  id: string;
  donor_name: string;
  status?: string | null;
  created_at?: string | null;
};

async function getDashboard() {
  try {
    const supabase = createSupabaseAdminClient();
    const [products, donationProducts, inquiries, donations, recentInquiries, recentDonations] = await Promise.all([
      supabase.from("products").select("id", { count: "exact", head: true }),
      supabase.from("products").select("id", { count: "exact", head: true }).eq("is_donation_available", true),
      supabase.from("inquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
      supabase.from("donation_requests").select("id", { count: "exact", head: true }).eq("status", "new"),
      supabase.from("inquiries").select("id,name,status,created_at").order("created_at", { ascending: false }).limit(5),
      supabase.from("donation_requests").select("id,donor_name,status,created_at").order("created_at", { ascending: false }).limit(5),
    ]);
    return {
      counts: [
        ["전체 제품", products.count ?? 0],
        ["후원 가능 제품", donationProducts.count ?? 0],
        ["신규 문의", inquiries.count ?? 0],
        ["신규 후원 신청", donations.count ?? 0],
      ] as [string, number][],
      inquiries: (recentInquiries.data ?? []) as RecentInquiry[],
      donations: (recentDonations.data ?? []) as RecentDonation[],
    };
  } catch {
    return {
      counts: [
        ["전체 제품", 0],
        ["후원 가능 제품", 0],
        ["신규 문의", 0],
        ["신규 후원 신청", 0],
      ] as [string, number][],
      inquiries: [] as RecentInquiry[],
      donations: [] as RecentDonation[],
    };
  }
}

export default async function AdminDashboardPage() {
  const data = await getDashboard();
  const icons = [Boxes, Gift, MessageSquare, TrendingUp];

  return (
    <>
      <AdminHeader title="대시보드" description="제품, 문의, 후원 신청 현황을 확인합니다." />
      <div className="grid gap-4 md:grid-cols-4">
        {data.counts.map(([label, count], index) => {
          const Icon = icons[index];
          return (
          <div key={label} className="rounded-lg border border-[#DDE7E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-[#64748B]">{label}</p>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6F6] text-[#155F70]">
                <Icon size={20} aria-hidden />
              </span>
            </div>
            <p className="mt-4 text-4xl font-black text-[#243238]">{count}</p>
            <p className="mt-2 text-xs font-bold text-[#94A3B8]">Supabase 기준 집계</p>
          </div>
          );
        })}
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-[#DDE7E7] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-[#EEF2F2] pb-4">
            <div>
              <p className="text-sm font-black text-[#155F70]">INQUIRIES</p>
              <h2 className="mt-1 text-xl font-black text-[#243238]">최근 문의</h2>
            </div>
            <MessageSquare className="text-[#155F70]" size={24} aria-hidden />
          </div>
          <div className="mt-4 grid gap-3">
            {data.inquiries.map((item) => (
              <div key={item.id} className="rounded-lg bg-[#F8FAFB] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black text-[#243238]">{item.name}</p>
                  <StatusBadge status={item.status} />
                </div>
                <p className="mt-1 text-sm text-[#64748B]">{formatDate(item.created_at)}</p>
              </div>
            ))}
            {data.inquiries.length === 0 ? <p className="rounded-lg bg-[#F8FAFB] p-4 text-[#64748B]">표시할 신규 문의가 없습니다.</p> : null}
          </div>
        </section>
        <section className="rounded-lg border border-[#DDE7E7] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-[#EEF2F2] pb-4">
            <div>
              <p className="text-sm font-black text-[#155F70]">DONATIONS</p>
              <h2 className="mt-1 text-xl font-black text-[#243238]">최근 후원 신청</h2>
            </div>
            <Gift className="text-[#155F70]" size={24} aria-hidden />
          </div>
          <div className="mt-4 grid gap-3">
            {data.donations.map((item) => (
              <div key={item.id} className="rounded-lg bg-[#F8FAFB] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black text-[#243238]">{item.donor_name}</p>
                  <StatusBadge status={item.status} />
                </div>
                <p className="mt-1 text-sm text-[#64748B]">{formatDate(item.created_at)}</p>
              </div>
            ))}
            {data.donations.length === 0 ? <p className="rounded-lg bg-[#F8FAFB] p-4 text-[#64748B]">표시할 신규 후원 신청이 없습니다.</p> : null}
          </div>
        </section>
      </div>
      <section className="mt-8 rounded-lg border border-[#DDE7E7] bg-[#155F70] p-6 text-white shadow-sm">
        <p className="text-sm font-black text-white/70">운영 메모</p>
        <h2 className="mt-2 text-2xl font-black">현재 범위는 문의 기반 운영입니다.</h2>
        <p className="mt-3 leading-7 text-white/82">QR 추적, PG 결제, 배송조회, 회원 포인트 기능은 별도 프로젝트로 확장하는 구조를 유지합니다.</p>
      </section>
    </>
  );
}
