import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const BENEFIT_KEYS = ["b1", "b2", "b3"] as const;

export function SectorsContextBenefitsSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-surface py-12 sm:py-14"
      aria-labelledby="sectors-context-benefits-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div className="max-w-3xl">
            <SectionHeading
              titleAs="h2"
              titleId="sectors-context-benefits-heading"
              accentRule
              eyebrow=""
              title={t("contextIntro.title")}
              description={t("contextIntro.description")}
              descriptionClassName="max-w-none sm:text-base sm:leading-[1.6]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
            {BENEFIT_KEYS.map((key) => (
              <article
                key={key}
                className={cn(
                  homeCardClassName(false),
                  "rounded-3xl bg-[var(--section-tint)] p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7",
                )}
              >
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {t(`benefits.${key}.title`)}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                  {t(`benefits.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

