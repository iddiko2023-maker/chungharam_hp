import AdminHeader from "@/components/AdminHeader";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/db";

export default async function AdminPostsPage() {
  const posts = await getPosts();
  return (
    <>
      <AdminHeader title="게시글 관리" description="공지사항, 활동 소식, 후원 이야기를 관리합니다." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
