import AdminHeader from "@/components/AdminHeader";

export default function AdminSettingsPage() {
  return (
    <>
      <AdminHeader title="사이트 기본정보 관리" description="푸터와 문의 정보에 사용할 회사 기본정보를 관리합니다." />
      <form className="grid gap-5 rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-sm">
        {["회사명", "전화", "이메일", "주소", "사업자등록번호", "카카오 URL"].map((label) => (
          <label key={label} className="grid gap-2 font-bold">
            {label}
            <input className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
          </label>
        ))}
        <button type="button" className="min-h-12 rounded-lg bg-[#2D8C8C] px-5 py-3 font-bold text-white">저장 UI</button>
      </form>
    </>
  );
}
