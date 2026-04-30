import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  CloudSun,
  Compass,
  Landmark,
  Layers,
  Scale,
} from "lucide-react";

export const SERVICES_CATEGORY_ORDER = [
  "reportingEsg",
  "carbonClimate",
  "productCircularity",
  "regulatorySupplyChain",
  "sustainableFinance",
  "certificationTraceability",
  "sustainableTourismGstc",
] as const;

export type ServicesCategoryId = (typeof SERVICES_CATEGORY_ORDER)[number];

export const SERVICES_CATEGORY_ICONS: Record<ServicesCategoryId, LucideIcon> =
  {
    reportingEsg: BarChart3,
    carbonClimate: CloudSun,
    productCircularity: Layers,
    regulatorySupplyChain: Scale,
    sustainableFinance: Landmark,
    certificationTraceability: BadgeCheck,
    sustainableTourismGstc: Compass,
  };

export const PROCESS_STEP_KEYS = [
  "assessment",
  "structuring",
  "implementation",
  "delivery",
] as const;

export type ProcessStepId = (typeof PROCESS_STEP_KEYS)[number];
