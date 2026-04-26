import type { SoftwarePortfolioSlug } from "@/lib/software-portfolio";
import type { ServicesCategoryId } from "@/lib/services-categories";

export type RelatedTool = Readonly<{
  softwareSlug?: SoftwarePortfolioSlug;
}>;

export type ServiceLandingModel = Readonly<{
  focusChips: readonly string[];
  relatedTools?: readonly RelatedTool[];
}>;

export const SERVICE_LANDING: Record<ServicesCategoryId, ServiceLandingModel> = {
  reportingEsg: {
    focusChips: ["CSRD", "ESRS", "GRI", "ISSB", "Double Materiality"],
  },
  carbonClimate: {
    focusChips: [
      "GHG Protocol",
      "Scope 1, 2 And 3",
      "CBAM",
      "ISO 14064-1",
      "ISO 14067",
      "Decarbonisation Roadmaps",
    ],
    relatedTools: [{ softwareSlug: "cbam-calculation-engine" }],
  },
  productCircularity: {
    focusChips: ["LCA", "EPD", "Product Carbon Footprint", "EN 15804", "DPP"],
    relatedTools: [{ softwareSlug: "digital-product-passport-platform" }],
  },
  regulatorySupplyChain: {
    focusChips: ["EUDR", "CSDDD", "PPWR", "REACH", "ESPR"],
    relatedTools: [{ softwareSlug: "packaging-compliance-tool" }],
  },
  sustainableFinance: {
    focusChips: ["Buyer Requirements", "ESG Due Diligence", "Market Access", "Stakeholder Briefing"],
  },
  certificationTraceability: {
    focusChips: ["ISCC", "Chain Of Custody", "Supplier Evidence", "Audit Readiness", "Market Claims"],
    relatedTools: [{ softwareSlug: "agri-climate-platform" }],
  },
} as const;

