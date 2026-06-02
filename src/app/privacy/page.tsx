import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata = { title: "개인정보처리방침" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="개인정보처리방침" description="청하람은 문의 및 후원 신청 처리를 위해 필요한 최소한의 개인정보를 수집합니다." />
      <Container className="prose-clean py-14 text-lg leading-8 text-[#333333] md:py-20">
        <p>수집 항목은 이름, 연락처, 이메일, 회사명, 문의 내용입니다.</p>
        <p>수집된 정보는 상담과 신청 처리 목적에 한해 사용되며, 관련 법령에 따른 보관 기간 이후 지체 없이 파기합니다.</p>
        <p>이 방침은 실제 운영 정책 확정 시 회사 정보와 담당자 정보를 반영해 보완해야 합니다.</p>
      </Container>
    </>
  );
}
