import type { LucideIcon } from "lucide-react";
import { BarChart3, Check } from "lucide-react";

import {
  sectorDetailHeroAsideStackClassName,
  sectorDetailHeroInfoPanelClassName,
  sectorDetailHeroVisualCardClassName,
  sectorHeroIconClassName,
} from "@/lib/sectors-premium-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  sectorTitle: string;
  Icon: LucideIcon;
  focusStripLabel: string;
  focusAreas: readonly string[];
  criticalAreasLabel: string;
  criticalBullets: readonly string[];
}>;

export function SectorDetailHeroAside({
  sectorTitle,
  Icon,
  focusStripLabel,
  focusAreas,
  criticalAreasLabel,
  criticalBullets,
}: Props) {
  const visibleFocus = focusAreas.filter(Boolean).slice(0, 3);
  const visibleCritical = criticalBullets.filter(Boolean).slice(0, 3);

  return (
    <aside className={sectorDetailHeroAsideStackClassName()} aria-label={focusStripLabel}>
      <div className={sectorDetailHeroVisualCardClassName()}>
        <div className="relative flex flex-col items-center text-center">
          <span
            className={cn(
              sectorHeroIconClassName(),
              "h-16 w-16 sm:h-[4.25rem] sm:w-[4.25rem] [&_svg]:h-8 [&_svg]:w-8 sm:[&_svg]:h-9 sm:[&_svg]:w-9",
            )}
          >
            <Icon aria-hidden />
          </span>
          <p className="mt-4 text-balance text-pretty text-sm font-semibold leading-snug tracking-tight text-primary sm:text-[0.9375rem]">
            {sectorTitle}
          </p>
          <div className="mt-4 flex w-full items-center justify-center gap-1.5" aria-hidden>
            <BarChart3 className="h-4 w-4 text-accent/55" />
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <BarChart3 className="h-4 w-4 text-accent/40" />
          </div>
        </div>
      </div>

      {visibleFocus.length > 0 ? (
        <div className={sectorDetailHeroInfoPanelClassName()}>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
            {focusStripLabel}
          </p>
          <ul className="mt-3 space-y-2.5">
            {visibleFocus.map((line) => (
              <li key={line} className="flex gap-2.5 text-pretty text-sm leading-snug text-foreground/90">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/22 bg-accent/[0.08] text-accent"
                  aria-hidden
                >
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="min-w-0 font-medium">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {visibleCritical.length > 0 ? (
        <div className={cn(sectorDetailHeroInfoPanelClassName(), "border-accent/12 bg-accent/[0.03]")}>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary/80">
            {criticalAreasLabel}
          </p>
          <ul className="mt-3 space-y-2">
            {visibleCritical.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-pretty text-[0.8125rem] leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}
