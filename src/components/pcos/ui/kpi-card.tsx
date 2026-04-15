import { cn } from "@/lib/utils";

export function KpiCard({
  title,
  value,
  hint,
  className,
}: {
  title: string;
  value: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[min(1rem,var(--radius-xl))] border border-border bg-surface p-4 shadow-sm",
        "shadow-primary/[0.05] ring-1 ring-primary/[0.04]",
        className,
      )}
    >
      <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {title}
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{value}</div>
      {hint ? (
        <div className="mt-1 text-sm leading-snug text-muted-foreground">{hint}</div>
      ) : null}
    </div>
  );
}

