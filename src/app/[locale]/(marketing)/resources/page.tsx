import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  ResourcesCategoriesSection,
  ResourcesFeaturedSection,
  ResourcesFinalCtaSection,
  ResourcesHeroSection,
  ResourcesHowSection,
} from "@/components/resources";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type PageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "resourcesPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ResourcesPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("resourcesPage");
  const tItems = await getTranslations("insightsPage");

  return (
    <>
      <ResourcesHeroSection t={t} />
      <ResourcesFeaturedSection t={t} tItems={tItems} />
      <ResourcesCategoriesSection t={t} />
      <ResourcesHowSection t={t} />
      <ResourcesFinalCtaSection t={t} />
    </>
  );
}

