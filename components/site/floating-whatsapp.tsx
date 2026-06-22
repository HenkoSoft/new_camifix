import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappUrl(business.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp con CAMIFIX"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success text-background shadow-success transition duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-4"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </Link>
  );
}
