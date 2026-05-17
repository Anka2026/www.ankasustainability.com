import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  FinalCtaSection,
  HeroSection,
  TrustStripSection,
  ServicesPreviewSection,
  SoftwarePreviewSection,
  ProjectApproachesSection,
  WhySection,
} from "@/components/home";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type PageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as AppLocale)) {
    return {};
  }
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "brand" });
  return {
    title: {
      absolute: t("siteTitle"),
    },
    description: t("siteDescription"),
  };
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const tServicesPage = await getTranslations("servicesPage");
  const tSoftwarePage = await getTranslations("softwarePage");

  return (
    <>
      <HeroSection t={t} />
      <TrustStripSection t={t} />
      <ServicesPreviewSection t={t} tServicesPage={tServicesPage} />
      <SoftwarePreviewSection t={t} tSoftware={tSoftwarePage} />
      <ProjectApproachesSection t={t} />
      <WhySection t={t} />
      <FinalCtaSection t={t} />
    </>
  );
}

