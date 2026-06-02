import AdminHeader from "@/components/AdminHeader";
import StatusBadge from "@/components/StatusBadge";
import { createSupabaseAdminClient } from "@/lib/supabaseAdmin";
import { formatDate } from "@/lib/utils";
import type { DonationRequest } from "@/types/donation";

async function getRows(): Promise<DonationRequest[]> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data } = await supabase.from("donation_requests").select("*").order("created_at", { ascending: false });
    return (data ?? []) as DonationRequest[];
  } catch {
    return [];
  }
}

export default async function AdminDonationsPage() {
  const rows = await getRows();
  return (
    <>
      <AdminHeader title="후원 신청 관리" description="제품 후원 신청 정보를 확인합니다." />
      <div className="grid gap-3">
        {rows.map((row) => (
          <article key={row.id} className="rounded-[22px] bg-white/84 p-5 ring-1 ring-[#DDE7E7]/65">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <p className="text-xl font-black">
                  {row.donor_name} <span className="text-base font-bold text-[#6B7280]">{row.donor_type}</span>
                </p>
                <p className="mt-1 text-[#6B7280]">
                  {row.phone} {row.email}
                </p>
              </div>
              <StatusBadge status={row.status} />
            </div>
            <p className="mt-4 leading-7">{row.message}</p>
            <p className="mt-3 text-sm text-[#6B7280]">
              {formatDate(row.created_at)} · 수량 {row.quantity ?? "상담"}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
