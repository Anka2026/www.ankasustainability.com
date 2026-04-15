import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  InsightsFeaturedSection,
  InsightsFinalCtaSection,
  InsightsHeroSection,
} from "@/components/insights";
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

  const t = await getTranslations({ locale, namespace: "insightsPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function InsightsPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("insightsPage");

  return (
    <>
      <InsightsHeroSection t={t} />
      <InsightsFeaturedSection t={t} />
      <InsightsFinalCtaSection t={t} />
    </>
  );
}

