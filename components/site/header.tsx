import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/site/logo";
import { MobileMenu } from "@/components/site/mobile-menu";

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-background/70 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ButtonLink
          href={whatsappUrl(business.whatsappMessage)}
          variant="secondary"
          className="hidden min-h-10 px-4 md:inline-flex"
          ariaLabel="Consultar por WhatsApp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Consultar
        </ButtonLink>
        <MobileMenu items={navItems} />
      </nav>
    </header>
  );
}
