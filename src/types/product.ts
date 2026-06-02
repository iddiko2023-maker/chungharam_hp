export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  sort_order?: number;
  is_active?: boolean;
};

export type Product = {
  id: string;
  category_id?: string | null;
  name: string;
  slug: string;
  short_description?: string | null;
  description?: string | null;
  main_image_url?: string | null;
  gallery_urls?: string[] | null;
  price_text?: string | null;
  is_featured?: boolean;
  is_donation_available?: boolean;
  is_business_available?: boolean;
  status?: string;
  sort_order?: number;
  categories?: Category | null;
};
