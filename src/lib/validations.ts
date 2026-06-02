import { z } from "zod";

export const inquirySchema = z.object({
  type: z.enum(["product", "business", "donation", "partnership", "general"]),
  name: z.string().min(2, "이름을 입력해 주세요."),
  phone: z.string().min(8, "연락처를 입력해 주세요.").optional().or(z.literal("")),
  email: z.string().email("이메일 형식을 확인해 주세요.").optional().or(z.literal("")),
  company: z.string().optional(),
  product_id: z.string().optional(),
  message: z.string().min(10, "문의 내용을 10자 이상 입력해 주세요."),
});

export const donationSchema = z.object({
  donor_type: z.enum(["개인", "기업", "단체", "기관"]),
  donor_name: z.string().min(2, "후원자명을 입력해 주세요."),
  phone: z.string().min(8, "연락처를 입력해 주세요.").optional().or(z.literal("")),
  email: z.string().email("이메일 형식을 확인해 주세요.").optional().or(z.literal("")),
  company: z.string().optional(),
  product_id: z.string().optional(),
  quantity: z.coerce.number().int().positive().optional(),
  message: z.string().min(10, "전달 메시지를 10자 이상 입력해 주세요."),
});

export const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  short_description: z.string().optional(),
  description: z.string().optional(),
  main_image_url: z.string().url().optional().or(z.literal("")),
  price_text: z.string().optional(),
  is_featured: z.coerce.boolean().optional(),
  is_donation_available: z.coerce.boolean().optional(),
  is_business_available: z.coerce.boolean().optional(),
});
