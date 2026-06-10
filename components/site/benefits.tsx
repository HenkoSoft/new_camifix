import { benefits } from "@/lib/site-data";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Benefits() {
  return (
    <section id="beneficios" className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionReveal>
          <SectionHeading
            align="left"
            eyebrow="Beneficios"
            title="Servicio tecnico pensado para que no pierdas tiempo."
            description="Te atendemos con criterio, comunicacion clara y garantia por el trabajo realizado."
          />
        </MotionReveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <MotionReveal key={benefit.title} delay={index * 0.04}>
                <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-success/35 hover:bg-success/[0.055]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-success/12 text-success">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-text">{benefit.title}</p>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
