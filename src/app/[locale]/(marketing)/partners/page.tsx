import { getTranslations, setRequestLocale } from "next-intl/server";

import { PartnersPage } from "@/components/partners/partners-page";
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

  const t = await getTranslations({ locale, namespace: "partnersPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function PartnersRoutePage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("partnersPage");

  return <PartnersPage t={t} />;
}
