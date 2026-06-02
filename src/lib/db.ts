import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseAdminClient } from "@/lib/supabaseAdmin";
import { posts as samplePosts, products as sampleProducts } from "@/lib/sampleData";
import type { Post } from "@/types/post";
import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  noStore();
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("products")
      .select("*, categories(*)")
      .eq("status", "active")
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data?.length ? (data as Product[]) : sampleProducts;
  } catch {
    return sampleProducts;
  }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

export async function getPosts(type?: "notice" | "news" | "donation_story"): Promise<Post[]> {
  noStore();
  try {
    const supabase = createSupabaseAdminClient();
    let query = supabase
      .from("posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false });
    if (type) query = query.eq("type", type);
    const { data, error } = await query;
    if (error) throw error;
    return data?.length ? (data as Post[]) : samplePosts.filter((post) => !type || post.type === type);
  } catch {
    return samplePosts.filter((post) => !type || post.type === type);
  }
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
