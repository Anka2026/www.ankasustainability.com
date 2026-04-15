import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import {
  HERO_EYEBROW_MARKER_HOME,
  HERO_EYEBROW_ROW,
  HERO_LEFT_RAIL_HOME,
  HERO_PAGE_PADDING_HOME,
  HERO_SECTION_SHELL_HOME,
  HERO_TOP_HAIRLINE_HOME,
  HERO_TWO_COLUMN_COPY,
  HERO_TWO_COLUMN_GRID,
  HERO_TWO_COLUMN_VISUAL,
} from "@/lib/hero-classes";
import {
  DISPLAY_HERO_TITLE_HOME_DARK,
  HERO_EYEBROW_TEXT_DARK,
  HERO_LEAD_TEXT_DARK,
} from "@/lib/typography-classes";
import type { IntlTranslator } from "@/lib/i18n-types";
import { Link } from "@/i18n/navigation";

import { HeroVisual } from "./hero-visual";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function HeroSection({ t }: Props) {
  return (
    <section
      className={HERO_SECTION_SHELL_HOME}
      aria-labelledby="home-hero-heading"
    >
      <div className={HERO_TOP_HAIRLINE_HOME} aria-hidden />
      <Container className={[HERO_PAGE_PADDING_HOME, "max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]"].join(" ")}>
        <div
          className={[
            HERO_TWO_COLUMN_GRID,
            "lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]",
            "lg:gap-6 xl:gap-8 2xl:gap-10",
          ].join(" ")}
        >
          <div className={[HERO_TWO_COLUMN_COPY, "lg:max-w-[34rem]"].join(" ")}>
            <div className={HERO_LEFT_RAIL_HOME}>
              <div className="space-y-3.5 sm:space-y-4 md:space-y-5">
                <div className={HERO_EYEBROW_ROW}>
                  <span className={HERO_EYEBROW_MARKER_HOME} aria-hidden />
                  <p className={HERO_EYEBROW_TEXT_DARK}>
                    {t("hero.eyebrow")}
                  </p>
                </div>
                <h1
                  id="home-hero-heading"
                  className={DISPLAY_HERO_TITLE_HOME_DARK}
                >
                  {t("hero.title")}
                </h1>
                <p className={HERO_LEAD_TEXT_DARK}>
                  {t("hero.description")}
                </p>
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-3.5 sm:pt-1.5">
                  <AppButton
                    asChild
                    className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
                  >
                    <Link href="/contact">{t("hero.primaryCta")}</Link>
                  </AppButton>
                  <AppButton variant="outline" asChild>
                    <Link href="/services">{t("hero.secondaryCta")}</Link>
                  </AppButton>
                </div>
              </div>
            </div>
          </div>

          <div
            className={[
              HERO_TWO_COLUMN_VISUAL,
              "lg:pl-0 xl:pl-0 2xl:pl-0",
              "lg:justify-stretch",
            ].join(" ")}
          >
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
