import { MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { business, heroStats } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";
import { MotionReveal } from "@/components/motion-reveal";

export function Hero() {
  const budgetUrl = whatsappUrl(business.whatsappMessage);

  return (
    <section className="relative isolate overflow-hidden bg-background pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <MotionReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-zinc-300 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              Servicio tecnico online
            </div>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-[0.94] text-text sm:text-6xl lg:text-7xl">
              Tu celular vuelve a funcionar.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
              Servicio tecnico especializado en iPhone, Samsung, Motorola, Xiaomi
              y mas. Reparaciones rapidas, garantia y atencion profesional.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={budgetUrl} target="_blank" rel="noopener noreferrer">
                Solicitar presupuesto
              </ButtonLink>
              <ButtonLink
                href={budgetUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
                >
                  <p className="text-lg font-semibold text-text sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-glow backdrop-blur-2xl">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_18%,rgba(37,99,235,0.34),transparent_28%),linear-gradient(145deg,#101014,#050507_70%)] p-5">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>CAMIFIX LAB</span>
                  <span className="rounded-full bg-success/15 px-2 py-1 text-success">
                    Online
                  </span>
                </div>
                <div className="mt-10 rounded-[2rem] border border-white/12 bg-black/50 p-4 shadow-2xl">
                  <div className="mx-auto h-2 w-16 rounded-full bg-white/12" />
                  <div className="mt-5 aspect-[9/16] rounded-[1.4rem] border border-white/12 bg-[linear-gradient(160deg,rgba(37,99,235,0.75),rgba(34,197,94,0.24)_36%,rgba(24,24,27,0.95)_70%)] p-4">
                    <div className="h-full rounded-[1rem] border border-white/10 bg-background/70 p-4">
                      <div className="h-2 w-20 rounded-full bg-white/20" />
                      <div className="mt-7 space-y-3">
                        <div className="h-3 w-28 rounded-full bg-primary/70" />
                        <div className="h-3 w-40 rounded-full bg-white/18" />
                        <div className="h-3 w-32 rounded-full bg-white/12" />
                      </div>
                      <div className="mt-10 grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.08]" />
                        <div className="h-20 rounded-2xl border border-white/10 bg-success/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-zinc-300">
                  <span className="rounded-full bg-white/[0.07] px-2 py-2">Display</span>
                  <span className="rounded-full bg-white/[0.07] px-2 py-2">Bateria</span>
                  <span className="rounded-full bg-white/[0.07] px-2 py-2">Carga</span>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
