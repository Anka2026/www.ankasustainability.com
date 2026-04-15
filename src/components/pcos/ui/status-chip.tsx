"use client";

import { cn } from "@/lib/utils";

export type ChipTone = "neutral" | "info" | "success" | "warning" | "danger";

export function StatusChip({
  label,
  tone = "neutral",
  className,
}: {
  label: string;
  tone?: ChipTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide",
        "bg-background/70 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        tone === "neutral" && "border-border/80 text-muted-foreground",
        tone === "info" && "border-accent/35 bg-[var(--accent-soft)] text-primary",
        tone === "success" && "border-emerald-500/25 bg-emerald-500/10 text-emerald-700",
        tone === "warning" && "border-amber-500/25 bg-amber-500/10 text-amber-800",
        tone === "danger" && "border-rose-500/25 bg-rose-500/10 text-rose-700",
        className,
      )}
    >
      {label}
    </span>
  );
}

