import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function TableShell({
  title,
  subtitle,
  toolbar,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  toolbar?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-[min(1rem,var(--radius-xl))] border border-border bg-surface shadow-sm",
        "shadow-primary/[0.05] ring-1 ring-primary/[0.03]",
        className,
      )}
    >
      <div className="flex flex-col gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="text-base font-semibold tracking-tight text-foreground">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-sm leading-snug text-muted-foreground">{subtitle}</div>
          ) : null}
        </div>
        {toolbar ? <div className="shrink-0">{toolbar}</div> : null}
      </div>
      <div className="overflow-auto">{children}</div>
    </section>
  );
}

export function DataTable({
  columns,
  rows,
  rowKey,
  className,
}: {
  columns: Array<{ key: string; header: string; className?: string }>;
  rows: Array<Record<string, ReactNode>>;
  rowKey: (row: Record<string, ReactNode>, idx: number) => string;
  className?: string;
}) {
  return (
    <table className={cn("min-w-full border-separate border-spacing-0", className)}>
      <thead>
        <tr className="bg-surface">
          {columns.map((c) => (
            <th
              key={c.key}
              className={cn(
                "sticky top-0 z-10 border-b border-border bg-surface px-5 py-3 text-left text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase",
                c.className,
              )}
            >
              {c.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, idx) => (
          <tr key={rowKey(r, idx)} className="hover:bg-muted/35">
            {columns.map((c) => (
              <td
                key={c.key}
                className={cn("border-b border-border px-5 py-3 text-sm text-foreground", c.className)}
              >
                {r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

