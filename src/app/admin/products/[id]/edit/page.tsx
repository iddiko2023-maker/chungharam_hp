import AdminHeader from "@/components/AdminHeader";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <AdminHeader title="제품 수정" description="제품 수정 폼은 등록 폼과 동일한 구조로 확장할 수 있습니다." />
      <div className="rounded-[26px] bg-white/84 p-6 ring-1 ring-[#DDE7E7]/65">
        <p className="font-bold text-[#333333]">제품 ID</p>
        <p className="mt-2 text-[#6B7280]">{id}</p>
      </div>
    </>
  );
}
