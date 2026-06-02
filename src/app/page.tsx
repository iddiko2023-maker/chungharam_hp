import { Building2, CheckCircle2, Gift, HandHeart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getPosts, getProducts } from "@/lib/db";

const services = [
  { title: "생활지원 제품 공급", text: "현장에서 필요한 제품을 발굴하고 안정적으로 공급합니다.", icon: HandHeart },
  { title: "안전보호 제품 제공", text: "낙상과 생활 사고를 줄이는 안전 제품을 제안합니다.", icon: ShieldCheck },
  { title: "제품 후원 연결", text: "필요한 제품을 필요한 어르신에게 전달할 수 있게 연결합니다.", icon: Gift },
  { title: "기관 납품 지원", text: "복지기관, 단체, 기업의 수량과 일정에 맞춰 상담합니다.", icon: Building2 },
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
      <section className="surface-grid border-b border-[#DDE7E7] bg-white">
        <Container className="grid gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-14 lg:py-16">
          <div>
            <p className="mb-4 inline-flex rounded-md bg-[#E7F6F6] px-3 py-2 text-sm font-black text-[#155F70]">
              어르신 생활지원 제품 플랫폼
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-[#243238] md:text-5xl lg:text-6xl">
              어르신의 생활을 더 편안하게,
              <br />
              보이지 않는 안전까지 살피는 청하람
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748B]">
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
                <div key={title} className="border-l-2 border-[#2D8C8C] bg-white/80 px-4 py-3 shadow-sm">
                  <p className="font-black text-[#243238]">{title}</p>
                  <p className="mt-1 text-sm font-bold text-[#64748B]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-[#DDE7E7] bg-white shadow-xl">
            <Image
              src="/images/hero-consultation.png"
              alt="어르신 생활지원 상담 장면"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-white/94 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <p className="text-lg font-black text-[#243238]">문의 기반 운영</p>
                <p className="text-sm leading-6 text-[#64748B]">제품 구매, 기관 납품, 후원 신청을 상담 흐름으로 연결합니다.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container>
          <SectionTitle title="청하람 주요 서비스" description="쇼핑몰보다 현장 연결에 가까운 구조로 제품 상담과 후원을 지원합니다." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-[#DDE7E7] bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E7F6F6]">
                  <service.icon className="h-7 w-7 text-[#155F70]" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#243238]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#64748B]">{service.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#DDE7E7] bg-white py-14 md:py-18">
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

      <section className="py-14 md:py-18">
        <Container>
          <div className="grid gap-8 rounded-lg bg-[#155F70] p-7 text-white shadow-lg md:grid-cols-[1fr_auto] md:items-center md:p-10">
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

      <section className="border-y border-[#DDE7E7] bg-white py-14 md:py-18">
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

      <section className="py-14 md:py-18">
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
