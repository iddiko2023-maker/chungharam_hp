import Link from "next/link";
import AdminHeader from "@/components/AdminHeader";
import StatusBadge from "@/components/StatusBadge";
import { getProducts } from "@/lib/db";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <AdminHeader title="제품 관리" description="제품 등록, 수정, 노출 상태를 관리합니다." />
        <Link href="/admin/products/new" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#2D8C8C] px-5 py-3 font-bold text-white">
          제품 등록
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
        <table className="w-full min-w-[720px] text-left">
          <thead className="bg-[#F8FAFB]">
            <tr>
              <th className="p-4">제품명</th>
              <th className="p-4">카테고리</th>
              <th className="p-4">후원</th>
              <th className="p-4">상태</th>
              <th className="p-4">관리</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-[#E5E7EB]">
                <td className="p-4 font-bold">{product.name}</td>
                <td className="p-4 text-[#6B7280]">{product.categories?.name ?? "-"}</td>
                <td className="p-4">{product.is_donation_available ? "가능" : "불가"}</td>
                <td className="p-4"><StatusBadge status={product.status} /></td>
                <td className="p-4"><Link href={`/admin/products/${product.id}/edit`} className="font-bold text-[#2D8C8C]">수정</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
