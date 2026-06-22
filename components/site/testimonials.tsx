import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="bg-white/[0.025] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Clientes"
          title="Reparaciones que se notan en el uso diario."
          description="Historias reales de clientes que confiaron sus equipos a CAMIFIX."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.name} delay={index * 0.06}>
              <figure className="h-full rounded-2xl border border-white/10 bg-background/70 p-6 backdrop-blur-xl">
                <div className="flex gap-1 text-primary" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 text-pretty text-base leading-8 text-zinc-300">
                  <span aria-hidden="true">“</span>
                  {testimonial.quote}
                  <span aria-hidden="true">”</span>
                </blockquote>
                <figcaption className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">{testimonial.detail}</p>
                </figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
