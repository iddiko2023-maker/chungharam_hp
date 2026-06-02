export type DonationRequest = {
  id: string;
  donor_type: "개인" | "기업" | "단체" | "기관";
  donor_name: string;
  phone?: string | null;
  email?: string | null;
  company?: string | null;
  product_id?: string | null;
  quantity?: number | null;
  message?: string | null;
  status?: "new" | "checking" | "completed";
  created_at?: string;
};
