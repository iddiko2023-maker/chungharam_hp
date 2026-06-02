import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#D9E7E8] bg-[#EAF7F5]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:items-start">
          <div>
            <Image
              src="/cheongharam-logo.svg"
              alt="CHUNGHARAM 청하람"
              width={220}
              height={171}
              className="h-20 w-auto object-contain"
            />
            <p className="mt-4 max-w-xl text-base leading-8 text-[#5B6B73]">
              어르신 생활지원 제품을 발굴하고 기관 납품, 제품 후원, 구매 문의를 연결하는 신뢰 중심 플랫폼입니다.
            </p>
          </div>
          <div className="rounded-lg border border-[#D9E7E8] bg-white/60 p-5 leading-8 text-[#5B6B73]">
            <p className="font-black text-[#17252A]">회사 정보</p>
            <p>사업자등록번호: 준비중</p>
            <p>주소: 서울특별시 소재</p>
          </div>
          <div className="rounded-lg border border-[#D9E7E8] bg-white/60 p-5 leading-8 text-[#5B6B73]">
            <p className="font-black text-[#17252A]">문의</p>
            <p>전화: 02-0000-0000</p>
            <p>이메일: contact@cheongharam.co.kr</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-[#D9E7E8] pt-6 text-sm text-[#5B6B73] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cheongharam. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-[#0F6B78]">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="transition hover:text-[#0F6B78]">
              이용약관
            </Link>
            <Link href="/admin/login" className="transition hover:text-[#0F6B78]">
              관리자
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
