import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { business } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";
import { MotionReveal } from "@/components/motion-reveal";

export function FinalCta() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <MotionReveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(34,197,94,0.08)_42%,rgba(24,24,27,0.86))] p-8 shadow-glow sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-300">
                Presupuesto por WhatsApp
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight text-text sm:text-5xl">
                ¿Tu celular tiene algun problema?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                Contanos marca, modelo y falla. Te orientamos con el proximo paso
                para que recuperes tu equipo cuanto antes.
              </p>
            </div>
            <ButtonLink
              href={whatsappUrl(business.whatsappMessage)}
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hablar por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
