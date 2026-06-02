import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#DDE7E7] bg-[#F3F8F8]">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/cheongharam-logo.svg"
              alt="CHUNGHARAM 청하람"
              width={220}
              height={171}
              className="h-20 w-auto object-contain"
            />
            <p className="mt-3 max-w-xl leading-7 text-[#6B7280]">
              어르신 생활지원 제품을 발굴하고 기관 납품, 제품 후원, 구매 문의를 연결하는 신뢰 중심 플랫폼입니다.
            </p>
          </div>
          <div className="leading-8 text-[#6B7280]">
            <p className="font-bold text-[#333333]">회사 정보</p>
            <p>사업자등록번호: 준비중</p>
            <p>주소: 서울특별시 소재</p>
          </div>
          <div className="leading-8 text-[#6B7280]">
            <p className="font-bold text-[#333333]">문의</p>
            <p>전화: 02-0000-0000</p>
            <p>이메일: contact@cheongharam.co.kr</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-[#DDE7E7] pt-6 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cheongharam. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#2D8C8C]">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-[#2D8C8C]">
              이용약관
            </Link>
            <Link href="/admin/login" className="hover:text-[#2D8C8C]">
              관리자
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
