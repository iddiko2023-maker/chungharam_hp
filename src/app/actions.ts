"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseAdminClient } from "@/lib/supabaseAdmin";
import { donationSchema, inquirySchema, productSchema } from "@/lib/validations";

export type ActionState = {
  ok: boolean;
  message: string;
};

function formValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitInquiry(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = inquirySchema.safeParse({
    type: formValue(formData, "type"),
    name: formValue(formData, "name"),
    phone: formValue(formData, "phone"),
    email: formValue(formData, "email"),
    company: formValue(formData, "company"),
    product_id: formValue(formData, "product_id"),
    message: formValue(formData, "message"),
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "입력값을 확인해 주세요." };
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("inquiries").insert({
      ...parsed.data,
      product_id: parsed.data.product_id || null,
    });
    if (error) throw error;
    return { ok: true, message: "문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다." };
  } catch (error) {
    return { ok: false, message: `저장 중 오류가 발생했습니다. ${error instanceof Error ? error.message : ""}` };
  }
}

export async function submitDonation(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = donationSchema.safeParse({
    donor_type: formValue(formData, "donor_type"),
    donor_name: formValue(formData, "donor_name"),
    phone: formValue(formData, "phone"),
    email: formValue(formData, "email"),
    company: formValue(formData, "company"),
    product_id: formValue(formData, "product_id"),
    quantity: formValue(formData, "quantity") || undefined,
    message: formValue(formData, "message"),
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "입력값을 확인해 주세요." };
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("donation_requests").insert({
      ...parsed.data,
      product_id: parsed.data.product_id || null,
    });
    if (error) throw error;
    return { ok: true, message: "후원 신청이 접수되었습니다. 담당자가 확인 후 연락드리겠습니다." };
  } catch (error) {
    return { ok: false, message: `저장 중 오류가 발생했습니다. ${error instanceof Error ? error.message : ""}` };
  }
}

export async function createProduct(formData: FormData) {
  const parsed = productSchema.safeParse({
    name: formValue(formData, "name"),
    slug: formValue(formData, "slug"),
    short_description: formValue(formData, "short_description"),
    description: formValue(formData, "description"),
    main_image_url: formValue(formData, "main_image_url"),
    price_text: formValue(formData, "price_text"),
    is_featured: formData.has("is_featured"),
    is_donation_available: formData.has("is_donation_available"),
    is_business_available: formData.has("is_business_available"),
  });

  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "제품 입력값을 확인해 주세요.");
  }

  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from("products").insert(parsed.data);
  if (error) throw error;
  revalidatePath("/products");
  revalidatePath("/admin/products");
}
