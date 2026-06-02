import { Building2, Clock, Mail, MessageSquare, Phone } from "lucide-react";
import Container from "@/components/Container";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { getProducts } from "@/lib/db";

export const metadata = { title: "문의하기" };

export default async function ContactPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero eyebrow="CONTACT" title="문의하기" description="제품 구매, 기관 납품, 후원, 제휴 문의를 남겨주세요." />
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <aside className="grid gap-4">
            <div className="rounded-lg bg-[#155F70] p-7 text-white shadow-lg">
              <MessageSquare size={30} aria-hidden />
              <h2 className="mt-5 text-3xl font-black">상담 접수 후 담당자가 확인합니다.</h2>
              <p className="mt-4 leading-8 text-white/85">제품명, 수량, 기관명, 희망 일정이 있으면 더 빠르게 안내할 수 있습니다.</p>
            </div>
            {[
              [Phone, "전화 문의", "02-0000-0000"],
              [Mail, "이메일", "contact@cheongharam.co.kr"],
              [Clock, "응답 기준", "영업일 기준 순차 확인"],
              [Building2, "기관 납품", "수량·일정·예산 상담"],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="flex gap-4 rounded-lg border border-[#DDE7E7] bg-white p-5 shadow-sm">
                <Icon className="shrink-0 text-[#155F70]" size={24} aria-hidden />
                <div>
                  <p className="font-black text-[#243238]">{title as string}</p>
                  <p className="mt-1 text-[#64748B]">{text as string}</p>
                </div>
              </div>
            ))}
          </aside>
          <InquiryForm products={products} />
        </div>
      </Container>
    </>
  );
}
