import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  align?: "left" | "center";
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  align = "left",
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <span className="pill inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
        {eyebrow}
      </span>
      <h2 className="text-balance mt-6 text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-[2.7rem] lg:text-[3.2rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-[1.08rem]">
        {description}
      </p>
    </div>
  );
}
