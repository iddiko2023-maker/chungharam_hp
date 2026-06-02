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
        "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-black transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623] active:scale-[0.99] sm:w-auto",
        variant === "primary" && "bg-[#0F6B78] text-white shadow-sm hover:bg-[#147D88] hover:shadow-md",
        variant === "secondary" && "bg-[#F5A623] text-[#17252A] shadow-sm hover:bg-[#FFB733] hover:shadow-md",
        variant === "outline" && "border border-[#0F6B78] bg-white text-[#0F6B78] hover:bg-[#EAF7F5] hover:shadow-sm",
      )}
    >
      {children}
      <ArrowRight size={18} aria-hidden />
    </Link>
  );
}
