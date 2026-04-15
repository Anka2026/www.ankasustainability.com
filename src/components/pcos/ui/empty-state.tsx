import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  actions,
  className,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[min(1rem,var(--radius-xl))] border border-border/90 bg-surface p-6",
        "shadow-sm shadow-primary/[0.04] ring-1 ring-primary/[0.03]",
        className,
      )}
    >
      <div className="text-base font-semibold tracking-tight text-foreground">{title}</div>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {actions ? <div className="mt-4 flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  );
}

