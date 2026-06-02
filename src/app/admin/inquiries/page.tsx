import AdminHeader from "@/components/AdminHeader";
import StatusBadge from "@/components/StatusBadge";
import { createSupabaseAdminClient } from "@/lib/supabaseAdmin";
import { formatDate } from "@/lib/utils";
import type { Inquiry } from "@/types/inquiry";

async function getRows(): Promise<Inquiry[]> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });
    return (data ?? []) as Inquiry[];
  } catch {
    return [];
  }
}

export default async function AdminInquiriesPage() {
  const rows = await getRows();
  return (
    <>
      <AdminHeader title="문의 관리" description="구매, 기관 납품, 후원, 제휴 문의를 확인합니다." />
      <div className="grid gap-3">
        {rows.map((row) => (
          <article key={row.id} className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <p className="text-xl font-black">
                  {row.name} <span className="text-base font-bold text-[#6B7280]">{row.company}</span>
                </p>
                <p className="mt-1 text-[#6B7280]">
                  {row.phone} {row.email}
                </p>
              </div>
              <StatusBadge status={row.status} />
            </div>
            <p className="mt-4 leading-7">{row.message}</p>
            <p className="mt-3 text-sm text-[#6B7280]">{formatDate(row.created_at)}</p>
          </article>
        ))}
      </div>
    </>
  );
}
