import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Link } from "@/i18n/navigation";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  homeCardClassName,
  marketingCardAccentLineClassName,
  marketingIconContainerClassName,
} from "@/lib/home-classes";
import { projectApproachServicesHref, type ProjectApproachCardKey } from "@/lib/home-project-approach-links";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { CARD_DESCRIPTION, CARD_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";
import { ArrowRight, FileSearch, Map, Route } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const cards: ReadonlyArray<{
  key: ProjectApproachCardKey;
  icon: typeof FileSearch;
}> = [
  { key: "c1", icon: FileSearch },
  { key: "c2", icon: Route },
  { key: "c3", icon: Map },
];

export function ProjectApproachesSection({ t }: Props) {
  return (
    <section className={cn("relative bg-surface", SECTION_PAD_HOME)}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/22 to-transparent"
        aria-hidden
      />
      <Container className="relative max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          accentRule
          title={t("projectApproaches.title")}
          description={t("projectApproaches.subtitle")}
        />
        <div className="mt-7 grid gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {cards.map(({ key, icon: Icon }) => {
            const href = projectApproachServicesHref(key);
            return (
              <Link
                key={key}
                href={href}
                aria-label={t(`projectApproaches.${key}.linkAria`)}
                className={cn(
                  "group block cursor-pointer rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
              >
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden p-5 sm:p-6",
                    marketingCardAccentLineClassName(),
                    homeCardClassName(true),
                  )}
                >
                  <div className={cn("mb-4", marketingIconContainerClassName(true))}>
                    <Icon strokeWidth={1.85} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1 space-y-2.5">
                    <h3 className={cn(CARD_TITLE, "text-pretty")}>{t(`projectApproaches.${key}.title`)}</h3>
                    <p className={cn(CARD_DESCRIPTION, "text-pretty")}>{t(`projectApproaches.${key}.body`)}</p>
                  </div>
                  <div className="mt-5 flex items-center border-t border-border/60 pt-4">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.06] text-accent transition-[border-color,background-color,transform] duration-200 group-hover:border-accent/45 group-hover:bg-accent/10 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      <ArrowRight className="size-4" strokeWidth={2} />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
