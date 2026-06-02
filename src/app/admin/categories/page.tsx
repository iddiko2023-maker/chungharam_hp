import AdminHeader from "@/components/AdminHeader";
import { categories } from "@/lib/sampleData";

export default function AdminCategoriesPage() {
  return (
    <>
      <AdminHeader title="카테고리 관리" description="제품 카테고리를 관리합니다." />
      <div className="grid gap-3">
        {categories.map((category) => (
          <div key={category.id} className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-xl font-black">{category.name}</p>
            <p className="mt-2 text-[#6B7280]">{category.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
