import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  ServicesDetailSection,
  ServicesFinalCtaSection,
  ServicesHeroSection,
  ServicesOverviewSection,
  ServicesPageNavStrip,
  ServicesProcessSection,
  ServicesWhySection,
} from "@/components/services";
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

  const t = await getTranslations({ locale, namespace: "servicesPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("servicesPage");

  return (
    <>
      <ServicesHeroSection t={t} />
      <ServicesPageNavStrip t={t} />
      <ServicesOverviewSection t={t} />
      <ServicesDetailSection t={t} />
      <ServicesProcessSection t={t} />
      <ServicesWhySection t={t} />
      <ServicesFinalCtaSection t={t} />
    </>
  );
}

