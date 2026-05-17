import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { AppLocale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName, marketingIconContainerClassName } from "@/lib/home-classes";
import { getHeroSubServiceTitlesForMenu } from "@/lib/service-sub-services";
import {
  SERVICES_CATEGORY_ICONS,
  SERVICES_CATEGORY_ORDER,
  type ServicesCategoryId,
} from "@/lib/services-categories";
import { serviceCardAnchorId } from "@/lib/home-project-approach-links";
import { serviceRouteSegmentFromId } from "@/lib/services-routing";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
  locale: AppLocale;
}>;

export function ServicesDetailSection({ t, locale }: Props) {
  return (
    <section
      id="services-areas"
      className="scroll-mt-24 border-b border-border bg-surface py-12 sm:py-14"
      aria-labelledby="services-detail-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="services-detail-heading"
          accentRule
          eyebrow={t("areas.eyebrow")}
          title={t("areas.title")}
          description={t("areas.intro")}
          descriptionClassName="max-w-4xl text-pretty sm:text-base sm:leading-[1.62]"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {SERVICES_CATEGORY_ORDER.map((id) => (
            <ServiceNavCard key={id} categoryId={id} t={t} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceNavCard({
  categoryId,
  t,
  locale,
}: {
  categoryId: ServicesCategoryId;
  t: IntlTranslator;
  locale: AppLocale;
}) {
  const Icon = SERVICES_CATEGORY_ICONS[categoryId];
  const segment = serviceRouteSegmentFromId(categoryId);
  const body = t(`areas.cards.${categoryId}.body`);
  const bullets = getHeroSubServiceTitlesForMenu(categoryId, locale, 4);

  const anchorId = serviceCardAnchorId(categoryId);

  return (
    <div id={anchorId} className="scroll-mt-32 sm:scroll-mt-36">
      <Link
        href={`/services/${segment}`}
        className={cn(
          homeCardClassName(true),
          "group flex h-full flex-col justify-between gap-5 p-5 text-left no-underline sm:p-6",
          "shadow-[0_20px_56px_-48px_rgba(15,23,42,0.5)]",
          "hover:bg-[var(--accent-soft)]/25",
        )}
      >
      <div className="min-w-0">
        <div className="flex items-start gap-3.5">
          <span className={cn(marketingIconContainerClassName(true), "h-11 w-11 rounded-2xl [&_svg]:size-5")}>
            <Icon aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-[1.0625rem]">
              {t(`areas.cards.${categoryId}.title`)}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.6]">
              {body}
            </p>
            <ul className="mt-3.5 space-y-1.5 border-l-2 border-accent/28 pl-3">
              {bullets.map((line) => (
                <li
                  key={line}
                  className="text-[0.8125rem] font-medium leading-snug text-foreground/88 sm:text-[0.84375rem]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {t("hub.cta")}
        <ChevronRight
          className="h-4 w-4 text-accent/80 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
    </div>
  );
}
