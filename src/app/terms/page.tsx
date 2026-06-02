import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata = { title: "이용약관" };

export default function TermsPage() {
  return (
    <>
      <PageHero title="이용약관" description="청하람 홈페이지 이용과 문의 접수에 관한 기본 약관입니다." />
      <Container className="prose-clean py-14 text-lg leading-8 text-[#333333] md:py-20">
        <p>청하람 홈페이지는 제품 정보 제공, 기관 납품 문의, 제품 후원 신청 접수를 목적으로 운영됩니다.</p>
        <p>홈페이지에 표시된 제품 정보와 견적 조건은 상담 과정에서 변경될 수 있습니다.</p>
        <p>QR 추적, 결제, 배송조회, 회원 포인트 기능은 현재 서비스 범위에 포함되지 않습니다.</p>
      </Container>
    </>
  );
}
