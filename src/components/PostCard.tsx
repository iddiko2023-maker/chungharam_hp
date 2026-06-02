import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/post";

export default function PostCard({ post }: { post: Post }) {
  const href = post.type === "notice" ? `/notice/${post.slug}` : `/news/${post.slug}`;

  return (
    <article className="group overflow-hidden rounded-lg border border-[#DDE7E7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/9] bg-[#E5E7EB]">
        <Image
          src={post.thumbnail_url || "/images/news-delivery.png"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[#155F70]">
          <CalendarDays size={16} aria-hidden />
          {formatDate(post.published_at)}
        </p>
        <h3 className="text-xl font-black leading-snug text-[#243238]">{post.title}</h3>
        <p className="mt-3 min-h-16 leading-7 text-[#6B7280]">{post.excerpt}</p>
        <Link href={href} className="mt-4 inline-flex min-h-11 items-center gap-2 font-black text-[#155F70]">
          자세히 보기
          <ArrowUpRight size={17} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
