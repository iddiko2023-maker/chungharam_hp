import { Building2, CheckCircle2, Gift, HandHeart, HeartPulse, ShieldCheck } from "lucide-react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getPosts, getProducts } from "@/lib/db";

const workItems = [
  { title: "생활지원 제품", text: "어르신의 일상 편의와 이동을 돕는 제품을 선별합니다.", icon: HandHeart },
  { title: "안전보호 제품", text: "낙상과 생활 사고를 줄이는 안전 중심 제품을 제안합니다.", icon: ShieldCheck },
  { title: "건강관리 제품", text: "복지 현장의 기본 건강 확인과 관리에 필요한 구성을 준비합니다.", icon: HeartPulse },
  { title: "기관 납품", text: "기관 예산, 수량, 일정에 맞춘 상담형 납품을 지원합니다.", icon: Building2 },
  { title: "제품 후원", text: "후원 제품이 필요한 어르신과 현장에 연결되도록 돕습니다.", icon: Gift },
];

const donationStats = [
  ["누적 후원 건수", "128건"],
  ["전달 제품 수량", "2,460개"],
  ["참여 기관 수", "34곳"],
  ["참여 후원자 수", "186명"],
];

const heroStats = [
  ["상담 중심", "결제 없이 문의 접수"],
  ["기관 납품", "수량·일정 맞춤 제안"],
  ["제품 후원", "필요 대상 연결"],
];

export default async function Home() {
  const [products, posts] = await Promise.all([getProducts(), getPosts()]);
  const featuredProducts = products.filter((product) => product.is_featured).slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#DDE7E7] bg-white">
        <div className="absolute inset-x-0 top-0 h-64 bg-[#F2FBFB]" aria-hidden />
        <Container className="relative grid gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-18 lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-md bg-white px-4 py-2 text-sm font-black text-[#2D8C8C] shadow-sm ring-1 ring-[#DDE7E7]">
              어르신 생활지원 제품 플랫폼
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-[#333333] md:text-5xl lg:text-6xl">
              어르신의 생활을 더 편안하게,
              <br />
              보이지 않는 안전까지 살피는 청하람
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280] md:text-xl md:leading-9">
              청하람은 노인지원재단과 함께 어르신에게 필요한 제품을 발굴하고 생활지원, 안전관리,
              제품후원을 연결하는 기업입니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products">제품 보기</ButtonLink>
              <ButtonLink href="/donation/apply" variant="secondary">
                후원하기
              </ButtonLink>
              <ButtonLink href="/business" variant="outline">
                기관 납품 문의
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.map(([title, text]) => (
                <div key={title} className="rounded-lg border border-[#DDE7E7] bg-white px-4 py-4 shadow-sm">
                  <p className="font-black text-[#333333]">{title}</p>
                  <p className="mt-1 text-sm font-bold text-[#64748B]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[450px] overflow-hidden rounded-lg border border-[#DDE7E7] bg-white shadow-2xl">
            <Image
              src="/images/hero-consultation.png"
              alt="어르신 생활지원 상담 장면"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-white/95 p-6 backdrop-blur">
              <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                <p className="text-xl font-black text-[#333333]">문의 기반 운영</p>
                <p className="text-sm leading-6 text-[#6B7280]">제품 구매, 기관 납품, 후원 신청을 상담 흐름으로 연결합니다.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="청하람이 하는 일" title="복지 현장에 필요한 제품과 연결을 설계합니다." description="제품 판매보다 생활지원, 안전, 건강관리, 기관 납품, 제품 후원의 흐름을 명확하게 안내합니다." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workItems.map((item) => (
              <article key={item.title} className="group rounded-lg border border-[#DDE7E7] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#B7DCDC] hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#E7F6F6] text-[#2D8C8C] transition group-hover:bg-[#2D8C8C] group-hover:text-white">
                  <item.icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-black text-[#333333]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#6B7280]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#DDE7E7] bg-white py-16 md:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle eyebrow="추천 제품" title="어르신 생활지원 제품" description="후원과 기관 납품이 가능한 제품을 중심으로 소개합니다." />
            <ButtonLink href="/products" variant="outline">
              전체 제품 보기
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 rounded-lg bg-[#2D8C8C] p-7 text-white shadow-xl md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h2 className="text-3xl font-black">필요한 제품을 필요한 어르신에게 전달합니다.</h2>
              <div className="mt-5 grid gap-2 text-white/88 sm:grid-cols-3">
                {["후원 제품 확인", "예산·수량 상담", "전달 대상 연결"].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 size={17} aria-hidden />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products" variant="secondary">
                후원 제품 보기
              </ButtonLink>
              <ButtonLink href="/donation/apply" variant="outline">
                후원 신청하기
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#DDE7E7] bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionTitle eyebrow="후원 현황" title="청하람과 함께 이어지는 따뜻한 연결" description="현재는 예시 데이터이며, 실제 운영 데이터 연동 시 관리자 기준 집계로 교체할 수 있습니다." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {donationStats.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#DDE7E7] bg-[#F8FAFB] p-5 shadow-sm">
                  <p className="text-sm font-black text-[#2D8C8C]">{label}</p>
                  <p className="mt-3 text-3xl font-black text-[#333333]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#DDE7E7] bg-white py-16 md:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle eyebrow="활동 소식" title="청하람의 전달과 협력 소식" />
            <ButtonLink href="/news" variant="outline">
              소식 더보기
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-lg border border-[#DDE7E7] bg-white p-7 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-black text-[#243238]">제품 구매, 기관 납품, 후원 문의가 필요하신가요?</h2>
                <p className="mt-4 text-lg text-[#64748B]">문의 내용을 남겨주시면 담당자가 확인 후 안내드립니다.</p>
              </div>
              <ButtonLink href="/contact">문의하기</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
