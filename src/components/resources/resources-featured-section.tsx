import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { RESOURCE_FEATURED_SLUGS } from "@/lib/insights-content-keys";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { resourceCategoryBadgeClassName } from "@/lib/resources-premium-classes";
import { CARD_DESCRIPTION, CARD_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
  tItems: IntlTranslator;
}>;

export function ResourcesFeaturedSection({ t, tItems }: Props) {
  return (
    <section
      id="resources-featured"
      className="relative border-b border-border bg-[var(--section-tint)] py-12 sm:py-16"
      aria-labelledby="resources-featured-heading"
    >
      <Container className="relative max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          accentRule
          eyebrow={t("featured.eyebrow")}
          title={t("featured.title")}
          description={t("featured.text")}
          descriptionClassName="max-w-3xl"
        />

        <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {tItems("featured.collectionLabel")}
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {RESOURCE_FEATURED_SLUGS.map((slug) => {
            const base = `featured.items.${slug}`;
            return (
              <Link
                key={slug}
                href={`/resources/${slug}`}
                aria-label={tItems(`${base}.title`)}
                className={cn(
                  "group block rounded-[1.35rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
              >
                <article
                  className={cn(
                    "relative flex h-full min-h-0 flex-col overflow-hidden p-5 sm:p-6",
                    homeCardClassName(true),
                    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/40 before:to-transparent",
                  )}
                >
                  <span className={resourceCategoryBadgeClassName()}>{tItems(`${base}.category`)}</span>
                  <h3 className={cn(CARD_TITLE, "mt-4 text-pretty leading-snug")}>
                    {tItems(`${base}.title`)}
                  </h3>
                  <p className={cn(CARD_DESCRIPTION, "mt-3 flex-1 text-pretty")}>
                    {tItems(`${base}.description`)}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                    <span className="text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-accent">
                      {tItems(`${base}.cta`)}
                    </span>
                    <span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/[0.06] text-accent transition-[border-color,background-color,transform] duration-200 group-hover:border-accent/35 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      <ArrowRight className="size-4" strokeWidth={2} />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
