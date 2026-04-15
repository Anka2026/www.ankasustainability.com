import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Car,
  Factory,
  FlaskConical,
  Package,
  Palmtree,
  Shirt,
  Wheat,
} from "lucide-react";

export const SECTOR_IDS = [
  "textileFashion",
  "agricultureFood",
  "packagingMaterials",
  "constructionMaterials",
  "metalsIndustrial",
  "automotiveMobility",
  "chemicals",
  "tourismServices",
] as const;

export type SectorId = (typeof SECTOR_IDS)[number];

export const SECTOR_ICONS: Record<SectorId, LucideIcon> = {
  textileFashion: Shirt,
  agricultureFood: Wheat,
  packagingMaterials: Package,
  constructionMaterials: Building2,
  metalsIndustrial: Factory,
  automotiveMobility: Car,
  chemicals: FlaskConical,
  tourismServices: Palmtree,
};
