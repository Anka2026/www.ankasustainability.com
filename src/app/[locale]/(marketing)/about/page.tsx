import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  AboutFinalCtaSection,
  AboutFounderSection,
  AboutFounderStatsSection,
  AboutHelpSection,
  AboutHeroSection,
  AboutHeroProofSection,
  AboutOurPositionSection,
  AboutProcessSection,
  AboutWhySection,
} from "@/components/about";
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

  const t = await getTranslations({ locale, namespace: "aboutPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("aboutPage");

  return (
    <>
      <AboutHeroSection t={t} />
      <AboutHeroProofSection t={t} />
      <AboutOurPositionSection t={t} />
      <AboutFounderSection t={t} />
      <AboutFounderStatsSection t={t} />
      <AboutHelpSection t={t} />
      <AboutProcessSection t={t} />
      <AboutWhySection t={t} />
      <AboutFinalCtaSection t={t} />
    </>
  );
}

