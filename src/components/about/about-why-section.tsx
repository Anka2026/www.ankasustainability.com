import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";
import { BadgeCheck, Globe2, Layers, Sparkles } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const CARDS = [
  { key: "c1" as const, icon: Layers },
  { key: "c2" as const, icon: Sparkles },
  { key: "c3" as const, icon: BadgeCheck },
  { key: "c4" as const, icon: Globe2 },
] as const;

export function AboutWhySection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-muted/25", SECTION_PAD_HOME)}
      aria-labelledby="about-why-heading"
    >
      <Container>
        <SectionHeading
          titleAs="h2"
          titleId="about-why-heading"
          accentRule
          eyebrow=""
          title={t("why.title")}
          description={t("why.description")}
          descriptionClassName="max-w-none lg:max-w-4xl lg:text-nowrap"
        />
        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:gap-3.5">
          {CARDS.map(({ key, icon: Icon }) => (
            <li key={key} className={homeCardClassName(false)}>
              <div className="flex h-full gap-3.5 border-l-[3px] border-accent/35 bg-surface p-4 sm:p-5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.07] text-primary shadow-sm">
                  <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.85} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                    {t(`why.${key}Title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.58]">
                    {t(`why.${key}Text`)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
