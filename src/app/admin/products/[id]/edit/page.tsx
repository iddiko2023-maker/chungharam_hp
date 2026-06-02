import AdminHeader from "@/components/AdminHeader";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <AdminHeader title="제품 수정" description="제품 수정 폼은 등록 폼과 동일한 구조로 확장할 수 있습니다." />
      <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-sm">
        <p className="font-bold text-[#333333]">제품 ID</p>
        <p className="mt-2 text-[#6B7280]">{id}</p>
      </div>
    </>
  );
}
