"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitInquiry, type ActionState } from "@/app/actions";
import type { Product } from "@/types/product";

const initialState: ActionState = { ok: false, message: "" };

export default function InquiryForm({ products = [] }: { products?: Product[] }) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  return (
    <form action={formAction} className="grid gap-5 rounded-[28px] bg-white/86 p-5 ring-1 ring-[#DDE7E7]/70 shadow-[0_16px_38px_rgba(15,107,120,0.08)] md:p-7">
      <div className="border-b border-[#EEF2F2] pb-5">
        <p className="text-sm font-black text-[#155F70]">문의 접수 양식</p>
        <h2 className="mt-2 text-2xl font-black text-[#243238]">필요한 내용을 남겨주세요.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 font-bold">
          문의 유형
          <select name="type" className="min-h-12 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" defaultValue="general">
            <option value="product">제품 구매</option>
            <option value="business">기관 납품</option>
            <option value="donation">제품 후원</option>
            <option value="partnership">제휴</option>
            <option value="general">일반 문의</option>
          </select>
        </label>
        <label className="grid gap-2 font-bold">
          관련 제품
          <select name="product_id" className="min-h-12 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]">
            <option value="">선택 안 함</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 font-bold">
          이름
          <input name="name" required className="min-h-12 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" />
        </label>
        <label className="grid gap-2 font-bold">
          연락처
          <input name="phone" className="min-h-12 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 font-bold">
          이메일
          <input name="email" type="email" className="min-h-12 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" />
        </label>
        <label className="grid gap-2 font-bold">
          회사명/기관명
          <input name="company" className="min-h-12 rounded-[16px] border-0 bg-[#F8FAFB] px-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" />
        </label>
      </div>
      <label className="grid gap-2 font-bold">
        문의 내용
        <textarea name="message" required rows={6} className="rounded-[16px] border-0 bg-[#F8FAFB] px-3 py-3 font-normal ring-1 ring-[#DDE7E7]/75 focus:ring-2 focus:ring-[#5BB6B6]" />
      </label>
      {state.message ? (
        <p className={state.ok ? "font-bold text-[#2D8C8C]" : "font-bold text-red-600"}>{state.message}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#155F70] px-5 py-3 font-black text-white transition hover:bg-[#0F6B78] disabled:opacity-60"
      >
        <Send size={18} aria-hidden />
        {pending ? "접수 중" : "문의 접수"}
      </button>
    </form>
  );
}
