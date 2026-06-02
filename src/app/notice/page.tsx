import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/db";

export const metadata = { title: "공지사항" };

export default async function NoticePage() {
  const posts = await getPosts("notice");

  return (
    <>
      <PageHero title="공지사항" description="제품 상담, 기관 납품, 후원 운영 관련 공지를 안내합니다." />
      <Container className="grid gap-6 py-14 md:grid-cols-3 md:py-20">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Container>
    </>
  );
}
