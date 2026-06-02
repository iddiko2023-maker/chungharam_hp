import Image from "next/image";
import { Building2, CheckCircle2, ClipboardCheck, FileCheck2, PackageCheck, Truck } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "기관 납품" };

const process = [
  { title: "수요 확인", icon: ClipboardCheck, text: "기관 유형, 사용 대상, 희망 제품과 수량을 확인합니다." },
  { title: "제품 구성", icon: PackageCheck, text: "예산과 현장 조건에 맞춰 제품 구성을 제안합니다." },
  { title: "견적 안내", icon: FileCheck2, text: "납품 조건과 일정 기준으로 상담 견적을 안내합니다." },
  { title: "납품 조율", icon: Truck, text: "담당자와 납품 일정, 장소, 전달 방식을 조율합니다." },
];

const institutions = [
  "노인복지관",
  "요양시설",
  "지자체·공공기관",
  "재단·협회",
  "기업 사회공헌팀",
  "지역 돌봄 단체",
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="BUSINESS SUPPLY"
        title="기관 납품 안내"
        description="복지기관, 단체, 기업 대상 생활지원 제품 납품 상담을 진행합니다. 제품 판매보다 현장 수요와 전달 가능성을 먼저 확인합니다."
      />
      <Container className="py-12 md:py-16">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
          <div className="rounded-lg bg-[#2D8C8C] p-7 text-white shadow-lg md:p-9">
            <Building2 size={34} aria-hidden />
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
              기관의 예산과 현장 조건에 맞춰 제품 구성을 제안합니다.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88">
              청하람은 단순 제품 판매가 아니라 복지 현장의 사용성, 대상자 특성, 납품 일정까지 함께 검토하는 상담형 납품 구조로 운영됩니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary">기관 납품 문의</ButtonLink>
              <ButtonLink href="/products" variant="outline">제품 안내 보기</ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-[#DDE7E7] bg-white shadow-lg">
            <Image
              src="/images/news-business-consulting.png"
              alt="기관 납품 상담 장면"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-white/94 p-5">
              <p className="text-lg font-black text-[#333333]">납품 전 확인 항목</p>
              <div className="mt-3 grid gap-2 text-sm font-bold text-[#6B7280] sm:grid-cols-2">
                {["기관 유형", "제품 수량", "납품 일정", "예산 범위"].map((item) => (
                  <p key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#2D8C8C]" aria-hidden />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle
            eyebrow="납품 절차"
            title="상담부터 납품 조율까지 명확한 흐름"
            description="기관 담당자가 빠르게 판단할 수 있도록 필요한 정보를 단계별로 정리합니다."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-[#DDE7E7] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#2D8C8C]">STEP {index + 1}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E7F6F6] text-[#2D8C8C]">
                    <item.icon size={22} aria-hidden />
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black text-[#333333]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#6B7280]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionTitle
              eyebrow="납품 대상"
              title="복지 현장과 사회공헌 조직을 위한 구성"
              description="반복 구매보다 실제 사용성과 전달 가능성을 기준으로 상담합니다."
            />
            <ButtonLink href="/contact">납품 상담 접수</ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {institutions.map((item) => (
              <div key={item} className="flex min-h-16 items-center gap-3 rounded-lg border border-[#DDE7E7] bg-white px-5 py-4 shadow-sm">
                <CheckCircle2 size={20} className="text-[#2D8C8C]" aria-hidden />
                <p className="font-black text-[#333333]">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
