import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  SoftwareCapabilityStrip,
  SoftwareConsultingSection,
  SoftwareFinalCtaSection,
  SoftwareHeroSection,
  SoftwarePortfolio,
} from "@/components/software";
import { routing } from "@/i18n/routing";

type PageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "softwarePage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function SoftwarePage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("softwarePage");

  return (
    <>
      <SoftwareHeroSection t={t} />
      <SoftwarePortfolio t={t} />
      <SoftwareCapabilityStrip t={t} />
      <SoftwareConsultingSection t={t} />
      <SoftwareFinalCtaSection t={t} />
    </>
  );
}

