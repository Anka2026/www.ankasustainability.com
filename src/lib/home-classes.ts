import { cn } from "@/lib/utils";

/** Shared premium surface for marketing cards (Steel Cyan system). */
export function homeCardClassName(interaction = true) {
  return cn(
    "rounded-3xl border border-border bg-surface",
    "shadow-[var(--shadow-card)]",
    "ring-1 ring-inset ring-primary/[0.06]",
    interaction &&
      cn(
        "transition-[box-shadow,border-color,transform] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[var(--shadow-card-hover)]",
      ),
  );
}
