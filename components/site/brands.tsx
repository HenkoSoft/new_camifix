import { brands } from "@/lib/site-data";
import { MotionReveal } from "@/components/motion-reveal";

export function Brands() {
  return (
    <section className="border-y border-white/8 bg-white/[0.025] px-4 py-14 sm:px-6 lg:px-8">
      <MotionReveal className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
          Marcas que reparamos
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-background/60 px-4 text-sm font-semibold tracking-wide text-zinc-200 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              {brand}
            </div>
          ))}
        </div>
      </MotionReveal>
    </section>
  );
}
