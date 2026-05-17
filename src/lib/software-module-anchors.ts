import type { SoftwarePortfolioSlug } from "@/lib/software-portfolio";

/** Hash targets on /software (locale prefix via i18n Link). */
export const SOFTWARE_MODULE_ANCHORS = [
  "cbam",
  "cbam-calculation-engine",
  "cbam-compliance-console",
  "eudr",
  "dpp",
  "packaging-compliance",
  "supplier-data",
  "esg-workspace",
  "agri-climate",
] as const;

export type SoftwareModuleAnchorId = (typeof SOFTWARE_MODULE_ANCHORS)[number];

/** Portfolio listing slug (includes display-only modules without detail routes). */
export type SoftwarePortfolioDisplaySlug =
  | SoftwarePortfolioSlug
  | "supplier-data-evidence-workflow"
  | "esg-evidence-reporting-workspace";

export const SOFTWARE_PORTFOLIO_DISPLAY_ORDER: readonly SoftwarePortfolioDisplaySlug[] = [
  "cbam-calculation-engine",
  "cbam-compliance-console",
  "eudr-due-diligence-traceability",
  "digital-product-passport-platform",
  "packaging-compliance-tool",
  "supplier-data-evidence-workflow",
  "esg-evidence-reporting-workspace",
  "agri-climate-platform",
] as const;

const CBAM_DISPLAY_SLUGS = new Set<SoftwarePortfolioDisplaySlug>([
  "cbam-calculation-engine",
  "cbam-compliance-console",
]);

export function isCbamDisplaySlug(slug: string): boolean {
  return CBAM_DISPLAY_SLUGS.has(slug as SoftwarePortfolioDisplaySlug);
}

export function isSoftwarePortfolioDisplaySlug(
  value: string,
): value is SoftwarePortfolioDisplaySlug {
  return (SOFTWARE_PORTFOLIO_DISPLAY_ORDER as readonly string[]).includes(value);
}

/** Card element id for scroll targets. */
export const SOFTWARE_DISPLAY_TO_ANCHOR: Record<SoftwarePortfolioDisplaySlug, string | undefined> =
  {
    "cbam-calculation-engine": "cbam-calculation-engine",
    "cbam-compliance-console": "cbam-compliance-console",
    "eudr-due-diligence-traceability": "eudr",
    "digital-product-passport-platform": "dpp",
    "packaging-compliance-tool": "packaging-compliance",
    "supplier-data-evidence-workflow": "supplier-data",
    "esg-evidence-reporting-workspace": "esg-workspace",
    "agri-climate-platform": "agri-climate",
  };

export function softwareHrefForDisplaySlug(
  slug: SoftwarePortfolioDisplaySlug,
): `/software#${string}` | "/software" {
  const hash = SOFTWARE_DISPLAY_TO_ANCHOR[slug];
  if (!hash) return "/software";
  return `/software#${hash}`;
}
