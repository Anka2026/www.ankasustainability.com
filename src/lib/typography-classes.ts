/**
 * Shared editorial typography — Steel Cyan system.
 * Mobile-first: comfortable rhythm on small screens; premium scale on large.
 */

/** Primary marketing hero <h1> — strong display, balanced wrapping, capped line length. */
export const DISPLAY_HERO_TITLE =
  "w-full max-w-[min(100%,40rem)] text-pretty text-balance text-[1.6875rem] font-medium leading-[1.14] tracking-[-0.03em] text-foreground sm:text-[2.35rem] sm:leading-[1.11] md:text-[2.75rem] md:leading-[1.08] lg:text-[2.875rem]";

/** Display hero on dark hero background. */
export const DISPLAY_HERO_TITLE_DARK =
  "w-full max-w-[min(100%,40rem)] text-pretty text-balance text-[1.6875rem] font-medium leading-[1.14] tracking-[-0.03em] text-white sm:text-[2.35rem] sm:leading-[1.11] md:text-[2.75rem] md:leading-[1.08] lg:text-[2.875rem]";

/** Home entry hero — slightly larger top step for the primary landing. */
export const DISPLAY_HERO_TITLE_HOME =
  "w-full max-w-[min(100%,42rem)] text-pretty text-balance text-[1.75rem] font-medium leading-[1.12] tracking-[-0.03em] text-foreground sm:text-[2.5rem] sm:leading-[1.1] md:text-[2.875rem] md:leading-[1.06] lg:text-[3rem]";

/** Home entry hero title on dark hero background. */
export const DISPLAY_HERO_TITLE_HOME_DARK =
  "w-full max-w-[min(100%,34rem)] text-pretty text-balance text-[1.75rem] font-medium leading-tight tracking-[-0.03em] text-white sm:text-[2.25rem] sm:leading-[1.1] md:text-[2.5rem] md:leading-[1.08] lg:text-[2.75rem]";

/** Eyebrow line above hero headline — secondary, compact, uppercase. */
export const HERO_EYEBROW_TEXT =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]";

/** Eyebrow on dark hero background. */
export const HERO_EYEBROW_TEXT_DARK =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.18em]";

/** Hero supporting paragraph — readable measure, calm leading. */
export const HERO_LEAD_TEXT =
  "mt-0.5 w-full max-w-[min(100%,36rem)] text-pretty text-base leading-[1.65] text-muted-foreground sm:text-lg sm:leading-[1.68]";

/** Hero supporting paragraph on dark hero background. */
export const HERO_LEAD_TEXT_DARK =
  "mt-0.5 w-full max-w-[min(100%,36rem)] text-pretty text-base leading-[1.65] text-white/78 sm:text-lg sm:leading-[1.68]";

/** Band CTA <h2> — clearly below display hero scale, still prominent. */
export const FINAL_CTA_TITLE =
  "mx-auto max-w-[min(100%,40rem)] text-balance text-pretty text-[1.25rem] font-semibold leading-snug tracking-[-0.02em] text-primary-foreground sm:text-[1.5rem] sm:leading-snug md:text-[1.625rem]";

/** Band CTA description under title. */
export const FINAL_CTA_DESCRIPTION =
  "mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-primary-foreground/88 sm:mt-3.5 sm:text-base sm:leading-[1.6]";

/** Legal / policy hero — calm, authoritative, slightly below marketing display scale. */
export const LEGAL_HERO_TITLE =
  "max-w-[min(100%,36rem)] text-balance text-pretty text-[1.5rem] font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-[1.75rem] sm:leading-[1.2] md:text-[2rem]";

/** Legal hero title on dark hero background. */
export const LEGAL_HERO_TITLE_DARK =
  "max-w-[min(100%,36rem)] text-balance text-pretty text-[1.5rem] font-semibold leading-snug tracking-[-0.02em] text-white sm:text-[1.75rem] sm:leading-[1.2] md:text-[2rem]";

/** Legal body section <h2> — editorial rail, matches hero language. */
export const LEGAL_SECTION_TITLE =
  "border-l-[3px] border-accent/40 pl-4 text-base font-semibold tracking-tight text-foreground sm:text-lg";

/** Inline page section title (not SectionHeading component) — h2 scale. */
export const INLINE_SECTION_TITLE =
  "text-balance text-pretty text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl sm:leading-snug md:text-[1.875rem]";

/** Card title (grids, feature blocks). */
export const CARD_TITLE =
  "text-base font-semibold tracking-[-0.02em] text-foreground sm:text-[1.0625rem]";

/** Card body — compact but scannable. */
export const CARD_DESCRIPTION =
  "mt-2.5 text-sm leading-[1.62] text-muted-foreground sm:mt-3 sm:text-[0.9375rem] sm:leading-[1.65]";
