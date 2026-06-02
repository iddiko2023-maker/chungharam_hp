import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-black transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623] active:scale-[0.99]",
        variant === "primary" && "bg-[#2D8C8C] text-white shadow-sm hover:bg-[#247575]",
        variant === "secondary" && "bg-[#F5A623] text-[#243238] shadow-sm hover:bg-[#e89a18]",
        variant === "outline" && "border border-[#B7DCDC] bg-white text-[#2D8C8C] hover:border-[#2D8C8C] hover:bg-[#F2FBFB]",
      )}
    >
      {children}
      <ArrowRight size={18} aria-hidden />
    </Link>
  );
}
