import type { SectorId } from "@/lib/sectors-order";
import { SECTOR_IDS } from "@/lib/sectors-order";

export const SECTOR_SLUGS = [
  "textile-fashion",
  "agriculture-food",
  "packaging-plastics-materials",
  "building-materials",
  "metal-aluminium-industrial",
  "automotive-mobility",
  "chemicals-industrial",
  "tourism-hospitality",
] as const;

export type SectorSlug = (typeof SECTOR_SLUGS)[number];

const SECTOR_ID_TO_SLUG: Record<SectorId, SectorSlug> = {
  textileFashion: "textile-fashion",
  agricultureFood: "agriculture-food",
  packagingMaterials: "packaging-plastics-materials",
  constructionMaterials: "building-materials",
  metalsIndustrial: "metal-aluminium-industrial",
  automotiveMobility: "automotive-mobility",
  chemicals: "chemicals-industrial",
  tourismServices: "tourism-hospitality",
};

const SECTOR_SLUG_TO_ID = Object.fromEntries(
  Object.entries(SECTOR_ID_TO_SLUG).map(([id, slug]) => [slug, id]),
) as Record<SectorSlug, SectorId>;

export function sectorSlugFromId(id: SectorId): SectorSlug {
  return SECTOR_ID_TO_SLUG[id];
}

export function sectorIdFromSlug(value: string): SectorId | null {
  if ((SECTOR_SLUGS as readonly string[]).includes(value)) {
    return SECTOR_SLUG_TO_ID[value as SectorSlug];
  }
  return null;
}

export function isSectorSlug(value: string): value is SectorSlug {
  return (SECTOR_SLUGS as readonly string[]).includes(value);
}

export const SECTOR_SLUG_LIST = SECTOR_SLUGS;

/** @deprecated ids — for type-safe iteration with slugs */
export { SECTOR_IDS };
