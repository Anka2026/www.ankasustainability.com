import {
  SOFTWARE_PORTFOLIO_DISPLAY_ORDER,
  type SoftwarePortfolioDisplaySlug,
} from "@/lib/software-module-anchors";

/** Canonical dashboard / preview assets under `public/images/software`. */
export const CBAM_CALCULATION_ENGINE_DASHBOARD_SRC =
  "/images/software/arvenza-cbam-calculation-engine-dashboard.png";
export const CBAM_COMPLIANCE_CONSOLE_DASHBOARD_SRC =
  "/images/software/arvenza-cbam-compliance-console-dashboard.png";
export const EUDR_DASHBOARD_PREVIEW_SRC = "/images/software/arvenza-eudr-dashboard-preview.png";
export const DPP_DASHBOARD_PREVIEW_SRC = "/images/software/arvenza-dpp-dashboard-preview.png";
export const PACKAGING_COMPLIANCE_DASHBOARD_SRC =
  "/images/software/arvenza-packaging-compliance-tool-dashboard.png";
export const SUPPLIER_DATA_DASHBOARD_SRC =
  "/images/software/arvenza-supplier-data-evidence-workflow-dashboard.png";
export const ESG_WORKSPACE_DASHBOARD_SRC =
  "/images/software/arvenza-esg-evidence-reporting-workspace-dashboard.png";
export const AGRI_CLIMATE_DASHBOARD_SRC =
  "/images/software/arvenza-agri-climate-platform-dashboard.png";

const DASHBOARD_SRC_BY_SLUG = {
  "cbam-calculation-engine": CBAM_CALCULATION_ENGINE_DASHBOARD_SRC,
  "cbam-compliance-console": CBAM_COMPLIANCE_CONSOLE_DASHBOARD_SRC,
  "eudr-due-diligence-traceability": EUDR_DASHBOARD_PREVIEW_SRC,
  "digital-product-passport-platform": DPP_DASHBOARD_PREVIEW_SRC,
  "packaging-compliance-tool": PACKAGING_COMPLIANCE_DASHBOARD_SRC,
  "supplier-data-evidence-workflow": SUPPLIER_DATA_DASHBOARD_SRC,
  "esg-evidence-reporting-workspace": ESG_WORKSPACE_DASHBOARD_SRC,
  "agri-climate-platform": AGRI_CLIMATE_DASHBOARD_SRC,
} as const satisfies Record<SoftwarePortfolioDisplaySlug, string>;

/** Home + marketing highlights — user-facing order (matches service narratives). */
export const HOME_SOFTWARE_HIGHLIGHT_ORDER: readonly SoftwarePortfolioDisplaySlug[] = [
  "cbam-calculation-engine",
  "cbam-compliance-console",
  "eudr-due-diligence-traceability",
  "packaging-compliance-tool",
  "digital-product-passport-platform",
  "supplier-data-evidence-workflow",
  "esg-evidence-reporting-workspace",
  "agri-climate-platform",
];

export type SoftwareCardPreviewKind = "dashboard" | "fallback";

export function getSoftwarePreviewAvailable(slug: SoftwarePortfolioDisplaySlug): boolean {
  return Boolean(DASHBOARD_SRC_BY_SLUG[slug]);
}

export function getSoftwareCardPreviewKind(slug: SoftwarePortfolioDisplaySlug): SoftwareCardPreviewKind {
  return getSoftwarePreviewAvailable(slug) ? "dashboard" : "fallback";
}

export function getSoftwareDashboardImageSrc(slug: SoftwarePortfolioDisplaySlug): string | null {
  return DASHBOARD_SRC_BY_SLUG[slug] ?? null;
}

/** Slugs that ship a dashboard image in this repo (for assertions / docs). */
export const SOFTWARE_SLUGS_WITH_DASHBOARD: readonly SoftwarePortfolioDisplaySlug[] =
  SOFTWARE_PORTFOLIO_DISPLAY_ORDER.filter((s) => getSoftwarePreviewAvailable(s));
