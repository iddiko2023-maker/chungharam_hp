"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("로그인 중");
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push("/admin");
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "로그인 실패");
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border border-[#E5E7EB] bg-white p-7 shadow-sm">
      <h1 className="text-3xl font-black text-[#333333]">관리자 로그인</h1>
      <p className="mt-3 text-[#6B7280]">Supabase Auth에 생성한 관리자 계정으로 로그인합니다.</p>
      <form onSubmit={onSubmit} className="mt-7 grid gap-5">
        <label className="grid gap-2 font-bold">
          이메일
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" required />
        </label>
        <label className="grid gap-2 font-bold">
          비밀번호
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="min-h-11 rounded-lg border border-[#E5E7EB] px-3 font-normal" required />
        </label>
        {message ? <p className="font-bold text-[#6B7280]">{message}</p> : null}
        <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2D8C8C] px-5 py-3 font-bold text-white">
          <LogIn size={18} aria-hidden />
          로그인
        </button>
      </form>
    </div>
  );
}
