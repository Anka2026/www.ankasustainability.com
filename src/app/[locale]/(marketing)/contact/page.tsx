import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  ContactFinalCtaSection,
  ContactFormSection,
  ContactHeroSection,
  ContactOptionsSection,
  ContactProcessSection,
} from "@/components/contact";
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

  const t = await getTranslations({ locale, namespace: "contactPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("contactPage");

  return (
    <>
      <ContactHeroSection t={t} />
      <ContactOptionsSection t={t} />
      <ContactFormSection t={t} />
      <ContactProcessSection t={t} />
      <ContactFinalCtaSection t={t} />
    </>
  );
}

