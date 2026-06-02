import Image from "next/image";
import Link from "next/link";
import { Gift, MessageCircle } from "lucide-react";
import type { Product } from "@/types/product";
import ButtonLink from "@/components/ButtonLink";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#DDE7E7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] bg-[#E5E7EB]">
        <Image
          src={product.main_image_url || "/images/product-hygiene-package.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/92 px-3 py-1 text-sm font-black text-[#155F70] shadow-sm">
          {product.categories?.name ?? "제품"}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {product.is_donation_available ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-[#fff5df] px-3 py-1 text-sm font-bold text-[#8a5a00]">
              <Gift size={14} aria-hidden />
              후원 가능
            </span>
          ) : null}
        </div>
        <h3 className="text-xl font-black leading-snug text-[#243238]">{product.name}</h3>
        <p className="mt-3 min-h-20 leading-7 text-[#6B7280]">{product.short_description}</p>
        <p className="mt-3 border-t border-[#EEF2F2] pt-4 font-black text-[#243238]">{product.price_text}</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <ButtonLink href={`/products/${product.slug}`}>자세히</ButtonLink>
          <Link
            href={`/contact?product=${product.slug}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#B7DCDC] px-4 py-3 font-black text-[#155F70] hover:border-[#2D8C8C] hover:bg-[#F2FBFB]"
          >
            <MessageCircle size={18} aria-hidden />
            구매 문의
          </Link>
        </div>
      </div>
    </article>
  );
}
