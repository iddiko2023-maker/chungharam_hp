import Image from "next/image";
import Link from "next/link";
import { Gift, MessageCircle, ShieldCheck } from "lucide-react";
import type { Product } from "@/types/product";
import ButtonLink from "@/components/ButtonLink";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#D9E7E8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C7E9E4] hover:shadow-[0_22px_45px_rgba(15,107,120,0.14)]">
      <div className="relative h-64 overflow-hidden bg-[#E5EEF0] sm:h-72 md:h-64">
        <Image
          src={product.main_image_url || "/images/product-hygiene-package.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-sm font-black text-[#0F6B78] shadow-sm backdrop-blur">
          {product.categories?.name ?? "제품"}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {product.is_donation_available ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-[#FFF3D8] px-3 py-1 text-sm font-bold text-[#9A5A00]">
              <Gift size={14} aria-hidden />
              후원 가능
            </span>
          ) : null}
          {product.is_business_available ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-[#EAF7F5] px-3 py-1 text-sm font-bold text-[#0F6B78]">
              <ShieldCheck size={14} aria-hidden />
              납품 상담
            </span>
          ) : null}
        </div>
        <h3 className="text-2xl font-black leading-snug text-[#17252A]">{product.name}</h3>
        <p className="mt-3 min-h-20 text-base leading-7 text-[#5B6B73]">{product.short_description}</p>
        <p className="mt-3 border-t border-[#E5EEF0] pt-4 font-black text-[#24343A]">{product.price_text}</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <ButtonLink href={`/products/${product.slug}`}>자세히</ButtonLink>
          <Link
            href={`/contact?product=${product.slug}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#0F6B78] bg-white px-4 py-3 font-black text-[#0F6B78] transition-all duration-200 hover:bg-[#EAF7F5] hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623] active:scale-[0.99]"
          >
            <MessageCircle size={18} aria-hidden />
            구매 문의
          </Link>
        </div>
      </div>
    </article>
  );
}
