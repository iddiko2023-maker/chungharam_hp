import AdminHeader from "@/components/AdminHeader";
import ImageUploader from "@/components/ImageUploader";

export default function AdminBannersPage() {
  return (
    <>
      <AdminHeader title="메인 배너 관리" description="홈 화면 배너 이미지와 문구를 관리합니다." />
      <form className="grid gap-5 rounded-[26px] bg-white/84 p-6 ring-1 ring-[#DDE7E7]/65">
        <label className="grid gap-2 font-bold">제목<input className="min-h-11 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" /></label>
        <label className="grid gap-2 font-bold">부제목<input className="min-h-11 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" /></label>
        <ImageUploader name="image_url" />
        <button type="button" className="min-h-12 rounded-full bg-[#2D8C8C] px-5 py-3 font-bold text-white">저장 UI</button>
      </form>
    </>
  );
}
