import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_BG_TINT, SECTION_PAD_HOME } from "@/lib/section-layout";
import { CARD_DESCRIPTION, CARD_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";

import {
  ClipboardList,
  BadgeCheck,
  Factory,
  Globe2,
  LineChart,
  PiggyBank,
} from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
  tServicesPage: IntlTranslator;
}>;

const cards = [
  { key: "reporting" as const, icon: ClipboardList },
  { key: "carbon" as const, icon: LineChart },
  { key: "lifecycle" as const, icon: Factory },
  { key: "programs" as const, icon: Globe2 },
  { key: "finance" as const, icon: PiggyBank },
  { key: "certification" as const, icon: BadgeCheck },
];

export function ServicesPreviewSection({ t, tServicesPage }: Props) {
  return (
    <section className={cn("relative", SECTION_BG_TINT, SECTION_PAD_HOME)}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/22 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          titleAs="h2"
          accentRule
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.subtitle")}
          descriptionClassName="xl:max-w-none xl:whitespace-nowrap"
        />
        <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ key, icon: Icon }) => (
            <article
              key={key}
              className={cn(
                "group flex flex-col p-5 sm:p-6",
                homeCardClassName(true),
              )}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/22 bg-accent/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75),0_10px_22px_-18px_rgba(8,145,178,0.22)] ring-1 ring-inset ring-primary/[0.05] transition-colors group-hover:border-accent/45 group-hover:bg-accent/[0.12] sm:mb-4">
                <Icon className="size-[1.125rem] text-primary" strokeWidth={1.85} aria-hidden />
              </div>
              <h3 className={CARD_TITLE}>
                {key === "finance"
                  ? tServicesPage("categories.sustainableFinance.label")
                  : key === "certification"
                    ? tServicesPage("categories.certificationTraceability.label")
                    : t(`services.${key}.title`)}
              </h3>
              <p className={CARD_DESCRIPTION}>
                {key === "finance"
                  ? tServicesPage("categories.sustainableFinance.summary")
                  : key === "certification"
                    ? tServicesPage("categories.certificationTraceability.summary")
                    : t(`services.${key}.body`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
