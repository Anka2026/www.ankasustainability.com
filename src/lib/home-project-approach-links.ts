import type { ServicesCategoryId } from "@/lib/services-categories";

export type ProjectApproachCardKey = "c1" | "c2" | "c3";

/** Stable anchor ids on /services for homepage project-approach cards. */
export const PROJECT_APPROACH_SERVICE_ANCHORS: Partial<Record<ServicesCategoryId, string>> = {
  carbonClimate: "cbam",
  productCircularity: "lca-epd",
  regulatorySupplyChain: "eu-regulatory-compliance",
};

export const PROJECT_APPROACH_CARD_LINKS: Record<
  ProjectApproachCardKey,
  Readonly<{ anchor: string; categoryId: ServicesCategoryId }>
> = {
  c1: { anchor: "cbam", categoryId: "carbonClimate" },
  c2: { anchor: "lca-epd", categoryId: "productCircularity" },
  c3: { anchor: "eu-regulatory-compliance", categoryId: "regulatorySupplyChain" },
};

const PROJECT_APPROACH_ANCHOR_SLUGS = new Set(
  Object.values(PROJECT_APPROACH_CARD_LINKS).map((entry) => entry.anchor),
);

export type ProjectApproachServicesHref = Readonly<{
  pathname: "/services";
  hash: string;
}>;

/** Homepage cards → /services hub anchors (not detail routes). */
export function projectApproachServicesHref(key: ProjectApproachCardKey): ProjectApproachServicesHref {
  return {
    pathname: "/services",
    hash: PROJECT_APPROACH_CARD_LINKS[key].anchor,
  };
}

/** Legacy/wrong detail URLs such as /services/cbam → /services#cbam */
export function isProjectApproachAnchorSlug(value: string): boolean {
  return PROJECT_APPROACH_ANCHOR_SLUGS.has(value);
}

export function serviceCardAnchorId(categoryId: ServicesCategoryId): string {
  return PROJECT_APPROACH_SERVICE_ANCHORS[categoryId] ?? `service-${categoryId}`;
}
