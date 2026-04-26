import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { cn } from "@/lib/utils";
import { Database, Factory, Globe2, Monitor } from "lucide-react";

const WHY_KEYS = ["c1", "c2", "c3", "c4"] as const;
const WHY_ICONS = [Globe2, Database, Factory, Monitor] as const;

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ServicesWhySection({ t }: Props) {
  return (
    <section
      id="services-why"
      className="scroll-mt-24 border-b border-border bg-[var(--section-tint)] py-12 sm:py-14"
      aria-labelledby="services-why-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="services-why-heading"
          accentRule
          eyebrow={t("why.eyebrow")}
          title={t("why.title")}
          description={t("why.intro")}
          descriptionClassName="max-w-4xl text-pretty sm:text-base sm:leading-[1.62]"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {WHY_KEYS.map((key, idx) => {
            const Icon = WHY_ICONS[idx] ?? Globe2;
            const highlighted = key === "c1";
            return (
              <li
                key={key}
                className={cn(
                  homeCardClassName(false),
                  "min-h-0",
                  highlighted &&
                    "bg-primary text-primary-foreground ring-1 ring-inset ring-white/10",
                )}
              >
                <div
                  className={cn(
                    "flex h-full min-h-0 flex-col p-5 sm:p-6",
                    highlighted
                      ? "bg-transparent"
                      : "border-l-[3px] border-primary/30 bg-background",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-2xl border",
                      highlighted
                        ? "border-white/20 bg-white/10"
                        : "border-border/80 bg-surface/90 text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3
                    className={cn(
                      "mt-4 text-sm font-semibold leading-snug tracking-tight sm:text-[0.9375rem]",
                      highlighted ? "text-primary-foreground" : "text-foreground",
                    )}
                  >
                    {t(`why.${key}.title`)}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-sm leading-relaxed sm:leading-[1.58]",
                      highlighted
                        ? "text-primary-foreground/90"
                        : "text-muted-foreground",
                    )}
                  >
                    {t(`why.${key}.body`)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
