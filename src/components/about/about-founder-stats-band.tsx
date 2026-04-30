"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type FounderStatItem = Readonly<{
  target: number;
  suffix: string;
  label: string;
}>;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function StatCell({
  target,
  suffix,
  label,
  enabled,
}: FounderStatItem & { enabled: boolean }) {
  const [display, setDisplay] = React.useState(0);
  const durationMs = 1300;

  React.useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      setDisplay(Math.round(target * easeOutCubic(p)));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target]);

  return (
    <div
      className={cn(
        "relative flex min-h-[6.5rem] flex-col justify-center rounded-2xl border border-border/70 bg-background/85 px-4 py-4 sm:min-h-[7rem] sm:px-5 sm:py-5",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] ring-1 ring-inset ring-primary/[0.04]",
      )}
    >
      <p
        className="font-semibold tabular-nums tracking-tight text-foreground"
        style={{ fontSize: "clamp(1.35rem, 3.5vw, 2rem)", lineHeight: 1.15 }}
      >
        <span className="whitespace-nowrap">
          {display}
          {suffix}
        </span>
      </p>
      <p className="mt-2 max-w-[14rem] text-pretty text-xs font-medium leading-snug text-muted-foreground sm:text-[0.8125rem] sm:leading-snug">
        {label}
      </p>
    </div>
  );
}

type Props = Readonly<{
  stats: readonly FounderStatItem[];
  className?: string;
}>;

export function AboutFounderStatsBand({ stats, className }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (stats.length === 0) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-border/75 bg-[var(--section-tint)]/55 sm:rounded-[1.5rem]",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] ring-1 ring-inset ring-primary/[0.05]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(8,145,178,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />
      <div className="relative grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5 lg:grid-cols-4 lg:gap-5 lg:p-6">
        {stats.slice(0, 4).map((item) => (
          <StatCell key={`${item.label}-${item.target}`} {...item} enabled={visible} />
        ))}
      </div>
    </div>
  );
}
