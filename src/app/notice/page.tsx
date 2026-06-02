import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { getPosts } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "공지사항" };

export default async function NoticePage() {
  const posts = await getPosts("notice");

  return (
    <>
      <PageHero eyebrow="NOTICE" title="공지사항" description="제품 상담, 기관 납품, 후원 운영 관련 공지를 안내합니다." />
      <Container className="py-16 md:py-24">
        <div className="overflow-hidden rounded-lg border border-[#DDE7E7] bg-white shadow-sm">
          <div className="hidden grid-cols-[160px_1fr_140px] border-b border-[#E5E7EB] bg-[#F8FAFB] px-6 py-4 text-sm font-black text-[#333333] md:grid">
            <p>구분</p>
            <p>제목</p>
            <p>등록일</p>
          </div>
          <div className="divide-y divide-[#EEF2F2]">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/notice/${post.slug}`}
                className="grid gap-3 px-5 py-5 transition hover:bg-[#F2FBFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#F5A623] md:grid-cols-[160px_1fr_140px] md:items-center md:px-6"
              >
                <span className="inline-flex w-fit rounded-md bg-[#E7F6F6] px-3 py-1 text-sm font-black text-[#2D8C8C]">
                  공지
                </span>
                <span>
                  <strong className="block text-lg font-black leading-snug text-[#333333]">{post.title}</strong>
                  <span className="mt-2 block text-base leading-7 text-[#6B7280]">{post.excerpt}</span>
                </span>
                <span className="flex items-center justify-between gap-3 text-sm font-bold text-[#6B7280] md:block">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={16} aria-hidden />
                    {formatDate(post.published_at)}
                  </span>
                  <ArrowRight className="text-[#2D8C8C] md:hidden" size={18} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
