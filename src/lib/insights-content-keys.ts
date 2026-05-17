/** Stable iteration order for Resources / Insights featured cards (i18n under `insightsPage.featured.items`). */

export const INSIGHTS_THEME_KEYS = [
  "reportingEsg",
  "carbonCbam",
  "productSustainability",
  "regulatoryReadiness",
  "digitalDelivery",
] as const;

export type InsightsThemeKey = (typeof INSIGHTS_THEME_KEYS)[number];

export const INSIGHTS_CATEGORY_KEYS = [
  "regulationGuides",
  "implementationNotes",
  "sectorCommentaries",
  "softwareUpdates",
] as const;

export type InsightsCategoryKey = (typeof INSIGHTS_CATEGORY_KEYS)[number];

/** URL slugs for /resources/[slug] detail pages. */
export const RESOURCE_FEATURED_SLUGS = [
  "csrd-double-materiality",
  "cbam-data-financial-impact",
  "digital-product-passport-data",
  "ppwr-product-packaging-data",
  "scope-3-supplier-data",
  "digital-workspace-reporting",
] as const;

export type ResourceFeaturedSlug = (typeof RESOURCE_FEATURED_SLUGS)[number];

/** @deprecated Use RESOURCE_FEATURED_SLUGS — kept for imports that still reference the old name. */
export const INSIGHTS_FEATURED_KEYS = RESOURCE_FEATURED_SLUGS;

/** @deprecated Use ResourceFeaturedSlug */
export type InsightsFeaturedKey = ResourceFeaturedSlug;

export const RESOURCE_DETAIL_SECTION_KEYS = [
  "whyMatters",
  "whoItConcerns",
  "criticalAreas",
  "commonMistakes",
  "ankaApproach",
] as const;

export type ResourceDetailSectionKey = (typeof RESOURCE_DETAIL_SECTION_KEYS)[number];

/** Previous card keys → current slugs (301 redirects). */
export const LEGACY_RESOURCE_SLUG_MAP: Record<string, ResourceFeaturedSlug> = {
  csrdMateriality: "csrd-double-materiality",
  cbamCost: "cbam-data-financial-impact",
  dppPrep: "digital-product-passport-data",
  ppwrProductData: "ppwr-product-packaging-data",
  scope3Suppliers: "scope-3-supplier-data",
  reportingWorkflow: "digital-workspace-reporting",
};

export function resolveResourceFeaturedSlug(value: string): ResourceFeaturedSlug | null {
  if ((RESOURCE_FEATURED_SLUGS as readonly string[]).includes(value)) {
    return value as ResourceFeaturedSlug;
  }
  return LEGACY_RESOURCE_SLUG_MAP[value] ?? null;
}
