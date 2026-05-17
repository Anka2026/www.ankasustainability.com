import { cn } from "@/lib/utils";

/** Shared premium surface for marketing cards (Steel Cyan system). */
export function homeCardClassName(interaction = true) {
  return cn(
    "rounded-3xl border border-border/90 bg-surface",
    "shadow-[var(--shadow-card)]",
    "ring-1 ring-inset ring-primary/[0.05]",
    interaction &&
      cn(
        "transition-[box-shadow,border-color,transform] duration-200 ease-out",
        "hover:-translate-y-[3px] hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      ),
  );
}

/** Teal accent rail for interactive / featured cards. */
export function marketingCardAccentLineClassName() {
  return "border-l-[3px] border-l-accent/75";
}

/** Compact rounded icon holder — technical, not decorative. */
export function marketingIconContainerClassName(interactive = false) {
  return cn(
    "inline-flex shrink-0 items-center justify-center rounded-xl",
    "h-10 w-10 border border-accent/22 bg-accent/[0.07]",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.82)] ring-1 ring-inset ring-accent/[0.1]",
    "[&_svg]:size-[1.125rem] [&_svg]:text-primary [&_svg]:transition-colors",
    interactive &&
      "transition-[border-color,background-color,box-shadow] duration-200 group-hover:border-accent/38 group-hover:bg-accent/[0.11] group-hover:[&_svg]:text-accent",
  );
}

/** Homepage trust strip outer shell. */
export function marketingTrustStripShellClassName() {
  return cn(
    "relative overflow-hidden rounded-[2.25rem] border border-border/90 bg-surface",
    "shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.05]",
  );
}

/** Dark primary CTA band (page footers). */
export function marketingDarkCtaBandClassName() {
  return cn(
    "relative bg-gradient-to-b from-primary via-primary to-[color-mix(in_srgb,var(--primary)_92%,#0b1220_8%)]",
    "text-primary-foreground",
  );
}

/** Inner panel on dark CTA bands — subtle depth, readable type. */
export function marketingDarkCtaPanelClassName() {
  return cn(
    "relative overflow-hidden rounded-[2.25rem] border border-primary-foreground/10",
    "bg-white/[0.06] px-6 py-10 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.85)]",
    "ring-1 ring-inset ring-white/10 sm:px-10 sm:py-12",
    "before:pointer-events-none before:absolute before:inset-0 before:opacity-80 before:[background-size:auto,48px_48px] before:bg-[radial-gradient(circle_at_18%_12%,rgba(8,145,178,0.14),transparent_42%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]",
  );
}

/** Sticky marketing header — frosted, light border. */
export function marketingHeaderShellClassName() {
  return cn(
    "sticky top-0 z-50 border-b border-border/75",
    "bg-surface/88 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.14)]",
    "backdrop-blur-xl backdrop-saturate-150",
    "supports-[backdrop-filter]:bg-surface/78",
  );
}
