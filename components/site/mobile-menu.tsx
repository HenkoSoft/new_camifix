"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-text backdrop-blur-xl transition hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 right-4 top-[4.75rem] overflow-hidden rounded-3xl border border-white/10 bg-background/95 p-2 shadow-glow backdrop-blur-2xl"
          >
            <div className="space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-zinc-200 transition hover:bg-white/[0.07] hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href={whatsappUrl(business.whatsappMessage)}
              onClick={() => setIsOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-success px-4 text-sm font-bold text-background transition hover:bg-[#35d66d]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Consultar por WhatsApp
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
