export const SECTOR_DETAIL_SECTION_KEYS = [
  "reality",
  "criticalAreas",
  "challenges",
  "ankaApproach",
] as const;

export type SectorDetailSectionKey = (typeof SECTOR_DETAIL_SECTION_KEYS)[number];
