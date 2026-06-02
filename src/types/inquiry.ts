export type InquiryType = "product" | "business" | "donation" | "partnership" | "general";

export type Inquiry = {
  id: string;
  type: InquiryType;
  name: string;
  phone?: string | null;
  email?: string | null;
  company?: string | null;
  message?: string | null;
  product_id?: string | null;
  status?: "new" | "checking" | "completed";
  created_at?: string;
};
