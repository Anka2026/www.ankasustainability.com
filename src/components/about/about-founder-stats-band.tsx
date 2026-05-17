"use client";

import * as React from "react";
import { Briefcase, Calendar, Globe, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { goldMicroHairlineClassName } from "@/lib/brand-gold-accent";
import { cn } from "@/lib/utils";

export type FounderStatItem = Readonly<{
  target: number;
  suffix: string;
  label: string;
}>;

const STAT_ICONS: readonly LucideIcon[] = [Briefcase, Users, Calendar, Globe];

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function StatCell({
  target,
  suffix,
  label,
  enabled,
  icon: Icon,
}: FounderStatItem & { enabled: boolean; icon: LucideIcon }) {
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
        "flex min-h-[7.25rem] flex-col justify-between rounded-xl border border-border/70 bg-background px-4 py-4 sm:min-h-[7.5rem] sm:px-5 sm:py-5",
        "shadow-[0_14px_36px_-26px_rgba(15,23,42,0.16)] ring-1 ring-inset ring-primary/[0.04]",
      )}
    >
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.1] text-accent"
        aria-hidden
      >
        <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.85} />
      </span>
      <div className="mt-3">
        <p
          className="font-semibold tabular-nums tracking-tight text-primary"
          style={{ fontSize: "clamp(1.35rem, 3.2vw, 1.875rem)", lineHeight: 1.12 }}
        >
          <span className="whitespace-nowrap">
            {display}
            {suffix}
          </span>
        </p>
        <p className="mt-1.5 text-pretty text-xs font-medium leading-snug text-muted-foreground sm:text-[0.8125rem]">
          {label}
        </p>
      </div>
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
    <div ref={ref} className={cn("relative", className)}>
      <div
        className={cn("absolute inset-x-0 top-0 z-[1] max-w-[12rem]", goldMicroHairlineClassName())}
        aria-hidden
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {stats.slice(0, 4).map((item, index) => (
          <StatCell
            key={`${item.label}-${item.target}`}
            {...item}
            icon={STAT_ICONS[index] ?? Briefcase}
            enabled={visible}
          />
        ))}
      </div>
    </div>
  );
}
