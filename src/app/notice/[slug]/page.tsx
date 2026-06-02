import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { getPost, getPosts } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts("notice");
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || post.type !== "notice") notFound();

  return (
    <Container className="py-14 md:py-20">
      <article className="mx-auto max-w-3xl rounded-[28px] bg-white/86 p-7 ring-1 ring-[#DDE7E7]/65">
        <p className="font-bold text-[#2D8C8C]">{formatDate(post.published_at)}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-[#333333]">{post.title}</h1>
        <p className="mt-5 text-xl leading-8 text-[#6B7280]">{post.excerpt}</p>
        <div className="prose-clean mt-8 text-lg leading-8 text-[#333333]">
          <p>{post.content}</p>
        </div>
      </article>
    </Container>
  );
}
