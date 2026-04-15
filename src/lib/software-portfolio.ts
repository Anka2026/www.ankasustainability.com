export type SoftwarePortfolioStatus = "core" | "in_development" | "coming_soon";

export const SOFTWARE_PORTFOLIO_SLUGS = [
  "agri-climate-platform",
  "cbam-calculation-engine",
  "cbam-financial-impact-engine",
  "digital-product-passport-platform",
  "packaging-compliance-cost-os",
  "sustainable-supply-chain-platform",
  "eudr-due-diligence-platform",
] as const;

export type SoftwarePortfolioSlug = (typeof SOFTWARE_PORTFOLIO_SLUGS)[number];

export const SOFTWARE_PORTFOLIO_GROUPS: Readonly<{
  readyNow: readonly SoftwarePortfolioSlug[];
  inDevelopment: readonly SoftwarePortfolioSlug[];
  comingSoon: readonly SoftwarePortfolioSlug[];
}> = {
  readyNow: ["agri-climate-platform"],
  inDevelopment: ["cbam-calculation-engine", "cbam-financial-impact-engine"],
  comingSoon: [
    "digital-product-passport-platform",
    "packaging-compliance-cost-os",
    "sustainable-supply-chain-platform",
    "eudr-due-diligence-platform",
  ],
} as const;

export function isSoftwarePortfolioSlug(value: string): value is SoftwarePortfolioSlug {
  return (SOFTWARE_PORTFOLIO_SLUGS as readonly string[]).includes(value);
}

export function parseSoftwarePortfolioStatus(value: string): SoftwarePortfolioStatus | null {
  if (value === "core" || value === "in_development" || value === "coming_soon") return value;
  return null;
}
