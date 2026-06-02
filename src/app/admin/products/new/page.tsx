import { createProduct } from "@/app/actions";
import AdminHeader from "@/components/AdminHeader";
import ImageUploader from "@/components/ImageUploader";

export default function NewProductPage() {
  return (
    <>
      <AdminHeader title="제품 등록" description="사용자 제품 목록과 상세 페이지에 노출될 제품을 등록합니다." />
      <form action={createProduct} className="grid gap-5 rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 font-bold">
            제품명
            <input name="name" required className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
          </label>
          <label className="grid gap-2 font-bold">
            슬러그
            <input name="slug" required placeholder="silver-walker" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
          </label>
        </div>
        <label className="grid gap-2 font-bold">
          짧은 설명
          <input name="short_description" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
        </label>
        <label className="grid gap-2 font-bold">
          상세 설명
          <textarea name="description" rows={6} className="rounded-lg border border-[#E5E7EB] px-3 py-3 font-normal" />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <ImageUploader />
          <label className="grid gap-2 font-bold">
            가격/상담 문구
            <input name="price_text" placeholder="문의 후 견적" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
          </label>
        </div>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 font-bold"><input type="checkbox" name="is_featured" /> 추천 제품</label>
          <label className="flex items-center gap-2 font-bold"><input type="checkbox" name="is_donation_available" /> 후원 가능</label>
          <label className="flex items-center gap-2 font-bold"><input type="checkbox" name="is_business_available" defaultChecked /> 기관 납품 가능</label>
        </div>
        <button className="min-h-12 rounded-lg bg-[#2D8C8C] px-5 py-3 font-bold text-white">등록</button>
      </form>
    </>
  );
}
