type Props = Readonly<{
  variant:
    | "home"
    | "about"
    | "services"
    | "software"
    | "sectors"
    | "insights"
    | "contact";
  className?: string;
}>;

type VisualType = "dashboard" | "workflow" | "compliance";

function visualTypeForVariant(variant: Props["variant"]): VisualType {
  switch (variant) {
    case "services":
    case "contact":
      return "workflow";
    case "sectors":
    case "insights":
      return "compliance";
    case "home":
    case "about":
    case "software":
    default:
      return "dashboard";
  }
}

/**
 * Premium abstract hero visual system (Steel Cyan).
 * Decorative only: no copy, aria-hidden.
 */
export function HeroAsideVisual({ variant, className }: Props) {
  const isSoftware = variant === "software";
  const visualType = visualTypeForVariant(variant);

  const topAccent = isSoftware ? "via-accent/45" : "via-accent/38";
  const panelTone = isSoftware
    ? "from-primary to-[var(--primary-hover)]"
    : "from-primary to-[var(--primary-hover)]";

  const chipBorder = visualType === "workflow" ? "border-accent/26" : "border-accent/22";

  return (
    <div
      className={[
        "relative w-full max-w-md select-none",
        "rounded-2xl border border-border bg-surface",
        "shadow-[var(--shadow-hero-panel)] ring-1 ring-primary/[0.05]",
        "overflow-hidden",
        className ?? "",
      ].join(" ")}
      aria-hidden
    >
      <div
        className={[
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          "bg-gradient-to-r from-transparent",
          topAccent,
          "to-transparent",
        ].join(" ")}
      />

      {/* Soft grid texture (more contrast than placeholder wireframes) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(216,226,234,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(216,226,234,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
        }}
      />

      <div
        className={`relative border-b border-border bg-gradient-to-r ${panelTone} px-5 py-4 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.08)]`}
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(8,145,178,0.22)]" />
          <div className="h-2 w-28 rounded-full bg-white/40" />
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-10 rounded-full bg-white/25" />
            <div className="h-2 w-2 rounded-full bg-white/25" />
          </div>
        </div>
      </div>

      <div className="relative grid gap-0 sm:grid-cols-[1.1fr_0.9fr]">
        {/* Left: structural layer (varies by visual type) */}
        <div className="space-y-4 border-b border-border/70 p-5 sm:border-b-0 sm:border-r sm:border-border/70">
          {variant === "about" ? (
            <>
              {/* Consultancy command center: workflow blocks + governance modules */}
              <div className="flex items-center justify-between">
                <div className="h-2 w-28 rounded-full bg-primary/70" />
                <span className="h-2 w-2 rounded-full bg-accent/80 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="grid gap-2 pt-1">
                {[
                  { w: "w-[92%]", tone: "bg-primary/10" },
                  { w: "w-[78%]", tone: "bg-accent/12" },
                  { w: "w-[86%]", tone: "bg-primary/10" },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between gap-3 rounded-lg border border-border/85 ${row.tone} px-3 py-2.5 ${row.w}`}>
                    <span className="h-1.5 w-20 rounded-full bg-muted-foreground/16" />
                    <span className="h-2 w-10 rounded-full bg-accent/22" />
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border/85 bg-background/85 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
                  <span className="h-1.5 w-12 rounded-full bg-primary/14" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <span className="h-8 rounded-md border border-border/70 bg-surface/90" />
                  <span className="h-8 rounded-md border border-accent/18 bg-accent/[0.09]" />
                  <span className="h-8 rounded-md border border-border/70 bg-surface/90" />
                </div>
              </div>
            </>
          ) : variant === "software" ? (
            <>
              {/* Product platform interface: denser widgets + modules */}
              <div className="space-y-2">
                <div className="h-2 w-28 rounded-full bg-primary/85" />
                <div className="h-2 w-40 rounded-full bg-primary/55" />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="rounded-lg border border-border/85 bg-background/85 p-3">
                  <div className="flex items-center justify-between">
                    <span className="h-1.5 w-14 rounded-full bg-muted-foreground/16" />
                    <span className="h-1.5 w-8 rounded-full bg-accent/28" />
                  </div>
                  <div className="mt-3 flex h-16 items-end gap-1.5">
                    {[36, 54, 42, 70, 58].map((pct, i) => (
                      <span
                        key={i}
                        className="min-w-0 flex-1 rounded-sm bg-primary/22"
                        style={{ height: `${pct}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-accent/18 bg-accent/[0.08] p-3">
                  <div className="flex items-center justify-between">
                    <span className="h-1.5 w-12 rounded-full bg-accent/45" />
                    <span className="h-2 w-2 rounded-full bg-accent/75" />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <span className="h-6 rounded bg-primary/12" />
                    <span className="h-6 rounded bg-accent/20" />
                    <span className="h-6 rounded bg-primary/12" />
                    <span className="h-6 rounded bg-accent/16" />
                    <span className="h-6 rounded bg-primary/10" />
                    <span className="h-6 rounded bg-accent/18" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-12 rounded-lg border border-border/85 bg-background/85" />
                <div className={`h-12 rounded-lg border ${chipBorder} bg-accent/[0.11]`} />
                <div className="h-12 rounded-lg border border-border/85 bg-background/85" />
              </div>
            </>
          ) : variant === "sectors" ? (
            <>
              {/* Sector compliance matrix: rows + status blocks */}
              <div className="flex items-center justify-between">
                <div className="h-2 w-28 rounded-full bg-primary/70" />
                <span className="h-2 w-2 rounded-full bg-accent/80 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="space-y-2 pt-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between gap-3 rounded-lg border border-border/85 bg-background/85 px-3 py-2.5">
                    <span className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-sm bg-primary/18" />
                      <span className="h-3 w-3 rounded-sm bg-accent/30" />
                      <span className="h-3 w-3 rounded-sm bg-primary/14" />
                      <span className="h-3 w-3 rounded-sm bg-accent/22" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-12 rounded-lg border border-border/85 bg-background/85" />
                <div className={`h-12 rounded-lg border ${chipBorder} bg-accent/[0.10]`} />
                <div className="h-12 rounded-lg border border-border/85 bg-background/85" />
              </div>
            </>
          ) : variant === "insights" ? (
            <>
              {/* Regulatory intelligence board: filter row + doc cards */}
              <div className="flex items-center justify-between">
                <div className="h-2 w-28 rounded-full bg-primary/70" />
                <span className="h-2 w-2 rounded-full bg-accent/80 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="mt-1 flex gap-2 rounded-lg border border-border/85 bg-background/85 p-3">
                <span className="h-7 flex-1 rounded-md border border-border/70 bg-surface/90" />
                <span className="h-7 w-10 rounded-md border border-accent/18 bg-accent/[0.09]" />
              </div>
              <div className="space-y-2 pt-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg border border-border/85 bg-background/85 p-3">
                    <div className="flex items-center justify-between">
                      <span className="h-1.5 w-16 rounded-full bg-accent/24" />
                      <span className="h-2 w-10 rounded-full bg-primary/14" />
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-1.5 w-full max-w-[92%] rounded-full bg-muted-foreground/14" />
                      <div className="h-1.5 w-full max-w-[78%] rounded-full bg-muted-foreground/12" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : visualType === "workflow" ? (
            <>
              <div className="flex items-center justify-between">
                <div className="h-2 w-24 rounded-full bg-primary/70" />
                <span className="h-2 w-2 rounded-full bg-accent/80 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="space-y-3 pt-1">
                {[
                  { w: "w-[88%]", a: "bg-primary/10" },
                  { w: "w-[74%]", a: "bg-accent/12" },
                  { w: "w-[82%]", a: "bg-primary/10" },
                  { w: "w-[68%]", a: "bg-accent/10" },
                ].map((row, i) => (
                  <div key={i} className="relative">
                    <div className={`h-10 rounded-lg border border-border/85 ${row.a} ${row.w}`} />
                    <span className="pointer-events-none absolute left-4 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-accent/0 via-accent/55 to-accent/0" />
                    <span className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent/65" />
                  </div>
                ))}
              </div>
              <div className="mt-1 rounded-lg border border-dashed border-accent/22 bg-background/75 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
                  <span className="h-1.5 w-10 rounded-full bg-accent/25" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent/70" />
                  <span className="h-px flex-1 bg-accent/22" />
                  <span className="h-2 w-2 rounded-full bg-primary/55" />
                  <span className="h-px flex-1 bg-accent/18" />
                  <span className="h-2 w-2 rounded-full bg-accent/60" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <div className="h-2 w-24 rounded-full bg-primary" />
                <div className="h-2 w-36 rounded-full bg-primary/65" />
                <div className="h-2 w-28 rounded-full bg-primary/45" />
              </div>
              <div className="rounded-lg border border-border/85 bg-background/85 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
                  <span className="h-1.5 w-10 rounded-full bg-accent/28" />
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-1.5 w-full max-w-[92%] rounded-full bg-primary/12" />
                  <div className="h-1.5 w-full max-w-[80%] rounded-full bg-primary/10" />
                  <div className="h-1.5 w-full max-w-[68%] rounded-full bg-primary/10" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-12 rounded-lg border border-border/85 bg-background/85" />
                <div className={`h-12 rounded-lg border ${chipBorder} bg-accent/[0.09]`} />
                <div className="h-12 rounded-lg border border-border/85 bg-background/85" />
              </div>
            </>
          )}
        </div>

        {/* Right: highlight layer (kept consistent but tuned per type) */}
        <div className="flex flex-col justify-between bg-gradient-to-b from-[var(--accent-soft)] via-[var(--section-tint)] to-background p-5">
          {variant === "software" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-20 rounded-full bg-accent/55" />
                <span className="h-2 w-2 rounded-full bg-accent/75 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="rounded-lg border border-accent/16 bg-surface/92 p-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-md border border-border/70 bg-background/80 p-2.5">
                    <div className="h-1.5 w-10 rounded-full bg-muted-foreground/14" />
                    <div className="mt-3 h-2 w-16 rounded bg-accent/28" />
                  </div>
                  <div className="rounded-md border border-accent/18 bg-accent/[0.08] p-2.5">
                    <div className="h-1.5 w-12 rounded-full bg-muted-foreground/14" />
                    <div className="mt-3 h-2 w-12 rounded bg-primary/18" />
                  </div>
                  <div className="rounded-md border border-border/70 bg-background/80 p-2.5">
                    <div className="h-1.5 w-9 rounded-full bg-muted-foreground/14" />
                    <div className="mt-3 h-2 w-14 rounded bg-accent/22" />
                  </div>
                </div>
                <div className="mt-3 flex h-20 items-end gap-1.5">
                  {[34, 58, 42, 68, 50, 84].map((pct, i) => (
                    <span
                      key={i}
                      className="min-w-0 flex-1 rounded-sm bg-primary/24"
                      style={{ height: `${pct}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : variant === "sectors" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-20 rounded-full bg-accent/55" />
                <span className="h-5 w-14 rounded-md border border-accent/22 bg-surface/90 shadow-sm" />
              </div>
              <div className="rounded-lg border border-accent/16 bg-surface/92 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
                  <span className="h-2 w-2 rounded-full bg-accent/75 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  <span className="h-9 rounded-md border border-border/70 bg-background/80" />
                  <span className="h-9 rounded-md border border-accent/18 bg-accent/[0.09]" />
                  <span className="h-9 rounded-md border border-border/70 bg-background/80" />
                  <span className="h-9 rounded-md border border-border/70 bg-background/80" />
                </div>
              </div>
              <div className="rounded-lg border border-border/80 bg-background/75 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-14 rounded-full bg-muted-foreground/14" />
                  <span className="h-1.5 w-12 rounded-full bg-accent/24" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent/70" />
                  <span className="h-px flex-1 bg-accent/22" />
                  <span className="h-2 w-2 rounded-full bg-primary/55" />
                </div>
              </div>
            </div>
          ) : variant === "insights" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-20 rounded-full bg-accent/55" />
                <span className="h-2 w-2 rounded-full bg-accent/75 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="rounded-lg border border-accent/16 bg-surface/92 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
                  <span className="h-2 w-10 rounded-full bg-accent/24" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <span className="h-10 rounded-md border border-border/70 bg-background/80" />
                  <span className="h-10 rounded-md border border-accent/18 bg-accent/[0.09]" />
                  <span className="h-10 rounded-md border border-border/70 bg-background/80" />
                  <span className="h-10 rounded-md border border-border/70 bg-background/80" />
                </div>
              </div>
              <div className="rounded-lg border border-border/80 bg-background/75 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-14 rounded-full bg-muted-foreground/14" />
                  <span className="h-1.5 w-12 rounded-full bg-accent/24" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <span className="h-8 rounded-md border border-border/70 bg-surface/90" />
                  <span className="h-8 rounded-md border border-accent/18 bg-accent/[0.08]" />
                  <span className="h-8 rounded-md border border-border/70 bg-surface/90" />
                </div>
              </div>
            </div>
          ) : visualType === "compliance" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-20 rounded-full bg-accent/55" />
                <span className="h-5 w-14 rounded-md border border-accent/22 bg-surface/90 shadow-sm" />
              </div>
              <div className="rounded-lg border border-accent/16 bg-surface/92 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
                  <span className="h-2 w-2 rounded-full bg-accent/75 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-primary/14" />
                  <div className="h-1.5 w-full max-w-[82%] rounded-full bg-primary/12" />
                  <div className="h-1.5 w-full max-w-[66%] rounded-full bg-primary/10" />
                </div>
              </div>
              <div className="rounded-lg border border-border/80 bg-background/75 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-1.5 w-14 rounded-full bg-muted-foreground/14" />
                  <span className="h-1.5 w-12 rounded-full bg-accent/24" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <span className="h-9 rounded-md border border-border/70 bg-surface/90" />
                  <span className="h-9 rounded-md border border-accent/18 bg-accent/[0.08]" />
                </div>
              </div>
            </div>
          ) : visualType === "workflow" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-16 rounded-full bg-accent/55" />
                <span className="h-2 w-2 rounded-full bg-accent/75 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="rounded-lg border border-accent/16 bg-surface/92 p-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 rounded-md border border-border/70 bg-background/80" />
                  <div className="h-10 rounded-md border border-accent/18 bg-accent/[0.09]" />
                  <div className="h-10 rounded-md border border-border/70 bg-background/80" />
                  <div className="h-10 rounded-md border border-border/70 bg-background/80" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent/70" />
                  <span className="h-px flex-1 bg-accent/22" />
                  <span className="h-2 w-2 rounded-full bg-primary/55" />
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-1.5 w-full max-w-[88%] rounded-full bg-primary/12" />
                  <div className="h-1.5 w-full max-w-[70%] rounded-full bg-primary/10" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-16 rounded-full bg-accent/55" />
                <span className="h-2 w-2 rounded-full bg-accent/75 shadow-[0_0_0_3px_rgba(8,145,178,0.16)]" />
              </div>
              <div className="rounded-lg border border-accent/16 bg-surface/92 p-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-md border border-border/70 bg-background/80 p-2.5">
                    <div className="h-1.5 w-10 rounded-full bg-muted-foreground/14" />
                    <div className="mt-3 h-2 w-16 rounded bg-accent/26" />
                  </div>
                  <div className="rounded-md border border-border/70 bg-background/80 p-2.5">
                    <div className="h-1.5 w-12 rounded-full bg-muted-foreground/14" />
                    <div className="mt-3 h-2 w-12 rounded bg-primary/18" />
                  </div>
                  <div className="rounded-md border border-border/70 bg-background/80 p-2.5">
                    <div className="h-1.5 w-9 rounded-full bg-muted-foreground/14" />
                    <div className="mt-3 h-2 w-14 rounded bg-accent/20" />
                  </div>
                </div>
                <div className="mt-3 flex h-20 items-end gap-1.5">
                  {[34, 58, 42, 68, 50, 84].map((pct, i) => (
                    <span
                      key={i}
                      className={`min-w-0 flex-1 rounded-sm ${
                        isSoftware ? "bg-primary/26" : "bg-gradient-to-t from-primary/32 to-accent/60"
                      }`}
                      style={{ height: `${pct}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="mt-4 flex gap-2 border-t border-accent/16 pt-4">
            <span className="h-2 flex-1 rounded-full bg-primary/20" />
            <span className="h-2 w-1/3 rounded-full bg-accent/48" />
          </div>
        </div>
      </div>
    </div>
  );
}

