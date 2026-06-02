import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/Container";
import { getPost, getPosts } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts("news");
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || post.type === "notice") notFound();

  return (
    <Container className="py-14 md:py-20">
      <article className="mx-auto max-w-3xl">
        <p className="font-bold text-[#2D8C8C]">{formatDate(post.published_at)}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-[#333333]">{post.title}</h1>
        <p className="mt-5 text-xl leading-8 text-[#6B7280]">{post.excerpt}</p>
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image src={post.thumbnail_url || "/images/news-delivery.png"} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>
        <div className="prose-clean mt-8 text-lg leading-8 text-[#333333]">
          <p>{post.content}</p>
        </div>
      </article>
    </Container>
  );
}
