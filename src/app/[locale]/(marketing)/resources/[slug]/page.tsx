import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ResourceDetailView } from "@/components/resources/resource-detail-view";
import { redirect } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import {
  LEGACY_RESOURCE_SLUG_MAP,
  resolveResourceFeaturedSlug,
  type ResourceFeaturedSlug,
} from "@/lib/insights-content-keys";

type PageProps = Readonly<{
  params: Promise<{ locale: string; slug: string }>;
}>;

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as AppLocale)) return {};

  const resolved = resolveResourceFeaturedSlug(slug);
  if (!resolved) return {};

  const t = await getTranslations({ locale, namespace: "insightsPage" });
  const base = `featured.items.${resolved}`;

  return {
    title: `${t(`${base}.title`)} | ${t("meta.title")}`,
    description: t(`${base}.description`),
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as AppLocale)) notFound();
  setRequestLocale(locale);

  if (slug in LEGACY_RESOURCE_SLUG_MAP) {
    redirect({
      href: `/resources/${LEGACY_RESOURCE_SLUG_MAP[slug]}`,
      locale: locale as AppLocale,
    });
  }

  const resolved = resolveResourceFeaturedSlug(slug);
  if (!resolved) notFound();

  return <ResourceDetailView slug={resolved as ResourceFeaturedSlug} />;
}
