/** Decorative block for Software hero — enterprise, not consumer SaaS. */
export function SoftwareHeroAside() {
  return (
    <div className="relative mx-auto w-full max-w-md select-none lg:max-w-none" aria-hidden>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-hero-panel)] ring-1 ring-primary/[0.045]">
        <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/[0.085] via-primary/[0.04] to-transparent px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(8,145,178,0.14)]" />
            <div className="h-2 w-24 rounded-full bg-primary/18" />
          </div>
          <div className="h-2 w-16 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="space-y-3 border-b border-border/70 p-4 sm:border-b-0 sm:border-r sm:border-border/70 sm:p-5">
            <div className="flex h-24 items-end gap-1 pt-1">
              {[28, 44, 32, 52, 38].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-primary/18"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 p-4 sm:p-5">
            <div className="rounded-lg border border-accent/20 bg-accent/[0.07] p-3">
              <div className="h-1.5 w-20 rounded-full bg-accent/45" />
              <div className="mt-2 space-y-1.5">
                <div className="h-1 w-full rounded-full bg-muted-foreground/12" />
                <div className="h-1 w-[85%] rounded-full bg-muted-foreground/12" />
              </div>
            </div>
            <div className="rounded-md border border-dashed border-border/90 bg-background/80 p-2.5">
              <div className="flex gap-2">
                <div className="h-6 flex-1 rounded bg-primary/12" />
                <div className="h-6 w-14 rounded bg-accent/26" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
