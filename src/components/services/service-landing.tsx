import type { AppLocale } from "@/i18n/routing";
import type { IntlTranslator } from "@/lib/i18n-types";
import type { ServicesCategoryId } from "@/lib/services-categories";
import { CarbonClimateBenchmarkLanding } from "@/components/services/carbon-climate-benchmark-landing";
import { BenchmarkServiceLanding } from "@/components/services/benchmark-service-landing";

type Props = Readonly<{
  t: IntlTranslator;
  categoryId: ServicesCategoryId;
  locale: AppLocale;
}>;

export function ServiceLanding({ t, categoryId, locale }: Props) {
  if (categoryId === "carbonClimate") {
    return <CarbonClimateBenchmarkLanding t={t} locale={locale} />;
  }

  return <BenchmarkServiceLanding t={t} categoryId={categoryId} locale={locale} />;
}

