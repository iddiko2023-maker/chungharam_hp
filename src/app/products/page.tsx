import { CheckCircle2, SlidersHorizontal } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/db";

export const metadata = { title: "제품 안내" };

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="PRODUCT CATALOG"
        title="제품 안내"
        description="생활지원, 안전보호, 건강관리 제품을 소개합니다. 구매와 기관 납품은 문의 후 상담으로 진행됩니다."
        imageSrc="/images/product-walker.png"
        imageAlt="어르신 생활지원 제품"
      />
      <Container className="py-12 md:py-16">
        <div className="mb-8 grid gap-4 rounded-lg border border-[#DDE7E7] bg-white p-5 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black text-[#155F70]">제품 탐색</p>
            <h2 className="mt-2 text-2xl font-black text-[#243238]">현장 수요 기준으로 정리된 제품군</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["전체", "생활지원", "안전보호", "건강관리", "후원 가능"].map((item) => (
              <span key={item} className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#DDE7E7] bg-[#F8FAFB] px-4 text-sm font-black text-[#334155]">
                {item === "전체" ? <SlidersHorizontal size={16} aria-hidden /> : <CheckCircle2 size={16} aria-hidden />}
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-lg border border-[#DDE7E7] bg-white p-5 shadow-sm">
            <p className="text-lg font-black text-[#243238]">상담 기준</p>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[#64748B]">
              <p><strong className="text-[#243238]">구매</strong><br />제품별 수량과 납품지를 확인합니다.</p>
              <p><strong className="text-[#243238]">기관 납품</strong><br />기관 유형, 일정, 예산에 맞춰 구성합니다.</p>
              <p><strong className="text-[#243238]">후원</strong><br />필요 대상과 전달 가능성을 함께 검토합니다.</p>
            </div>
          </aside>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
