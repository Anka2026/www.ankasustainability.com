import Image from "next/image";

import {
  RESOURCE_HERO_IMAGE_DIMENSIONS,
  resourceHeroImageSrc,
} from "@/lib/resources-hero-images";
import {
  resourceDetailHeroVisualClassName,
  resourceDetailHeroVisualWrapClassName,
} from "@/lib/resources-premium-classes";
import type { ResourceFeaturedSlug } from "@/lib/insights-content-keys";

type Props = Readonly<{
  slug: ResourceFeaturedSlug;
  alt: string;
  priority?: boolean;
}>;

export function ResourceDetailHeroVisual({ slug, alt, priority = true }: Props) {
  const src = resourceHeroImageSrc(slug);
  const { width, height } = RESOURCE_HERO_IMAGE_DIMENSIONS;

  return (
    <div className={resourceDetailHeroVisualWrapClassName()}>
      <div className={resourceDetailHeroVisualClassName()}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-contain object-center"
          sizes="(min-width: 1536px) 30rem, (min-width: 1280px) 27rem, (min-width: 1024px) 24rem, 100vw"
          priority={priority}
        />
      </div>
    </div>
  );
}
