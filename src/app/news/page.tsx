import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "활동 소식" };

export default async function NewsPage() {
  const posts = await getPosts("news");
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero eyebrow="NEWSROOM" title="활동 소식" description="청하람의 제품 전달, 협력, 후원 연결 소식을 전합니다." />
      <Container className="py-12 md:py-16">
        {featured ? (
          <article className="mb-10 grid overflow-hidden rounded-lg border border-[#DDE7E7] bg-white shadow-lg lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[320px]">
              <Image
                src={featured.thumbnail_url || "/images/news-delivery.png"}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-7 md:p-9">
              <p className="inline-flex items-center gap-2 text-sm font-black text-[#155F70]">
                <CalendarDays size={17} aria-hidden />
                {formatDate(featured.published_at)}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#243238] md:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-lg leading-8 text-[#64748B]">{featured.excerpt}</p>
              <Link href={`/news/${featured.slug}`} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#155F70] px-5 py-3 font-black text-white">
                대표 소식 보기
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </article>
        ) : null}
        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
