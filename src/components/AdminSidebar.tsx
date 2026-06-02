import Link from "next/link";
import Image from "next/image";
import { Boxes, ClipboardList, FileText, Gift, Home, ImageIcon, LayoutDashboard, MessageSquare, Settings, Tags } from "lucide-react";

const items = [
  { href: "/admin", label: "대시보드", icon: LayoutDashboard },
  { href: "/admin/products", label: "제품 관리", icon: Boxes },
  { href: "/admin/categories", label: "카테고리", icon: Tags },
  { href: "/admin/donations", label: "후원 신청", icon: Gift },
  { href: "/admin/inquiries", label: "문의 관리", icon: MessageSquare },
  { href: "/admin/posts", label: "게시글", icon: FileText },
  { href: "/admin/banners", label: "배너", icon: ImageIcon },
  { href: "/admin/settings", label: "사이트 설정", icon: Settings },
];

export default function AdminSidebar() {
  return (
    <aside className="sticky top-24 rounded-lg border border-[#DDE7E7] bg-white p-4 shadow-sm">
      <div className="mb-4 border-b border-[#EEF2F2] pb-4">
        <Image src="/cheongharam-logo.svg" alt="청하람" width={170} height={132} className="h-14 w-auto object-contain" />
        <p className="mt-2 text-xs font-black text-[#64748B]">ADMIN CONSOLE</p>
      </div>
      <Link href="/" className="mb-4 flex min-h-11 items-center gap-2 rounded-lg bg-[#E7F6F6] px-3 font-bold text-[#155F70]">
        <Home size={18} aria-hidden />
        사이트로 이동
      </Link>
      <nav className="grid gap-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="flex min-h-11 items-center gap-2 rounded-lg px-3 font-bold text-[#334155] hover:bg-[#F2FBFB] hover:text-[#155F70]">
            <item.icon size={18} aria-hidden />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-5 rounded-lg bg-[#F8FAFB] p-3 text-sm leading-6 text-[#64748B]">
        <ClipboardList className="mb-2 text-[#155F70]" size={18} aria-hidden />
        결제, 배송조회, QR 추적 기능은 현재 관리자 범위에서 제외됩니다.
      </div>
    </aside>
  );
}
