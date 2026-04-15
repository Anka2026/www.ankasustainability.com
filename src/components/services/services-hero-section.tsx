import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import {
  HERO_EYEBROW_MARKER,
  HERO_EYEBROW_ROW,
  HERO_LEFT_RAIL,
  HERO_PAGE_PADDING,
  HERO_SECTION_SHELL_PAGE,
  HERO_TOP_HAIRLINE,
  HERO_TWO_COLUMN_COPY,
  HERO_TWO_COLUMN_GRID,
  HERO_TWO_COLUMN_VISUAL,
} from "@/lib/hero-classes";
import {
  DISPLAY_HERO_TITLE_DARK,
  HERO_EYEBROW_TEXT_DARK,
  HERO_LEAD_TEXT_DARK,
} from "@/lib/typography-classes";
import type { IntlTranslator } from "@/lib/i18n-types";
import { Link } from "@/i18n/navigation";

import { ServicesHeroVisual } from "./services-hero-visual";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ServicesHeroSection({ t }: Props) {
  return (
    <section
      className={HERO_SECTION_SHELL_PAGE}
      aria-labelledby="services-hero-heading"
    >
      <div className={HERO_TOP_HAIRLINE} aria-hidden />
      <Container className={[HERO_PAGE_PADDING, "max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]"].join(" ")}>
        <div
          className={[
            HERO_TWO_COLUMN_GRID,
            "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
            "lg:gap-6 xl:gap-8 2xl:gap-10",
          ].join(" ")}
        >
          <div className={[HERO_TWO_COLUMN_COPY, "lg:max-w-[34rem]"].join(" ")}>
            <div className={HERO_LEFT_RAIL}>
              <div className="space-y-3.5 sm:space-y-4 md:space-y-5">
                <div className={HERO_EYEBROW_ROW}>
                  <span className={HERO_EYEBROW_MARKER} aria-hidden />
                  <p className={HERO_EYEBROW_TEXT_DARK}>
                    {t("hero.eyebrow")}
                  </p>
                </div>
                <h1
                  id="services-hero-heading"
                  className={DISPLAY_HERO_TITLE_DARK}
                >
                  {t("hero.title")}
                </h1>
                <p className={HERO_LEAD_TEXT_DARK}>
                  {t("hero.description")}
                </p>
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-3.5 sm:pt-1.5">
                  <AppButton asChild>
                    <Link href="/contact">{t("hero.primaryCta")}</Link>
                  </AppButton>
                  <AppButton variant="outline" asChild>
                    <Link href="/services#services-overview">
                      {t("hero.secondaryCta")}
                    </Link>
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
          <div
            className={[
              HERO_TWO_COLUMN_VISUAL,
              "lg:pl-0 xl:pl-0 2xl:pl-0",
              "lg:items-center lg:justify-end",
            ].join(" ")}
          >
            <ServicesHeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
