import {
  RESOURCE_FEATURED_SLUGS,
  type ResourceFeaturedSlug,
} from "@/lib/insights-content-keys";

/** Hero assets under public/images/resources/ — keyed by detail page slug. */
export const RESOURCE_HERO_IMAGE_BY_SLUG = {
  "csrd-double-materiality": "/images/resources/resource-csrd-double-materiality-hero.png",
  "cbam-data-financial-impact": "/images/resources/resource-cbam-data-financial-impact-hero.png",
  "digital-product-passport-data":
    "/images/resources/resource-digital-product-passport-data-hero.png",
  "ppwr-product-packaging-data": "/images/resources/resource-ppwr-product-packaging-data-hero.png",
  "scope-3-supplier-data": "/images/resources/resource-scope-3-supplier-data-hero.png",
  "digital-workspace-reporting":
    "/images/resources/resource-digital-workspace-reporting-hero.png",
} as const satisfies Record<ResourceFeaturedSlug, string>;

/** Intrinsic dimensions for next/image — matches exported hero assets (16:10). */
export const RESOURCE_HERO_IMAGE_DIMENSIONS = {
  width: 1200,
  height: 750,
} as const;

export function resourceHeroImageSrc(slug: ResourceFeaturedSlug): string {
  return RESOURCE_HERO_IMAGE_BY_SLUG[slug];
}

export function isResourceHeroImageSlug(slug: string): slug is ResourceFeaturedSlug {
  return (RESOURCE_FEATURED_SLUGS as readonly string[]).includes(slug);
}
