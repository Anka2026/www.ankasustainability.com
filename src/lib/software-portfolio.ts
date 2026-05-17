/** Public software portfolio — flat list (marketing + detail routes). */
export const SOFTWARE_PORTFOLIO_SLUGS = [
  "cbam-calculation-engine",
  "agri-climate-platform",
  "eudr-due-diligence-traceability",
  "cbam-compliance-console",
  "digital-product-passport-platform",
  "packaging-compliance-tool",
] as const;

export type SoftwarePortfolioSlug = (typeof SOFTWARE_PORTFOLIO_SLUGS)[number];

/** Display order on /software. */
export const SOFTWARE_PORTFOLIO_ORDER: readonly SoftwarePortfolioSlug[] = [
  "cbam-calculation-engine",
  "agri-climate-platform",
  "eudr-due-diligence-traceability",
  "cbam-compliance-console",
  "digital-product-passport-platform",
  "packaging-compliance-tool",
] as const;

export function isSoftwarePortfolioSlug(value: string): value is SoftwarePortfolioSlug {
  return (SOFTWARE_PORTFOLIO_SLUGS as readonly string[]).includes(value);
}

/** @deprecated Legacy status model — retained only for product detail JSON compatibility. */
export type SoftwarePortfolioStatus =
  | "pilot"
  | "roadmap"
  | "early_access"
  | "in_development"
  | "core"
  | "coming_soon"
  | "selected_use"
  | "controlled_development"
  | "planned_capacity"
  | "priority_development";

export function parseSoftwarePortfolioStatus(value: string): SoftwarePortfolioStatus | null {
  switch (value) {
    case "pilot":
    case "roadmap":
    case "early_access":
    case "in_development":
    case "core":
    case "coming_soon":
    case "selected_use":
    case "controlled_development":
    case "planned_capacity":
    case "priority_development":
      return value;
    default:
      return null;
  }
}
