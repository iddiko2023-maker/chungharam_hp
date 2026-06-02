"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "청하람 소개" },
  { href: "/products", label: "제품 안내" },
  { href: "/donation", label: "제품 후원" },
  { href: "/business", label: "기관 납품" },
  { href: "/news", label: "활동 소식" },
  { href: "/notice", label: "공지사항" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9E7E8] bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="청하람 홈">
          <Image
            src="/cheongharam-logo.svg"
            alt="CHUNGHARAM 청하람"
            width={174}
            height={135}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-[15px] font-bold text-[#24343A] transition hover:text-[#0F6B78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A623]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0F6B78] px-4 py-3 font-bold text-white shadow-sm transition hover:bg-[#147D88] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623]"
          >
            <Phone size={18} aria-hidden />
            문의하기
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E7E8] bg-white transition hover:bg-[#EAF7F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="모바일 메뉴 열기"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#D9E7E8] bg-white lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-bold text-[#24343A] transition hover:bg-[#EAF7F5]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0F6B78] px-4 py-3 font-bold text-white"
              onClick={() => setOpen(false)}
            >
              <Phone size={18} aria-hidden />
              문의하기
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
