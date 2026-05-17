import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { redirect } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import type { ServicesCategoryId } from "@/lib/services-categories";
import { SERVICES_CATEGORY_ORDER } from "@/lib/services-categories";
import { isProjectApproachAnchorSlug } from "@/lib/home-project-approach-links";
import {
  isLegacyServiceSegment,
  serviceIdFromRouteSegment,
  serviceRouteSegmentFromId,
} from "@/lib/services-routing";
import { ServiceLanding } from "@/components/services/service-landing";

type PageProps = Readonly<{
  params: Promise<{ locale: string; service: string }>;
}>;

function isServicesCategoryId(value: string): value is ServicesCategoryId {
  return (SERVICES_CATEGORY_ORDER as readonly string[]).includes(value);
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, service } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    return {};
  }

  const categoryId = serviceIdFromRouteSegment(service);
  if (!categoryId) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "servicesPage" });

  const baseTitle = t("meta.title");
  const serviceTitle =
    categoryId === "carbonClimate"
      ? t(`landing.services.${categoryId}.seoTitle`)
      : t(`categories.${categoryId}.label`);

  return {
    title:
      categoryId === "carbonClimate"
        ? serviceTitle
        : `${serviceTitle} · ${baseTitle}`,
    description:
      categoryId === "carbonClimate"
        ? t(`landing.services.${categoryId}.seoDescription`)
        : t(`categories.${categoryId}.summary`),
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, service } = await params;

  setRequestLocale(locale);

  const categoryId = serviceIdFromRouteSegment(service);
  if (!categoryId) {
    if (isProjectApproachAnchorSlug(service)) {
      redirect({ href: `/services#${service}`, locale: locale as AppLocale });
    }
    notFound();
  }

  const canonicalSegment = serviceRouteSegmentFromId(categoryId);
  if (isLegacyServiceSegment(service) || service !== canonicalSegment) {
    redirect({ href: `/services/${canonicalSegment}`, locale: locale as AppLocale });
  }

  const t = await getTranslations("servicesPage");
  return (
    <ServiceLanding t={t} categoryId={categoryId} locale={locale as AppLocale} />
  );
}

