/**
 * Gold accent policy — navy + teal remain primary; gold is a small signature only.
 *
 * Allowed: resources listing/detail (badge, micro divider, hairline, sidebar highlight),
 * about founder stats band, footer KvK trust line.
 *
 * Do not use on: services, sectors overview/detail, contact, primary CTAs, large backgrounds.
 */

/** Resources category badge only. */
export function goldCategoryBadgeClassName() {
  return "resource-gold-badge";
}

/** 1px hairline — resources ANKA approach, about stats, footer KvK. */
export function goldMicroHairlineClassName() {
  return "brand-gold-hairline";
}

/** Sidebar / trust label text — resources sidebar highlight, footer KvK caption. */
export function goldAccentLabelClassName() {
  return "brand-gold-label";
}
