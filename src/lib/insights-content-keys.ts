/** Stable iteration order for Resources / Insights page (i18n keys under `insightsPage`). */

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

export const INSIGHTS_FEATURED_KEYS = [
  "csrdMateriality",
  "cbamCost",
  "dppPrep",
  "ppwrProductData",
  "scope3Suppliers",
  "reportingWorkflow",
] as const;

export type InsightsFeaturedKey = (typeof INSIGHTS_FEATURED_KEYS)[number];
