import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary" &&
          "bg-text text-background shadow-glow hover:bg-white hover:shadow-[0_0_64px_rgba(250,250,250,0.22)]",
        variant === "secondary" &&
          "border border-white/12 bg-white/[0.06] text-text backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.1]",
        variant === "ghost" && "text-zinc-300 hover:text-text",
        className,
      )}
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
