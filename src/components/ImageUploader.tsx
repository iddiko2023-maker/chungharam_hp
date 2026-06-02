"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabaseClient";

export default function ImageUploader({ name = "main_image_url" }: { name?: string }) {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  async function upload(file: File) {
    setMessage("업로드 중");
    try {
      const supabase = createSupabaseBrowserClient();
      const path = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from("images").upload(path, file, { upsert: false });
      if (error) throw error;
      const { data } = supabase.storage.from("images").getPublicUrl(path);
      setUrl(data.publicUrl);
      setMessage("업로드 완료");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "업로드 실패");
    }
  }

  return (
    <div className="grid gap-2">
      <label className="font-bold">이미지 업로드</label>
      <input type="hidden" name={name} value={url} />
      <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#2D8C8C]/60 bg-[#F8FAFB] p-4 text-center font-bold text-[#2D8C8C] transition hover:bg-[#EAF7F5]">
        <Upload size={22} aria-hidden />
        이미지 선택
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void upload(file);
          }}
        />
      </label>
      {url ? <input className="min-h-11 rounded-[16px] border-0 bg-[#F8FAFB] px-3 ring-1 ring-[#DDE7E7]/75" value={url} readOnly /> : null}
      {message ? <p className="text-sm font-bold text-[#6B7280]">{message}</p> : null}
    </div>
  );
}
