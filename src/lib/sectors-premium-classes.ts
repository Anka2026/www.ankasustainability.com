import { cn } from "@/lib/utils";

/** Matches hero container width — keep body aligned with hero panel. */
export function sectorDetailContainerClassName() {
  return "relative max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]";
}

export function sectorDetailBodySectionClassName() {
  return "border-b border-border bg-background py-12 sm:py-16 lg:py-[4.5rem]";
}

export function sectorDetailBodyGridClassName() {
  return cn(
    "grid gap-8 sm:gap-9",
    "lg:grid-cols-[minmax(0,1fr)_minmax(0,15.5rem)] lg:items-start lg:gap-9",
    "xl:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] xl:gap-10",
  );
}

export function sectorDetailSectionsStackClassName() {
  return "min-w-0 space-y-7 sm:space-y-8 lg:space-y-9";
}

export function sectorDetailRelatedAsideClassName() {
  return cn(
    "min-w-0 rounded-xl border border-border/80 bg-surface p-5 sm:p-6",
    "shadow-[0_16px_40px_-32px_rgba(15,23,42,0.14)] ring-1 ring-inset ring-primary/[0.04]",
    "lg:sticky lg:top-28",
  );
}

export function sectorDetailSectionCardClassName(variant: "reality" | "approach" | "default") {
  return cn(
    "scroll-mt-32 rounded-[1.35rem] border p-6 sm:p-7 lg:p-8",
    variant === "reality" &&
      "border-accent/12 bg-gradient-to-br from-[var(--section-teal-wash)] via-surface to-background shadow-[0_20px_56px_-36px_rgba(15,23,42,0.14)] ring-1 ring-inset ring-accent/8",
    variant === "approach" &&
      "border-primary/18 bg-gradient-to-br from-primary/[0.05] via-surface to-background shadow-[0_24px_64px_-38px_rgba(15,23,42,0.16)] ring-1 ring-inset ring-primary/[0.06]",
    variant === "default" &&
      "border-border/85 bg-surface shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.04]",
  );
}

export function sectorDetailHeroShellClassName() {
  return cn(
    "relative overflow-hidden border-b border-border/80",
    "bg-[linear-gradient(168deg,var(--section-executive)_0%,var(--background)_38%,color-mix(in_srgb,var(--accent-soft)_24%,var(--background))_100%)]",
  );
}

export function sectorDetailHeroPanelClassName() {
  return cn(
    "relative mt-7 overflow-hidden rounded-[1.35rem] border border-border/75",
    "bg-surface shadow-[0_24px_64px_-40px_rgba(15,23,42,0.2)]",
    "ring-1 ring-inset ring-primary/[0.05] sm:mt-8",
    "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-[1] before:w-[4px] before:rounded-l-[1.35rem] before:bg-gradient-to-b before:from-accent before:via-accent/60 before:to-primary/35",
    "after:pointer-events-none after:absolute after:inset-0 after:opacity-[0.35] after:[background-image:linear-gradient(rgba(8,145,178,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.04)_1px,transparent_1px)] after:[background-size:40px_40px]",
  );
}

export function sectorDetailHeroSplitGridClassName() {
  return cn(
    "relative z-[2] grid gap-8 p-6 sm:gap-9 sm:p-8 md:p-9",
    "lg:grid-cols-[minmax(0,1.12fr)_minmax(17.5rem,0.4fr)] lg:items-start lg:gap-10",
    "xl:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.38fr)] xl:gap-12",
  );
}

export function sectorDetailHeroMainColumnClassName() {
  return "min-w-0";
}

export function sectorDetailHeroSummaryClassName() {
  return cn(
    "mt-5 max-w-[min(100%,44rem)] text-pretty text-[1.02rem] font-medium leading-[1.62] text-foreground/90 sm:mt-6 sm:text-lg sm:leading-[1.65]",
  );
}

export function sectorDetailHeroAsideStackClassName() {
  return cn("flex min-w-0 flex-col gap-4 sm:gap-5 lg:sticky lg:top-24");
}

export function sectorDetailHeroVisualCardClassName() {
  return cn(
    "relative overflow-hidden rounded-2xl border border-accent/18",
    "bg-gradient-to-br from-[var(--section-teal-wash)] via-surface to-[color-mix(in_srgb,var(--accent-soft)_22%,var(--surface))]",
    "p-5 shadow-[0_20px_52px_-36px_rgba(8,145,178,0.32)] ring-1 ring-inset ring-accent/10 sm:p-6",
    "before:pointer-events-none before:absolute before:inset-0 before:opacity-50 before:[background-image:linear-gradient(rgba(8,145,178,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.06)_1px,transparent_1px)] before:[background-size:28px_28px]",
  );
}

export function sectorDetailHeroInfoPanelClassName() {
  return cn(
    "rounded-2xl border border-border/80 bg-gradient-to-b from-background/90 to-[color-mix(in_srgb,var(--accent-soft)_12%,var(--background))]",
    "p-4 shadow-[0_14px_40px_-32px_rgba(15,23,42,0.22)] ring-1 ring-inset ring-primary/[0.04] sm:p-5",
  );
}

export function sectorHeroIntroParagraphClassName() {
  return cn(
    "text-pretty text-[0.9375rem] leading-[1.72] text-muted-foreground sm:text-base sm:leading-[1.74]",
    "max-w-[min(100%,44rem)]",
  );
}

export function sectorHeroClosingClassName() {
  return cn(
    "text-pretty text-[0.9375rem] font-medium leading-[1.65] text-foreground/88 sm:text-base",
    "max-w-[40rem] lg:max-w-[48rem]",
  );
}

export function sectorHeroIconClassName() {
  return cn(
    "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/22",
    "bg-accent/[0.1] text-accent shadow-[0_10px_28px_-18px_rgba(8,145,178,0.4),inset_0_1px_0_0_rgba(255,255,255,0.88)]",
    "sm:h-[3.25rem] sm:w-[3.25rem]",
  );
}

export function sectorFocusStripClassName() {
  return cn(
    "mt-7 rounded-xl border border-border/75 bg-background/80 px-4 py-4 sm:mt-8 sm:px-5 sm:py-4.5",
    "ring-1 ring-inset ring-primary/[0.04]",
  );
}

export function sectorFocusStripPillClassName() {
  return cn(
    "inline-flex max-w-full items-center rounded-md border border-primary/12 bg-primary/[0.04] px-2.5 py-1.5",
    "text-[0.75rem] font-medium leading-snug text-foreground/88 sm:text-[0.8125rem]",
  );
}

export function sectorHeroEyebrowClassName() {
  return cn(
    "inline-flex items-center rounded-full border border-accent/22 bg-accent/[0.08] px-3 py-1",
    "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent",
  );
}

export function sectorMetaChipClassName() {
  return cn(
    "inline-flex items-center rounded-md border border-accent/18 bg-accent/[0.06] px-2.5 py-1",
    "text-[0.6875rem] font-medium tracking-wide text-primary/85",
  );
}

export function sectorFocusPillClassName() {
  return cn(
    "inline-flex max-w-full items-center rounded-lg border border-primary/12 bg-primary/[0.04] px-3 py-2",
    "text-[0.8125rem] font-medium leading-snug text-foreground/88",
  );
}

export function sectorAccentDividerClassName() {
  return "resource-accent-divider";
}

/* —— Sectors landing (/sectors) —— */

export function sectorsLandingHeroShellClassName() {
  return cn(
    "relative overflow-hidden border-b border-border/80",
    "bg-[linear-gradient(168deg,var(--section-teal-wash)_0%,var(--background)_42%,color-mix(in_srgb,var(--accent-soft)_32%,var(--background))_100%)]",
  );
}

export function sectorsLandingHeroPanelClassName() {
  return cn(
    "relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem] border border-border/75",
    "bg-gradient-to-b from-surface via-surface to-[color-mix(in_srgb,var(--accent-soft)_18%,var(--surface))]",
    "p-5 shadow-[0_28px_72px_-44px_rgba(15,23,42,0.42)] ring-1 ring-inset ring-primary/[0.05] sm:p-6 md:p-7",
    "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:rounded-l-[1.75rem] before:bg-gradient-to-b before:from-accent before:via-accent/65 before:to-primary/30",
    "after:pointer-events-none after:absolute after:inset-0 after:opacity-[0.35] after:[background-image:linear-gradient(rgba(8,145,178,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.05)_1px,transparent_1px)] after:[background-size:36px_36px]",
  );
}

export function sectorsLandingSectionEyebrowClassName() {
  return cn(
    "text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent",
  );
}

export function sectorsLandingSectionTitleClassName() {
  return cn(
    "max-w-[min(100%,48rem)] text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
  );
}

export function sectorsLandingSectionIntroClassName() {
  return cn(
    "max-w-[min(100%,44rem)] text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.68]",
  );
}

/** Primary focus — sector grid band. */
export function sectorsLandingGridSectionClassName() {
  return cn(
    "border-b border-border",
    "bg-[linear-gradient(180deg,var(--section-tint)_0%,color-mix(in_srgb,var(--accent-soft)_12%,var(--background))_55%,var(--background)_100%)]",
    "py-12 sm:py-16 lg:py-[4.25rem]",
  );
}

export function sectorsLandingSectorCardClassName() {
  return cn(
    "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80",
    "bg-gradient-to-b from-surface via-surface to-[color-mix(in_srgb,var(--accent-soft)_10%,var(--surface))]",
    "p-5 shadow-[0_22px_56px_-40px_rgba(15,23,42,0.32)] ring-1 ring-inset ring-primary/[0.05] sm:p-6",
    "transition-[transform,box-shadow,border-color] duration-200 ease-out",
    "group-hover:-translate-y-0.5 group-hover:border-accent/30 group-hover:shadow-[0_28px_64px_-36px_rgba(8,145,178,0.28)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-accent/70 before:to-transparent",
  );
}

export function sectorsLandingSectorIconClassName() {
  return sectorHeroIconClassName();
}

export function sectorsLandingFocusChipClassName() {
  return cn(
    "inline-flex max-w-full items-center rounded-md border border-accent/18 bg-accent/[0.06] px-2.5 py-1",
    "text-[0.6875rem] font-semibold leading-snug tracking-tight text-foreground/88 sm:text-xs",
  );
}

/** Process band — alternate surface from grid. */
export function sectorsLandingProcessSectionClassName() {
  return cn(
    "border-b border-border bg-[var(--section-deep)]/40 py-12 sm:py-16 lg:py-[4.25rem]",
  );
}

export function sectorsLandingProcessStepClassName() {
  return cn(
    "relative flex h-full min-h-[11.5rem] flex-col rounded-2xl border border-border/75",
    "bg-gradient-to-br from-surface via-surface to-[color-mix(in_srgb,var(--accent-soft)_14%,var(--surface))]",
    "p-5 shadow-[0_18px_48px_-36px_rgba(15,23,42,0.28)] ring-1 ring-inset ring-accent/[0.06] sm:p-6",
  );
}

export function sectorsLandingProcessStepBadgeClassName() {
  return cn(
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.1]",
    "font-mono text-xs font-bold tabular-nums text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]",
  );
}

/** Capabilities — soft teal wash. */
export function sectorsLandingCapabilitiesSectionClassName() {
  return cn(
    "border-b border-border",
    "bg-[linear-gradient(180deg,var(--background)_0%,var(--section-teal-wash)_48%,var(--section-tint)_100%)]",
    "py-12 sm:py-16 lg:py-[4.25rem]",
  );
}

export function sectorsLandingCapabilityCardClassName() {
  return cn(
    "flex h-full flex-col rounded-2xl border border-border/80",
    "bg-surface/95 p-5 shadow-[0_20px_52px_-38px_rgba(15,23,42,0.3)] ring-1 ring-inset ring-primary/[0.04] sm:p-6",
    "transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-accent/22 hover:shadow-[0_24px_56px_-34px_rgba(8,145,178,0.22)]",
  );
}
