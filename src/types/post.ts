export type Post = {
  id: string;
  type: "notice" | "news" | "donation_story";
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  thumbnail_url?: string | null;
  status?: string;
  published_at?: string | null;
};
