import type { ServicesCategoryId } from "@/lib/services-categories";
import type { SoftwarePortfolioDisplaySlug } from "@/lib/software-module-anchors";

/** Arvenza modules referenced from service detail digital-structure bands. */
export const SERVICE_DIGITAL_MODULE_SLUGS: Partial<
  Record<ServicesCategoryId, readonly SoftwarePortfolioDisplaySlug[]>
> = {
  carbonClimate: ["cbam-calculation-engine", "cbam-compliance-console"],
  reportingEsg: ["esg-evidence-reporting-workspace", "supplier-data-evidence-workflow"],
  productCircularity: ["digital-product-passport-platform", "packaging-compliance-tool"],
  regulatorySupplyChain: ["eudr-due-diligence-traceability", "packaging-compliance-tool"],
  sustainableFinance: ["supplier-data-evidence-workflow", "esg-evidence-reporting-workspace"],
  certificationTraceability: ["supplier-data-evidence-workflow", "digital-product-passport-platform"],
};

export function getServiceDigitalModuleSlugs(
  categoryId: ServicesCategoryId,
): readonly SoftwarePortfolioDisplaySlug[] {
  return SERVICE_DIGITAL_MODULE_SLUGS[categoryId] ?? [];
}
