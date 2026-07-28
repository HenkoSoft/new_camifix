import { services } from "@/lib/site-data";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section id="servicios" className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Reparaciones con diagnóstico serio y ejecución precisa."
          description="Cada equipo se revisa con criterio técnico antes de presupuestar. Sin vueltas: foco total en la reparación."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionReveal key={service.title} delay={index * 0.035}>
                <article className="group h-full rounded-2xl border border-white/10 bg-surface/70 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-white/[0.075] hover:shadow-glow">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-primary transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
