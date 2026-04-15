import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

import { Landmark, Network, ShieldCheck } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const items = [
  { key: "item1" as const, icon: ShieldCheck },
  { key: "item2" as const, icon: Landmark },
  { key: "item3" as const, icon: Network },
];

export function WhySection({ t }: Props) {
  return (
    <section className={cn("relative bg-surface", SECTION_PAD_HOME)}>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          titleAs="h2"
          accentRule
          eyebrow={t("why.eyebrow")}
          title={t("why.title")}
          description={t("why.subtitle")}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-5">
          {items.map(({ key, icon: Icon }) => (
            <article
              key={key}
              className={cn(homeCardClassName(true), "flex gap-4 p-5 sm:p-6")}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                <Icon className="size-[1.125rem] text-primary" strokeWidth={1.85} aria-hidden />
              </div>
              <p className="text-[0.9375rem] font-semibold leading-relaxed text-foreground">
                {t(`why.${key}`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
