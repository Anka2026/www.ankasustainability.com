import { cn } from "@/lib/utils";

/**
 * Editorial hero system: left-anchored, authoritative consulting layout.
 * Vertical accent rail + consistent content start line across top-level pages.
 */

/** Vertical left accent — primary visual anchor. */
export const HERO_LEFT_RAIL =
  "border-l-[3px] border-accent pl-6 sm:pl-8";

/** Home hero — stronger Steel Cyan rail (elegant glow, theme-forward). */
export const HERO_LEFT_RAIL_HOME = cn(
  "border-l-[3px] border-accent pl-6 sm:pl-8",
  "shadow-[inset_3px_0_0_0_rgba(8,145,178,0.38)]",
);

/** Single-column hero shell: left-led, no floating center block. */
export const HERO_SINGLE_COLUMN_SHELL = "w-full max-w-3xl lg:max-w-[42rem]";

/** Eyebrow row — always left-aligned with content. */
export const HERO_EYEBROW_ROW = "flex items-center gap-3";

/** Shared eyebrow marker dot — Steel Cyan anchor (standard pages). */
export const HERO_EYEBROW_MARKER =
  "h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_rgba(8,145,178,0.16)]";

/** Home entry — slightly stronger glow on the marker. */
export const HERO_EYEBROW_MARKER_HOME =
  "h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_rgba(8,145,178,0.18)]";

/** Hero section base — surface + bottom border; gradient applied separately. */
export const HERO_SECTION_BASE = cn(
  "relative isolate overflow-hidden border-b border-border bg-primary text-white",
  "before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(ellipse_120%_90%_at_40%_0%,rgba(8,145,178,0.32),transparent_62%)]",
  "after:pointer-events-none after:absolute after:inset-0 after:z-0 after:bg-[radial-gradient(ellipse_120%_90%_at_85%_45%,rgba(36,49,61,0.65),transparent_60%)]",
  "ring-1 ring-inset ring-white/10",
);

/** Radial Steel Cyan wash — home (primary entry). */
export const HERO_GRADIENT_HOME =
  "bg-[linear-gradient(180deg,rgba(47,61,74,0.92)_0%,rgba(47,61,74,0.82)_55%,rgba(247,250,252,0)_100%)]";

/** Default marketing / single-column heroes. */
export const HERO_GRADIENT_PAGE =
  "bg-[linear-gradient(180deg,rgba(47,61,74,0.9)_0%,rgba(47,61,74,0.78)_55%,rgba(247,250,252,0)_100%)]";

/** Software hero — accent shifted toward the visual column. */
export const HERO_GRADIENT_SOFTWARE =
  "bg-[linear-gradient(180deg,rgba(47,61,74,0.9)_0%,rgba(47,61,74,0.76)_55%,rgba(247,250,252,0)_100%)]";

export const HERO_SECTION_SHELL_HOME = cn(HERO_SECTION_BASE, HERO_GRADIENT_HOME);

export const HERO_SECTION_SHELL_PAGE = cn(HERO_SECTION_BASE, HERO_GRADIENT_PAGE);

export const HERO_SECTION_SHELL_SOFTWARE = cn(
  HERO_SECTION_BASE,
  HERO_GRADIENT_SOFTWARE,
);

/** Top hairline — restrained accent anchor across full width. */
export const HERO_TOP_HAIRLINE_HOME =
  "pointer-events-none absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-accent/38 to-transparent";

export const HERO_TOP_HAIRLINE =
  "pointer-events-none absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-accent/32 to-transparent";

/** Two-column hero grid — top-aligned so copy reads as anchored, not vertically centered. */
export const HERO_TWO_COLUMN_GRID =
  "grid items-start gap-9 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14 2xl:gap-16";

/** Copy column: left-led; width capped for readability. */
export const HERO_TWO_COLUMN_COPY =
  "min-w-0 w-full max-w-xl lg:max-w-[min(100%,36rem)]";

/** Visual column: secondary; extra inset separates text block from decorative area on large screens. */
export const HERO_TWO_COLUMN_VISUAL =
  "relative flex w-full min-w-0 justify-center lg:justify-end lg:pl-6 xl:pl-10 2xl:pl-12";

/** Inner stack inside copy column (spacing between headline blocks). */
export const HERO_TEXT_STACK =
  "space-y-4 sm:space-y-5 md:space-y-6";

/** Shared hero container vertical rhythm — marketing pages (except home). */
export const HERO_PAGE_PADDING =
  "relative z-[1] py-12 sm:py-14 md:py-16";

/** Home hero — compact vertical rhythm while keeping premium presence. */
export const HERO_PAGE_PADDING_HOME =
  "relative z-[1] py-10 sm:py-12 md:py-14 lg:py-16";
