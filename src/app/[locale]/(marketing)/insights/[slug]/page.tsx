import { notFound } from "next/navigation";

import { redirect } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import {
  LEGACY_RESOURCE_SLUG_MAP,
  resolveResourceFeaturedSlug,
} from "@/lib/insights-content-keys";

type PageProps = Readonly<{
  params: Promise<{ locale: string; slug: string }>;
}>;

export default async function InsightsSlugRedirectPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as AppLocale)) notFound();

  const target =
    slug in LEGACY_RESOURCE_SLUG_MAP
      ? LEGACY_RESOURCE_SLUG_MAP[slug]
      : resolveResourceFeaturedSlug(slug);

  if (!target) notFound();

  redirect({ href: `/resources/${target}`, locale: locale as AppLocale });
}
