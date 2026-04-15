/**
 * Shared vertical rhythm + surface roles for public pages.
 * Keeps layering coherent: canvas → tinted / deep bands → white panels → elevated cards.
 */

/** Page canvas (use when a section should match the global background explicitly). */
export const SECTION_BG_CANVAS = "bg-background";

/** Subtle Steel Cyan wash — alternates with canvas / surface. */
export const SECTION_BG_TINT = "bg-[var(--section-tint)]";

/** Cool primary-grey band — more depth than tint, still restrained. */
export const SECTION_BG_DEEP = "bg-[var(--section-deep)]";

/** Pure white section — breaks long tinted scroll. */
export const SECTION_BG_SURFACE = "bg-surface";

/** Standard content section (most bordered sections). */
export const SECTION_PAD_STANDARD =
  "border-b border-border py-9 sm:py-11 md:py-12";

/** Home and key “chapter” sections with a bit more breathing room. */
export const SECTION_PAD_EMPHASIS =
  "border-b border-border py-11 sm:py-12 md:py-14";

/** Tighter home marketing sections (denser rhythm). */
export const SECTION_PAD_HOME =
  "border-b border-border py-8 sm:py-9 md:py-10";

/** Narrow strips (themes, capability rows). */
export const SECTION_PAD_STRIP =
  "border-b border-border py-7 sm:py-8 md:py-9";

/** Final CTA band — consistent across pages. */
export const FINAL_CTA_PAD = "pt-7 pb-6 sm:pt-8 sm:pb-7 md:pt-8 md:pb-7";

/** Framed white inset — optional wrapper inside a tinted/deep section. */
export const SECTION_INSET_PANEL =
  "rounded-2xl border border-border/60 bg-surface shadow-[var(--shadow-card)]";
