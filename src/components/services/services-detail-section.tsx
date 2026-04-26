import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import {
  SERVICES_CATEGORY_ICONS,
  SERVICES_CATEGORY_ORDER,
  type ServicesCategoryId,
} from "@/lib/services-categories";
import { serviceRouteSegmentFromId } from "@/lib/services-routing";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ServicesDetailSection({ t }: Props) {
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
            <ServiceNavCard key={id} categoryId={id} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceNavCard({
  categoryId,
  t,
}: {
  categoryId: ServicesCategoryId;
  t: IntlTranslator;
}) {
  const Icon = SERVICES_CATEGORY_ICONS[categoryId];
  const segment = serviceRouteSegmentFromId(categoryId);
  const body = t(`areas.cards.${categoryId}.body`);

  return (
    <Link
      href={`/services/${segment}`}
      className={cn(
        homeCardClassName(true),
        "group flex h-full flex-col justify-between gap-5 p-5 text-left no-underline sm:p-6",
        "shadow-[0_20px_56px_-48px_rgba(15,23,42,0.5)]",
      )}
    >
      <div className="min-w-0">
        <div className="flex items-start gap-3.5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-background/90 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] transition-colors group-hover:border-accent/35">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-[1.0625rem]">
              {t(`areas.cards.${categoryId}.title`)}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.6]">
              {body}
            </p>
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
  );
}
