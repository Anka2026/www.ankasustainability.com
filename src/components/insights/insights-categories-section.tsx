import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { homeCardClassName } from "@/lib/home-classes";
import { INSIGHTS_CATEGORY_KEYS } from "@/lib/insights-content-keys";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function InsightsCategoriesSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-surface py-14 sm:py-16 md:py-20"
      aria-labelledby="insights-categories-heading"
    >
      <Container>
        <SectionHeading
          titleAs="h2"
          titleId="insights-categories-heading"
          accentRule
          eyebrow=""
          title={t("categories.title")}
        />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {INSIGHTS_CATEGORY_KEYS.map((key) => (
            <article
              key={key}
              className={cn(
                homeCardClassName(true),
                "flex flex-col gap-4 p-6 sm:p-7",
              )}
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {t(`categories.cards.${key}.title`)}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                {t(`categories.cards.${key}.description`)}
              </p>
              <AppButton variant="outline" size="default" asChild className="w-fit">
                <Link href="/contact">{t(`categories.cards.${key}.cta`)}</Link>
              </AppButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
