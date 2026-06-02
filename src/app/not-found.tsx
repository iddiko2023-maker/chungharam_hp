import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-black text-[#333333]">페이지를 찾을 수 없습니다.</h1>
      <p className="mt-5 text-lg text-[#6B7280]">주소를 다시 확인하거나 홈으로 이동해 주세요.</p>
      <div className="mt-8">
        <ButtonLink href="/">홈으로 이동</ButtonLink>
      </div>
    </Container>
  );
}
