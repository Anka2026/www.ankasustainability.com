import { goldCategoryBadgeClassName } from "@/lib/brand-gold-accent";
import { cn } from "@/lib/utils";

/** Minimal gold category badge — resources only. */
export function resourceCategoryBadgeClassName() {
  return goldCategoryBadgeClassName();
}

/** Teal editorial divider (default for section headings). */
export function resourceAccentDividerClassName() {
  return "resource-accent-divider";
}

/** @deprecated Prefer resourceCategoryBadgeClassName */
export function resourceGoldBadgeClassName() {
  return resourceCategoryBadgeClassName();
}

/** @deprecated Use resourceAccentDividerClassName */
export function resourceGoldDividerClassName() {
  return resourceAccentDividerClassName();
}

export function resourceDetailHeroPanelClassName() {
  return cn(
    "relative mt-8 overflow-hidden rounded-[1.75rem] border border-border/80",
    "bg-surface/95 p-6 shadow-[0_28px_72px_-40px_rgba(15,23,42,0.18)]",
    "ring-1 ring-inset ring-primary/[0.05] sm:p-8 md:p-9",
    "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-[1] before:w-[3px] before:bg-gradient-to-b before:from-accent/70 before:via-accent/45 before:to-primary/25",
  );
}

export function resourceDetailHeroGridClassName() {
  return cn(
    "relative z-[2] grid gap-8",
    "lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:gap-9",
    "xl:grid-cols-[minmax(0,1fr)_27rem] xl:gap-10",
    "2xl:grid-cols-[minmax(0,1fr)_30rem] 2xl:gap-11",
  );
}

/** Positions the hero image column — lower on desktop, fills the image column width. */
export function resourceDetailHeroVisualWrapClassName() {
  return cn(
    "w-full max-w-[19rem] mx-auto sm:max-w-[20rem]",
    "lg:mx-0 lg:w-full lg:max-w-none lg:justify-self-stretch lg:pt-8",
    "xl:pt-10",
  );
}

export function resourceDetailHeroVisualClassName() {
  return cn(
    "relative w-full overflow-hidden rounded-xl border border-border/75",
    "aspect-[4/3]",
    "bg-gradient-to-br from-[var(--section-teal-wash)] via-surface to-[color-mix(in_srgb,var(--accent-soft)_16%,var(--background))]",
    "p-2.5 sm:p-3",
    "shadow-[0_20px_48px_-24px_rgba(15,23,42,0.26)] ring-1 ring-inset ring-primary/[0.04]",
  );
}

export function resourceDetailHeroShellClassName() {
  return cn(
    "relative overflow-hidden border-b border-border",
    "bg-[linear-gradient(165deg,var(--section-executive)_0%,var(--background)_52%,color-mix(in_srgb,var(--accent-soft)_35%,var(--background))_100%)]",
  );
}

export function resourceInsightChipClassName() {
  return cn(
    "inline-flex items-center rounded-md border px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide",
    "border-primary/12 bg-primary/[0.04] text-primary/85",
  );
}

/** @deprecated Use resourceInsightChipClassName for metadata chips */
export function resourceInsightChipGoldClassName() {
  return resourceInsightChipClassName();
}

export function resourceSidebarPanelClassName() {
  return cn(
    "relative overflow-hidden rounded-[1.5rem] border border-border/90 bg-surface",
    "p-5 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.05] sm:p-6",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color-mix(in_srgb,var(--gold-accent)_20%,transparent)] before:to-transparent",
  );
}

export function resourceSidebarHighlightClassName() {
  return cn(
    "rounded-xl border border-accent/15 bg-accent/[0.05] px-3.5 py-3",
  );
}
