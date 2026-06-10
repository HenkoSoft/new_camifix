import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
