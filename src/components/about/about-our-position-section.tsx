import { Container } from "@/components/container";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { Euro, MapPin, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const cards = [
  { key: "c1" as const, icon: Euro },
  { key: "c2" as const, icon: MapPin },
  { key: "c3" as const, icon: Wrench },
] as const;

export function AboutOurPositionSection({ t }: Props) {
  return (
    <section
      className={cn(
        "relative border-b border-border bg-[var(--section-tint)]",
        SECTION_PAD_HOME,
      )}
      aria-labelledby="about-position-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        aria-hidden
      />
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-10 xl:gap-12 2xl:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              titleAs="h2"
              titleId="about-position-heading"
              accentRule
              eyebrow={t("positioning.eyebrow")}
              title={t("positioning.title")}
              description={t("positioning.text")}
              descriptionClassName="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65] lg:max-w-none"
            />
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div
              className={cn(
                "relative h-full overflow-hidden rounded-[1.75rem] border border-border/90 bg-background/80 p-1.5",
                "shadow-[0_28px_80px_-64px_rgba(15,23,42,0.6)] ring-1 ring-inset ring-primary/[0.06]",
                "sm:p-2",
              )}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_90%_0%,rgba(8,145,178,0.08),transparent_60%)]"
                aria-hidden
              />
              <div className="relative flex min-h-0 flex-col gap-2.5 sm:gap-3">
                {cards.map(({ key, icon: Icon }) => (
                  <article
                    key={key}
                    className={cn(
                      homeCardClassName(true),
                      "flex gap-4 p-4 sm:p-5",
                      "border-border/80 bg-surface/95",
                    )}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/12 bg-primary/[0.04] text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]">
                      <Icon className="size-[1.125rem]" strokeWidth={1.85} aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                        {t(`positioning.${key}.title`)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:text-[0.9375rem] sm:leading-[1.58]">
                        {t(`positioning.${key}.body`)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
