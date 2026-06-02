"use client";

import { useActionState } from "react";
import { Gift } from "lucide-react";
import { submitDonation, type ActionState } from "@/app/actions";
import type { Product } from "@/types/product";

const initialState: ActionState = { ok: false, message: "" };

export default function DonationForm({ products = [] }: { products?: Product[] }) {
  const [state, formAction, pending] = useActionState(submitDonation, initialState);

  return (
    <form action={formAction} className="grid gap-5 rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm md:p-7">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 font-bold">
          후원자 유형
          <select name="donor_type" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal">
            <option value="개인">개인</option>
            <option value="기업">기업</option>
            <option value="단체">단체</option>
            <option value="기관">기관</option>
          </select>
        </label>
        <label className="grid gap-2 font-bold">
          후원 제품
          <select name="product_id" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal">
            <option value="">상담 후 결정</option>
            {products
              .filter((product) => product.is_donation_available)
              .map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 font-bold">
          후원자명
          <input name="donor_name" required className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
        </label>
        <label className="grid gap-2 font-bold">
          수량
          <input name="quantity" type="number" min="1" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 font-bold">
          연락처
          <input name="phone" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
        </label>
        <label className="grid gap-2 font-bold">
          이메일
          <input name="email" type="email" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
        </label>
      </div>
      <label className="grid gap-2 font-bold">
        회사명/기관명
        <input name="company" className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" />
      </label>
      <label className="grid gap-2 font-bold">
        전달 메시지
        <textarea name="message" required rows={6} className="rounded-lg border border-[#E5E7EB] px-3 py-3 font-normal" />
      </label>
      {state.message ? (
        <p className={state.ok ? "font-bold text-[#2D8C8C]" : "font-bold text-red-600"}>{state.message}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2D8C8C] px-5 py-3 font-bold text-white disabled:opacity-60"
      >
        <Gift size={18} aria-hidden />
        {pending ? "접수 중" : "후원 신청 접수"}
      </button>
    </form>
  );
}
