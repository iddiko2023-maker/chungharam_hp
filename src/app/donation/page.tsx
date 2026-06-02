import { CheckCircle2, Gift, HandHeart, PackageCheck } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getProducts } from "@/lib/db";

export const metadata = { title: "제품 후원" };

export default async function DonationPage() {
  const products = (await getProducts()).filter((product) => product.is_donation_available);

  return (
    <>
      <PageHero
        eyebrow="DONATION PROGRAM"
        title="제품 후원 안내"
        description="필요한 제품을 필요한 어르신에게 전달합니다. 후원 목적과 예산에 맞춰 제품을 추천합니다."
      />
      <Container className="py-12 md:py-16">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg bg-[#155F70] p-7 text-white shadow-lg md:p-9">
            <Gift size={34} aria-hidden />
            <h2 className="mt-5 text-3xl font-black leading-tight">후원은 제품 선택보다 대상과 전달 가능성 확인이 먼저입니다.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">
              청하람은 후원자가 선택한 예산과 제품이 실제 현장 수요에 맞게 전달될 수 있도록 상담 흐름을 설계합니다.
            </p>
            <div className="mt-7">
              <ButtonLink href="/donation/apply" variant="secondary">후원 신청하기</ButtonLink>
            </div>
          </div>
          <div className="grid gap-3">
            {[
              ["제품 선택", "후원 가능한 제품과 구성 확인"],
              ["대상과 수량 상담", "기관·대상자·예산 기준 정리"],
              ["전달 일정 확인", "전달 가능 일정과 방식 안내"],
            ].map(([item, text], index) => (
              <div key={item} className="flex gap-4 rounded-lg border border-[#DDE7E7] bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E7F6F6] font-black text-[#155F70]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#243238]">{item}</h3>
                  <p className="mt-1 text-[#64748B]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="후원 가능 제품"
            title="전달 목적에 맞춰 선택할 수 있는 제품"
            description="제품별 특성과 수량, 전달 조건은 접수 후 상담으로 확정됩니다."
          />
          <ButtonLink href="/donation/apply">후원 신청하기</ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 grid gap-4 rounded-lg border border-[#DDE7E7] bg-white p-6 shadow-sm md:grid-cols-3">
          {[
            [HandHeart, "문의 중심", "결제 기능 없이 후원 의사를 접수합니다."],
            [PackageCheck, "제품 구성", "현장 수요에 맞는 제품을 추천합니다."],
            [CheckCircle2, "전달 확인", "전달 일정과 방식은 상담 후 안내합니다."],
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="flex gap-3">
              <Icon className="mt-1 shrink-0 text-[#155F70]" size={24} aria-hidden />
              <div>
                <p className="font-black text-[#243238]">{title as string}</p>
                <p className="mt-1 text-sm leading-6 text-[#64748B]">{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
