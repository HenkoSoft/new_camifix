import { processSteps } from "@/lib/site-data";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="proceso" className="bg-background px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proceso"
          title="De la falla a la solución, sin fricción."
          description="Un recorrido claro para que sepas qué pasa con tu equipo en cada etapa."
        />
        <div className="relative mt-16 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent lg:block" />
          {processSteps.map((step, index) => (
            <MotionReveal key={step.title} delay={index * 0.06}>
              <article className="relative h-full rounded-2xl border border-white/10 bg-surface/75 p-6 backdrop-blur-xl">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-primary/35 bg-primary/15 text-sm font-bold text-text shadow-glow">
                  0{index + 1}
                </div>
                <h3 className="mt-7 text-xl font-semibold text-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{step.description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
