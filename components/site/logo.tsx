import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="CAMIFIX inicio"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/brand/camifix-logo-web.png"
        alt="CAMIFIX"
        width={2000}
        height={619}
        priority
        className={cn(
          "h-auto select-none object-contain",
          showTagline
            ? "w-[min(430px,86vw)]"
            : "w-[142px] sm:w-[168px]",
        )}
      />
    </Link>
  );
}
