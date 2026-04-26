import type { ServicesCategoryId } from "@/lib/services-categories";
import { SERVICES_CATEGORY_ORDER } from "@/lib/services-categories";

const ESG_SEGMENT = "esg-corporate-reporting" as const;
const PRODUCT_SEGMENT = "product-sustainability-lca-epd" as const;
const SUPPLY_CHAIN_SEGMENT = "eu-regulations-supply-chain-compliance" as const;
const MARKET_READINESS_SEGMENT = "market-readiness" as const;
const CERTIFICATION_SEGMENT = "certification-traceability-market-confidence" as const;
const CARBON_SEGMENT = "carbon-climate-decarbonisation" as const;

const CARBON_ALIASES = [
  "carbon-climate-and-decarbonisation",
  "carbon-and-climate",
  "carbon-compliance",
  "carbon-climate",
] as const;

export function serviceRouteSegmentFromId(id: ServicesCategoryId): string {
  if (id === "reportingEsg") return ESG_SEGMENT;
  if (id === "productCircularity") return PRODUCT_SEGMENT;
  if (id === "regulatorySupplyChain") return SUPPLY_CHAIN_SEGMENT;
  if (id === "sustainableFinance") return MARKET_READINESS_SEGMENT;
  if (id === "certificationTraceability") return CERTIFICATION_SEGMENT;
  if (id === "carbonClimate") return CARBON_SEGMENT;
  return id;
}

export function serviceIdFromRouteSegment(value: string): ServicesCategoryId | null {
  if (value === ESG_SEGMENT) return "reportingEsg";
  if (value === PRODUCT_SEGMENT) return "productCircularity";
  if (value === SUPPLY_CHAIN_SEGMENT) return "regulatorySupplyChain";
  if (value === MARKET_READINESS_SEGMENT) return "sustainableFinance";
  if (value === CERTIFICATION_SEGMENT) return "certificationTraceability";
  if (value === CARBON_SEGMENT) return "carbonClimate";
  if ((CARBON_ALIASES as readonly string[]).includes(value)) return "carbonClimate";
  if (value === "reportingEsg") return "reportingEsg";
  if (value === "productCircularity") return "productCircularity";
  if (value === "regulatorySupplyChain") return "regulatorySupplyChain";
  if (value === "sustainableFinance") return "sustainableFinance";
  if (value === "sustainable-finance") return "sustainableFinance";
  if (value === "certificationTraceability") return "certificationTraceability";
  if ((SERVICES_CATEGORY_ORDER as readonly string[]).includes(value)) {
    return value as ServicesCategoryId;
  }
  return null;
}

export function isLegacyServiceSegment(value: string): boolean {
  return (
    value === "reportingEsg" ||
    value === "productCircularity" ||
    value === "regulatorySupplyChain" ||
    value === "sustainableFinance" ||
    value === "sustainable-finance" ||
    value === "certificationTraceability" ||
    (CARBON_ALIASES as readonly string[]).includes(value)
  );
}

