import Container from "@/components/Container";
import DonationForm from "@/components/DonationForm";
import PageHero from "@/components/PageHero";
import { getProducts } from "@/lib/db";

export const metadata = { title: "후원 신청" };

export default async function DonationApplyPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        title="후원 신청"
        description="후원자 정보와 희망 제품을 남겨주시면 담당자가 확인 후 안내드립니다."
        imageSrc="/images/news-delivery.png"
        imageAlt="후원 신청 안내 이미지"
      />
      <Container className="py-14 md:py-20">
        <DonationForm products={products} />
      </Container>
    </>
  );
}
