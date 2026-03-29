import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-[var(--accent-strong)] text-white shadow-[0_18px_40px_rgba(31,143,255,0.28)] hover:-translate-y-0.5 hover:bg-[#117de7]",
  secondary:
    "border border-[var(--line-strong)] bg-white/88 text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white",
  ghost:
    "text-[var(--foreground)] hover:bg-white/70",
} as const;

export function Button({
  children,
  className,
  href,
  rel,
  target,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
