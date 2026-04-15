import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import {
  HERO_EYEBROW_MARKER,
  HERO_EYEBROW_ROW,
  HERO_LEFT_RAIL,
  HERO_PAGE_PADDING,
  HERO_SECTION_SHELL_SOFTWARE,
  HERO_TEXT_STACK,
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

import Image from "next/image";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SoftwareHeroSection({ t }: Props) {
  return (
    <section
      className={HERO_SECTION_SHELL_SOFTWARE}
      aria-labelledby="software-hero-heading"
    >
      <div className={HERO_TOP_HAIRLINE} aria-hidden />
      <Container
        className={[
          HERO_PAGE_PADDING,
          "max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]",
        ].join(" ")}
      >
        <div
          className={[
            HERO_TWO_COLUMN_GRID,
            "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-7 xl:gap-8 2xl:gap-10",
          ].join(" ")}
        >
          <div className={HERO_TWO_COLUMN_COPY}>
            <div className={[HERO_LEFT_RAIL, "pl-5 sm:pl-7"].join(" ")}>
              <div className={HERO_TEXT_STACK}>
                <div className={HERO_EYEBROW_ROW}>
                  <span className={HERO_EYEBROW_MARKER} aria-hidden />
                  <p className={HERO_EYEBROW_TEXT_DARK}>
                    {t("hero.eyebrow")}
                  </p>
                </div>
                <h1
                  id="software-hero-heading"
                  className={DISPLAY_HERO_TITLE_DARK}
                >
                  {t("hero.title")}
                </h1>
                <p className={HERO_LEAD_TEXT_DARK}>
                  {t("hero.description")}
                </p>
                <div className="flex flex-col gap-3.5 pt-1 sm:flex-row sm:items-center sm:gap-4 sm:pt-2">
                  <AppButton
                    asChild
                    className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
                  >
                    <Link href="/contact">{t("hero.primaryCta")}</Link>
                  </AppButton>
                  <AppButton variant="outline" asChild>
                    <Link href="/contact">{t("hero.secondaryCta")}</Link>
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
            <div className="relative mt-4 w-full max-w-[38rem] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_40px_90px_-52px_rgba(15,23,42,0.55),0_0_0_1px_rgba(8,145,178,0.08)] ring-1 ring-inset ring-white/10 sm:mt-5 lg:ml-auto lg:mt-7 xl:mt-8">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(8,145,178,0.16),transparent_58%),radial-gradient(circle_at_82%_85%,rgba(255,255,255,0.08),transparent_60%)]"
                aria-hidden
              />
              <div className="relative aspect-[16/9] w-full lg:aspect-[16/10]">
                <Image
                  src="/images/software-hero-clean.png"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 40rem, 100vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
