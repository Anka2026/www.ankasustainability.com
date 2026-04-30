import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  aboutPremiumCardClassName,
  aboutPrimaryAccentCardClassName,
} from "@/lib/about-card-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";
import { Network, Layers2, Wrench, Cpu } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const CARDS = [
  { key: "c1" as const, icon: Network },
  { key: "c2" as const, icon: Layers2 },
  { key: "c3" as const, icon: Wrench },
  { key: "c4" as const, icon: Cpu },
] as const;

export function AboutWhySection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-background", SECTION_PAD_HOME)}
      aria-labelledby="about-differentiators-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="about-differentiators-heading"
          accentRule
          eyebrow={t("differentiators.eyebrow")}
          title={t("differentiators.title")}
          description={t("differentiators.intro")}
          descriptionClassName="max-w-4xl text-pretty"
        />
        <div className="mt-8 grid gap-3.5 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {CARDS.map(({ key, icon: Icon }) => {
            const isFeatured = key === "c1";
            return (
              <article
                key={key}
                className={cn(
                  "flex h-full min-h-0 flex-col p-4 sm:p-5",
                  isFeatured ? aboutPrimaryAccentCardClassName() : aboutPremiumCardClassName(),
                  !isFeatured && "bg-surface/90",
                )}
              >
                <div
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-xl border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]",
                    isFeatured
                      ? "border-white/20 bg-white/10"
                      : "border-primary/12 bg-primary/[0.04]",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-4",
                      isFeatured ? "text-primary-foreground" : "text-primary",
                    )}
                    strokeWidth={1.85}
                    aria-hidden
                  />
                </div>
                <h3
                  className={cn(
                    "mt-3.5 min-w-0 text-[0.9rem] font-semibold leading-snug tracking-tight sm:text-[0.9375rem]",
                    isFeatured ? "text-primary-foreground" : "text-foreground",
                  )}
                >
                  {t(`differentiators.${key}.title`)}
                </h3>
                <p
                  className={cn(
                    "mt-2 min-w-0 text-xs leading-relaxed sm:text-sm sm:leading-[1.55]",
                    isFeatured ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {t(`differentiators.${key}.body`)}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
