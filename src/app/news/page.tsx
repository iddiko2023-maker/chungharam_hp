import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/db";

export const metadata = { title: "활동 소식" };

export default async function NewsPage() {
  const posts = await getPosts("news");

  return (
    <>
      <PageHero
        eyebrow="NEWSROOM"
        title="활동 소식"
        description="청하람의 제품 전달, 협력, 후원 연결 소식을 전합니다."
        imageSrc="/images/news-delivery.png"
        imageAlt="청하람 활동 소식"
      />
      <Container className="py-16 md:py-24">
        <div className="mb-8 rounded-[28px] bg-white/76 p-6 ring-1 ring-[#DDE7E7]/65">
          <p className="text-sm font-black text-[#2D8C8C]">청하람 활동 아카이브</p>
          <h2 className="mt-2 text-2xl font-black text-[#333333]">전달, 협력, 후원 연결 소식을 한눈에 확인합니다.</h2>
          <p className="mt-3 leading-7 text-[#6B7280]">모든 소식은 카드형 구조로 정리해 모바일에서도 쉽게 훑어볼 수 있습니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
