import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import {
  SERVICES_CATEGORY_ICONS,
  SERVICES_CATEGORY_ORDER,
  type ServicesCategoryId,
} from "@/lib/services-categories";
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
      <Container>
        <div className="mb-8 max-w-3xl">
          <h2
            id="services-detail-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {t("areas.title")}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.62]">
            {t("areas.subtitle")}
          </p>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4.5">
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
  const tagKeys = ["t1", "t2", "t3"] as const;

  return (
    <Link
      href={`/services/${categoryId}`}
      className={cn(
        homeCardClassName(true),
        "group flex h-full flex-col justify-between gap-5 p-5 text-left no-underline",
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/90 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] transition-colors group-hover:border-accent/35">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {t(`categories.${categoryId}.label`)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t(`categories.${categoryId}.summary`)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3">
        <ul className="flex flex-wrap gap-2">
          {tagKeys.map((k) => (
            <li
              key={`${categoryId}-${k}`}
              className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[0.75rem] font-semibold tracking-tight text-foreground/90"
            >
              {t(`hub.tags.${categoryId}.${k}`)}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary">
          {t("hub.cta")}
          <ChevronRight
            className="h-4 w-4 text-accent/80 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
