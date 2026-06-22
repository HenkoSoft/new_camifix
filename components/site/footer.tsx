import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { business, contactItems } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";
import { Logo } from "@/components/site/logo";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Logo className="max-w-fit" showTagline />
          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
            Servicio técnico especializado en celulares y notebooks con atención
            online por WhatsApp.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href={whatsappUrl(business.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de CAMIFIX"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-zinc-300 transition hover:text-text"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de CAMIFIX"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-zinc-300 transition hover:text-text"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-text">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CAMIFIX. Todos los derechos reservados.</p>
        <p>Servicio técnico profesional para celulares y notebooks.</p>
      </div>
    </footer>
  );
}
