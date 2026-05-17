import { cn } from "@/lib/utils";

export function aboutPageContainerClassName() {
  return "max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]";
}

/** Founder narrative — premium surface card. */
export function aboutFounderPanelClassName() {
  return cn(
    "overflow-hidden rounded-[1.35rem] border border-border/80 bg-surface",
    "shadow-[0_28px_72px_-48px_rgba(15,23,42,0.28)] ring-1 ring-inset ring-primary/[0.05]",
    "p-6 sm:p-8 xl:p-10",
  );
}

export function aboutFounderGridClassName() {
  return cn(
    "grid grid-cols-1 gap-0",
    "lg:grid-cols-[280px_minmax(0,1fr)_320px]",
    "xl:grid-cols-[320px_minmax(0,1fr)_360px]",
    "2xl:grid-cols-[340px_minmax(0,1fr)_380px]",
    "lg:items-start",
  );
}

const founderDividerClass = "border-border/35";

export function aboutFounderColumnClassName(variant: "portrait" | "narrative" | "quote") {
  return cn(
    "min-w-0",
    variant === "portrait" &&
      cn(
        "order-1 flex justify-center border-b py-6 sm:py-7",
        founderDividerClass,
        "lg:justify-start lg:border-b-0 lg:border-r lg:py-0 lg:pr-7 xl:pr-8",
      ),
    variant === "narrative" &&
      cn(
        "order-2 border-b py-6 sm:py-7",
        founderDividerClass,
        "lg:border-b-0 lg:border-r lg:py-0 lg:px-7 xl:px-8",
      ),
    variant === "quote" && "order-3 self-start py-6 sm:py-7 lg:py-0 lg:pl-7 xl:pl-8",
  );
}

/** Readable line length inside the flexible middle column. */
export function aboutFounderNarrativeInnerClassName() {
  return "max-w-[36rem] lg:max-w-[38rem] xl:max-w-[40rem]";
}

export function aboutFounderPortraitFrameClassName() {
  return cn(
    "relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border/75 bg-muted/25",
    "shadow-[0_14px_36px_-22px_rgba(15,23,42,0.28)]",
    "mx-auto max-w-[15.5rem] sm:max-w-[17rem]",
    "lg:mx-0 lg:max-w-none",
  );
}

export function aboutFounderQuotePanelClassName() {
  return cn(
    "relative w-full overflow-hidden rounded-xl border border-primary/20",
    "bg-primary text-primary-foreground",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] ring-1 ring-inset ring-white/10",
  );
}

/** Stats band — teal / slate wash, separate from founder card, same container width. */
export function aboutFounderStatsSectionClassName() {
  return cn(
    "relative border-b border-border",
    "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_18%,#dfeef3)_0%,color-mix(in_srgb,var(--primary)_10%,#e4eaf0)_50%,color-mix(in_srgb,var(--accent-soft)_28%,#ecf2f7)_100%)]",
    "py-10 sm:py-11 lg:py-12",
  );
}
