import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SectorDetailView } from "@/components/sectors/sector-detail-view";
import { routing, type AppLocale } from "@/i18n/routing";
import {
  isSectorSlug,
  sectorIdFromSlug,
  SECTOR_SLUG_LIST,
  type SectorSlug,
} from "@/lib/sectors-routing";

type PageProps = Readonly<{
  params: Promise<{ locale: string; sector: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SECTOR_SLUG_LIST.map((sector) => ({ locale, sector })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, sector } = await params;

  if (!routing.locales.includes(locale as AppLocale) || !isSectorSlug(sector)) {
    return {};
  }

  const sectorId = sectorIdFromSlug(sector);
  if (!sectorId) return {};

  const t = await getTranslations({ locale, namespace: "sectorsPage" });

  return {
    title: `${t(`grid.sectors.${sectorId}.title`)} | ${t("meta.title")}`,
    description: t(`grid.sectors.${sectorId}.description`),
  };
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { locale, sector } = await params;

  if (!routing.locales.includes(locale as AppLocale)) notFound();
  if (!isSectorSlug(sector)) notFound();

  setRequestLocale(locale);

  return <SectorDetailView slug={sector as SectorSlug} />;
}
