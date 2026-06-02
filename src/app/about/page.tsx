import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "청하람 소개" };

export default function AboutPage() {
  const values = ["회사 신뢰도 확보", "어르신 생활지원 제품 발굴", "기관과 후원자의 연결", "모바일 중심의 쉬운 정보 제공"];

  return (
    <>
      <PageHero title="청하람 소개" description="청하람은 어르신에게 실제로 필요한 제품을 찾고, 기관과 후원자가 쉽게 연결되도록 돕습니다." />
      <Container className="grid gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="relative min-h-[360px] overflow-hidden rounded-lg">
          <Image
            src="/images/about-consultation.png"
            alt="복지 현장 상담"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionTitle title="쇼핑몰이 아니라 생활지원 제품 플랫폼입니다." />
          <p className="text-lg leading-8 text-[#6B7280]">
            청하람은 노인지원재단과 함께 어르신의 생활 편의, 안전, 건강 관리에 필요한 제품을 발굴합니다.
            초기 운영은 결제가 아닌 문의 접수와 상담을 중심으로 하며, 제품 후원과 기관 납품이 원활하게 이어지도록 구성합니다.
          </p>
          <div className="mt-8 grid gap-3">
            {values.map((value) => (
              <p key={value} className="flex items-center gap-3 font-bold text-[#333333]">
                <CheckCircle2 className="text-[#2D8C8C]" aria-hidden />
                {value}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
