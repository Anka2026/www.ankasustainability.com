import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { serviceRouteSegmentFromId } from "@/lib/services-routing";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { BadgeCheck, Factory, Globe2, LineChart, Network, Rocket } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const cards = [
  { key: "c1" as const, icon: Network, href: `/services/${serviceRouteSegmentFromId("reportingEsg")}` },
  { key: "c2" as const, icon: LineChart, href: `/services/${serviceRouteSegmentFromId("carbonClimate")}` },
  { key: "c3" as const, icon: Factory, href: `/services/${serviceRouteSegmentFromId("productCircularity")}` },
  { key: "c4" as const, icon: Globe2, href: `/services/${serviceRouteSegmentFromId("regulatorySupplyChain")}` },
  { key: "c5" as const, icon: BadgeCheck, href: `/services/${serviceRouteSegmentFromId("certificationTraceability")}` },
  { key: "c6" as const, icon: Rocket, href: "/software" },
] as const;

export function AboutHelpSection({ t }: Props) {
  return (
    <section
      className={cn("relative border-b border-border bg-background", SECTION_PAD_HOME)}
      aria-labelledby="about-scope-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />
      <Container className="relative max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-10 2xl:gap-12">
          {/* Left ~32–35%: intro anchor */}
          <div className="min-w-0 max-w-xl lg:col-span-4 lg:max-w-none lg:pt-0.5 xl:pr-1">
            <div className="border-l-[3px] border-accent pl-5 sm:pl-6">
              <SectionHeading
                titleAs="h2"
                titleId="about-scope-heading"
                accentRule={false}
                eyebrow={t("scope.eyebrow")}
                title={t("scope.title")}
                description={t("scope.intro")}
                descriptionClassName="max-w-none text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65] lg:max-w-[40ch]"
              />
            </div>
          </div>

          {/* Right ~65–68%: capability matrix — 3×2 on lg+ */}
          <div className="min-w-0 lg:col-span-8">
            <div
              className={cn(
                "relative flex h-full min-h-0 overflow-hidden rounded-[1.5rem] border border-border/90 bg-background/90 p-3.5 shadow-[0_30px_72px_-58px_rgba(15,23,42,0.58)] ring-1 ring-inset ring-primary/[0.07] sm:p-4 lg:p-5",
              )}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(8,145,178,0.07),transparent_55%)]"
                aria-hidden
              />
              <div className="relative grid w-full min-w-0 grid-cols-1 content-start gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-3">
                {cards.map(({ key, icon: Icon, href }) => (
                  <Link
                    key={key}
                    href={href}
                    className={cn(
                      "group block",
                      "rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                    )}
                  >
                    <article
                      className={cn(
                        homeCardClassName(true),
                        "flex h-full min-h-0 flex-col p-3.5 sm:p-4",
                        "bg-surface/95",
                        "transition-[border-color,box-shadow] group-hover:border-accent/30 group-hover:shadow-[0_16px_40px_-36px_rgba(15,23,42,0.45)]",
                      )}
                    >
                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/[0.04] ring-1 ring-inset ring-primary/[0.05] transition-colors group-hover:border-accent/30 group-hover:bg-accent/[0.05] sm:h-9 sm:w-9">
                          <Icon className="size-4 text-primary sm:size-[1.05rem]" strokeWidth={1.85} aria-hidden />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[0.85rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[0.9375rem] sm:leading-tight">
                            {t(`scope.${key}.title`)}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:leading-[1.55] md:text-[0.8125rem]">
                            {t(`scope.${key}.body`)}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
