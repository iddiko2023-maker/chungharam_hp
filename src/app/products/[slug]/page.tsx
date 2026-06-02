import { notFound } from "next/navigation";
import Image from "next/image";
import { Building2, CheckCircle2, ClipboardCheck, Gift, ShieldCheck } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import { getProduct, getProducts } from "@/lib/db";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <Container className="py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#E5E7EB] ring-1 ring-[#DDE7E7]/70 shadow-[0_18px_44px_rgba(15,107,120,0.10)]">
            <Image
              src={product.main_image_url || "/images/product-hygiene-package.png"}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
              priority
            />
            <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-sm font-black text-[#155F70] shadow-sm backdrop-blur">
              {product.categories?.name ?? "제품"}
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["상담 접수", "구성 확인", "납품/전달"].map((step) => (
              <div key={step} className="rounded-[18px] bg-white/82 p-4 text-center ring-1 ring-[#DDE7E7]/65">
                <CheckCircle2 className="mx-auto text-[#155F70]" size={22} aria-hidden />
                <p className="mt-2 text-sm font-black text-[#243238]">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-black text-[#155F70]">PRODUCT DETAIL</p>
          <h1 className="text-4xl font-black leading-tight text-[#243238] md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-xl leading-8 text-[#64748B]">{product.short_description}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] bg-white/82 p-5 ring-1 ring-[#DDE7E7]/65">
              <ClipboardCheck className="text-[#155F70]" size={24} aria-hidden />
              <p className="mt-3 text-sm font-bold text-[#64748B]">상담 기준</p>
              <p className="mt-1 text-xl font-black text-[#243238]">{product.price_text}</p>
            </div>
            <div className="rounded-[22px] bg-white/82 p-5 ring-1 ring-[#DDE7E7]/65">
              <ShieldCheck className="text-[#155F70]" size={24} aria-hidden />
              <p className="mt-3 text-sm font-bold text-[#64748B]">운영 방식</p>
              <p className="mt-1 text-xl font-black text-[#243238]">문의 후 맞춤 안내</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.is_donation_available ? (
              <span className="inline-flex items-center gap-2 rounded-md bg-[#fff5df] px-3 py-2 font-bold text-[#8a5a00]">
                <Gift size={17} aria-hidden />
                후원 가능
              </span>
            ) : null}
            {product.is_business_available ? (
              <span className="inline-flex items-center gap-2 rounded-md bg-[#E7F6F6] px-3 py-2 font-bold text-[#155F70]">
                <Building2 size={17} aria-hidden />
                기관 납품 가능
              </span>
            ) : null}
          </div>
          <div className="prose-clean mt-8 rounded-[24px] bg-[#F8FAFB] p-6 text-lg leading-8 text-[#475569] ring-1 ring-[#DDE7E7]/65">
            <h2 className="mb-4 text-2xl font-black text-[#243238]">제품 설명</h2>
            <p>{product.description}</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <ButtonLink href={`/contact?product=${product.slug}`}>구매 문의</ButtonLink>
            <ButtonLink href="/donation/apply" variant="secondary">
              후원 신청
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
