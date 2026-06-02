import { Building2, CheckCircle2, Gift, HandHeart, HeartPulse, ShieldCheck } from "lucide-react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getPosts, getProducts } from "@/lib/db";

const workItems = [
  { title: "생활지원 제품", text: "어르신의 일상 편의와 이동을 돕는 제품을 선별합니다.", icon: HandHeart, tone: "bg-[#EAF7F5] text-[#0F6B78]" },
  { title: "안전보호 제품", text: "낙상과 생활 사고를 줄이는 안전 중심 제품을 제안합니다.", icon: ShieldCheck, tone: "bg-[#DDF2EF] text-[#147D88]" },
  { title: "건강관리 제품", text: "복지 현장의 기본 건강 확인과 관리에 필요한 구성을 준비합니다.", icon: HeartPulse, tone: "bg-[#EDF8EC] text-[#217A54]" },
  { title: "기관 납품", text: "기관 예산, 수량, 일정에 맞춘 상담형 납품을 지원합니다.", icon: Building2, tone: "bg-[#C7E9E4] text-[#0F6B78]" },
  { title: "제품 후원", text: "후원 제품이 필요한 어르신과 현장에 연결되도록 돕습니다.", icon: Gift, tone: "bg-[#FFF3D8] text-[#9A5A00]" },
];

const donationStats = [
  ["누적 후원 건수", "128건"],
  ["전달 제품 수량", "2,460개"],
  ["참여 기관 수", "34곳"],
  ["참여 후원자 수", "186명"],
];

const heroStats = [
  { title: "상담 중심", text: "결제 없이 문의 접수", icon: HandHeart, tone: "bg-[#EAF7F5] text-[#0F6B78]" },
  { title: "기관 납품", text: "수량·일정 맞춤 제안", icon: Building2, tone: "bg-[#DDF2EF] text-[#147D88]" },
  { title: "제품 후원", text: "필요 대상 연결", icon: Gift, tone: "bg-[#FFF3D8] text-[#9A5A00]" },
];

export default async function Home() {
  const [products, posts] = await Promise.all([getProducts(), getPosts()]);
  const featuredProducts = products.filter((product) => product.is_featured).slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <section className="overflow-hidden border-b border-[#D9E7E8] bg-[#F3F7F8]">
        <Container className="py-0">
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#F3F7F8]">
            <Image
              src="/images/hero-consultation.png"
              alt="어르신 생활지원 상담 장면"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/90 to-white/72 md:to-white/34" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFB]/92 via-transparent to-transparent" aria-hidden />
            <div className="relative mx-auto flex min-h-[560px] w-full max-w-7xl flex-col items-start justify-center px-4 py-14 sm:min-h-[600px] sm:px-6 md:min-h-[640px] md:py-20 lg:px-8">
              <div className="max-w-2xl">
                <p className="mb-5 inline-flex rounded-md border border-[#D9E7E8] bg-white/85 px-4 py-2 text-sm font-bold tracking-tight text-[#0F6B78] shadow-sm backdrop-blur">
                  어르신 생활지원 제품 플랫폼
                </p>
                <h1 className="text-4xl font-black leading-[1.14] text-[#17252A] md:text-5xl lg:text-[56px]">
                  어르신의 생활을 더 편안하게,
                  <br />
                  보이지 않는 안전까지 살피는 청하람
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#5B6B73] md:text-lg md:leading-9">
                  청하람은 노인지원재단과 함께 어르신에게 필요한 제품을 발굴하고 생활지원, 안전관리,
                  제품후원을 연결하는 기업입니다.
                </p>
                <div className="mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
                  <ButtonLink href="/products">제품 보기</ButtonLink>
                  <ButtonLink href="/donation/apply" variant="secondary">
                    후원하기
                  </ButtonLink>
                  <ButtonLink href="/business" variant="outline">
                    기관 납품 문의
                  </ButtonLink>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {heroStats.map((item) => (
                  <div key={item.title} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#D9E7E8] bg-white/86 px-3 py-2 text-sm font-bold text-[#24343A] shadow-sm backdrop-blur">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${item.tone}`}>
                      <item.icon size={15} aria-hidden />
                    </span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FAFB] py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="청하람이 하는 일" title="복지 현장에 필요한 제품과 연결을 설계합니다." description="제품 판매보다 생활지원, 안전, 건강관리, 기관 납품, 제품 후원의 흐름을 명확하게 안내합니다." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workItems.map((item) => (
              <article key={item.title} className="group rounded-lg border border-[#D9E7E8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C7E9E4] hover:shadow-md">
                <div className={`flex h-14 w-14 items-center justify-center rounded-lg transition group-hover:scale-105 ${item.tone}`}>
                  <item.icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-black text-[#17252A]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#5B6B73]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#D9E7E8] bg-white py-16 md:py-24">
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

      <section className="bg-[#F3F7F8] py-16 md:py-24">
        <Container>
          <div className="grid gap-8 rounded-lg bg-gradient-to-br from-[#147D88] via-[#1C8F8A] to-[#2F9E96] p-7 text-white shadow-[0_24px_60px_rgba(15,107,120,0.18)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h2 className="text-3xl font-black">필요한 제품을 필요한 어르신에게 전달합니다.</h2>
              <div className="mt-5 grid gap-2 text-white sm:grid-cols-3">
                {["후원 제품 확인", "예산·수량 상담", "전달 대상 연결"].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 className="text-[#C7E9E4]" size={17} aria-hidden />
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

      <section className="border-y border-[#D9E7E8] bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionTitle eyebrow="후원 현황" title="청하람과 함께 이어지는 따뜻한 연결" description="현재는 예시 데이터이며, 실제 운영 데이터 연동 시 관리자 기준 집계로 교체할 수 있습니다." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {donationStats.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#D9E7E8] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm font-bold tracking-tight text-[#0F6B78]">{label}</p>
                  <p className="mt-3 text-4xl font-black text-[#17252A]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#D9E7E8] bg-[#F8FAFB] py-16 md:py-24">
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

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="rounded-lg border border-[#D9E7E8] bg-white p-7 shadow-sm transition-shadow hover:shadow-md md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-black text-[#17252A]">제품 구매, 기관 납품, 후원 문의가 필요하신가요?</h2>
                <p className="mt-4 text-lg leading-8 text-[#5B6B73]">문의 내용을 남겨주시면 담당자가 확인 후 안내드립니다.</p>
              </div>
              <ButtonLink href="/contact">문의하기</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
