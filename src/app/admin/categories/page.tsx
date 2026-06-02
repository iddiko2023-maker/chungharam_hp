import AdminHeader from "@/components/AdminHeader";
import { categories } from "@/lib/sampleData";

export default function AdminCategoriesPage() {
  return (
    <>
      <AdminHeader title="카테고리 관리" description="제품 카테고리를 관리합니다." />
      <div className="grid gap-3">
        {categories.map((category) => (
          <div key={category.id} className="rounded-[22px] bg-white/84 p-5 ring-1 ring-[#DDE7E7]/65">
            <p className="text-xl font-black">{category.name}</p>
            <p className="mt-2 text-[#6B7280]">{category.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
