import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { homeCardClassName } from "@/lib/home-classes";
import { INSIGHTS_FEATURED_KEYS } from "@/lib/insights-content-keys";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function InsightsFeaturedSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-background py-12 sm:py-14"
      aria-labelledby="insights-featured-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="insights-featured-heading"
          accentRule
          eyebrow=""
          title={t("featured.title")}
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS_FEATURED_KEYS.map((key) => (
            <Link
              key={key}
              href={`/resources/${key}`}
              className={cn(
                "group block h-full",
                homeCardClassName(true),
                "flex flex-col gap-3 border-t-[3px] border-t-accent/45 bg-[var(--section-tint)] p-6 transition-[transform,box-shadow,border-color] hover:-translate-y-[1px] hover:border-t-accent hover:shadow-md sm:p-7",
              )}
              aria-label={t(`featured.items.${key}.title`)}
            >
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-accent uppercase">
                {t(`featured.items.${key}.category`)}
              </p>
              <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                {t(`featured.items.${key}.title`)}
              </h3>
              <p className="flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.55]">
                {t(`featured.items.${key}.description`)}
              </p>
              <p className="mt-1 text-sm font-medium text-accent transition-colors group-hover:text-primary">
                {t(`featured.items.${key}.cta`)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
