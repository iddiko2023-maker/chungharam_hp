import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/post";

export default function PostCard({ post }: { post: Post }) {
  const href = post.type === "notice" ? `/notice/${post.slug}` : `/news/${post.slug}`;

  return (
    <article className="group overflow-hidden rounded-[22px] bg-white/88 ring-1 ring-[#D9E7E8]/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:ring-[#C7E9E4] hover:shadow-[0_16px_36px_rgba(15,107,120,0.10)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#E5EEF0]">
        <Image
          src={post.thumbnail_url || "/images/news-delivery.png"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[#0F6B78]">
          <CalendarDays size={16} aria-hidden />
          {formatDate(post.published_at)}
        </p>
        <h3 className="text-xl font-black leading-snug text-[#17252A]">{post.title}</h3>
        <p className="mt-3 min-h-16 leading-7 text-[#5B6B73]">{post.excerpt}</p>
        <Link href={href} className="mt-4 inline-flex min-h-11 items-center gap-2 font-black text-[#0F6B78] transition hover:text-[#147D88] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623]">
          자세히 보기
          <ArrowUpRight size={17} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
