import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_BG_TINT, SECTION_PAD_HOME } from "@/lib/section-layout";
import { CARD_DESCRIPTION, CARD_TITLE } from "@/lib/typography-classes";
import { serviceRouteSegmentFromId } from "@/lib/services-routing";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

import {
  BadgeCheck,
  ClipboardList,
  Factory,
  Globe2,
  LineChart,
  ShieldCheck,
} from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
  tServicesPage: IntlTranslator;
}>;

const cards = [
  { key: "c1" as const, icon: ClipboardList, id: "reportingEsg" as const },
  { key: "c2" as const, icon: LineChart, id: "carbonClimate" as const },
  { key: "c3" as const, icon: Factory, id: "productCircularity" as const },
  { key: "c4" as const, icon: Globe2, id: "regulatorySupplyChain" as const },
  { key: "c5" as const, icon: ShieldCheck, id: "sustainableFinance" as const },
  { key: "c6" as const, icon: BadgeCheck, id: "certificationTraceability" as const },
];

export function ServicesPreviewSection({ t, tServicesPage }: Props) {
  return (
    <section className={cn("relative", SECTION_BG_TINT, SECTION_PAD_HOME)}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/22 to-transparent"
        aria-hidden
      />
      <Container className="relative max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          accentRule
          eyebrow=""
          title={t("servicesOverview.title")}
          description={t("servicesOverview.intro")}
        />
        <div className="mt-7 grid gap-3.5 sm:mt-8 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ key, icon: Icon, id }) => {
            const href = `/services/${serviceRouteSegmentFromId(id)}`;
            return (
              <Link
                key={key}
                href={href}
                className={cn(
                  "group block",
                  "rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
              >
                <article className={cn("flex h-full flex-col p-5 sm:p-6", homeCardClassName(true))}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)] ring-1 ring-inset ring-primary/[0.05] transition-colors group-hover:border-accent/35 group-hover:bg-accent/[0.06]">
                    <Icon className="size-[1.125rem] text-primary" strokeWidth={1.85} aria-hidden />
                  </div>
                  <h3 className={CARD_TITLE}>{t(`servicesOverview.${key}.title`)}</h3>
                  <p className={CARD_DESCRIPTION}>{t(`servicesOverview.${key}.body`)}</p>
                  <p className="mt-4 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                    {t("servicesOverview.cardCta")}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
