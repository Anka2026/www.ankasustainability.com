import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { INSIGHTS_FEATURED_KEYS } from "@/lib/insights-content-keys";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
  tItems: IntlTranslator;
}>;

export function ResourcesFeaturedSection({ t, tItems }: Props) {
  return (
    <section
      id="resources-featured"
      className="border-b border-border bg-[var(--section-tint)] py-12 sm:py-14"
      aria-labelledby="resources-featured-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/85">
          {t("featured.eyebrow")}
        </p>
        <h2
          id="resources-featured-heading"
          className="mt-3 max-w-3xl text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("featured.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
          {t("featured.text")}
        </p>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS_FEATURED_KEYS.map((key) => {
            const base = `featured.items.${key}`;
            return (
              <article
                key={key}
                className={cn(
                  "flex h-full min-h-0 flex-col rounded-2xl border border-border/85 bg-background p-5 shadow-[0_18px_48px_-40px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-primary/[0.04] transition-[transform,box-shadow] sm:p-6",
                  "hover:-translate-y-px hover:shadow-[0_24px_56px_-38px_rgba(15,23,42,0.4)]",
                )}
              >
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary/90">
                  {tItems(`${base}.category`)}
                </p>
                <h3 className="mt-2.5 text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[1.0625rem]">
                  {tItems(`${base}.title`)}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-[0.95rem] sm:leading-[1.55]">
                  {tItems(`${base}.description`)}
                </p>
                <div className="mt-5 border-t border-border/70 pt-4">
                  <AppButton variant="ghost" size="sm" asChild className="h-9 w-full justify-center gap-1 px-0 text-primary hover:bg-primary/[0.06] sm:h-9 sm:w-auto sm:justify-start">
                    <Link href={`/resources/${key}`} className="inline-flex items-center">
                      {tItems(`${base}.cta`)}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
                    </Link>
                  </AppButton>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
