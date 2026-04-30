import { cn } from "@/lib/utils";

/**
 * About page cards: light surface stays light on hover; subtle lift, accent edge hint,
 * cyan-tinted shadow (no heavy slate “black wash”).
 */
export function aboutPremiumCardClassName() {
  return cn(
    "rounded-3xl border border-border bg-surface",
    "shadow-[var(--shadow-card)]",
    "ring-1 ring-inset ring-primary/[0.06]",
    "transition-[box-shadow,border-color,transform] duration-200 ease-out",
    "hover:-translate-y-px",
    "hover:border-accent/25",
    "hover:shadow-[0_22px_52px_-34px_rgba(8,145,178,0.14),0_0_0_1px_rgba(8,145,178,0.08),inset_0_1px_0_0_rgba(255,255,255,0.94)]",
    "relative",
    "before:pointer-events-none before:absolute before:left-0 before:top-[16%] before:bottom-[16%] before:w-[3px] before:rounded-full before:bg-accent/0 before:transition-colors hover:before:bg-accent/50",
  );
}

/** Primary-filled differentiator card — hover stays in-brand, no inverted text. */
export function aboutPrimaryAccentCardClassName() {
  return cn(
    "rounded-3xl border border-white/12 bg-primary text-primary-foreground",
    "shadow-[var(--shadow-card)] ring-1 ring-inset ring-white/10",
    "transition-[box-shadow,border-color,transform] duration-200 ease-out",
    "hover:-translate-y-px hover:border-white/22",
    "hover:shadow-[0_26px_60px_-42px_rgba(8,145,178,0.42),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
  );
}
