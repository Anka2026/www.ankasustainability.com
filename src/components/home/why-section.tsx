import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName, marketingIconContainerClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

import { Landmark, Network, ShieldCheck, Workflow } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const items = [
  { key: "c1" as const, icon: Landmark },
  { key: "c2" as const, icon: ShieldCheck },
  { key: "c3" as const, icon: Network },
  { key: "c4" as const, icon: Workflow },
];

export function WhySection({ t }: Props) {
  return (
    <section className={cn("relative bg-[var(--section-tint)]", SECTION_PAD_HOME)}>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />
      <Container className="relative max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          accentRule
          eyebrow={t("why.eyebrow")}
          title={t("why.title")}
          description={t("why.subtitle")}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map(({ key, icon: Icon }) => (
            <article
              key={key}
              className={cn(
                homeCardClassName(true),
                "flex h-full flex-col gap-4 p-5 sm:p-6",
              )}
            >
              <div className={marketingIconContainerClassName()}>
                <Icon strokeWidth={1.85} aria-hidden />
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="text-[0.9375rem] font-semibold leading-snug text-foreground">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`why.${key}.body`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
