import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import {
  HERO_EYEBROW_MARKER,
  HERO_EYEBROW_ROW,
  HERO_LEFT_RAIL_HOME,
  HERO_SECTION_SHELL_PAGE,
  HERO_SINGLE_COLUMN_SHELL,
  HERO_TOP_HAIRLINE,
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

export function AboutHeroSection({ t }: Props) {
  return (
    <section
      className={HERO_SECTION_SHELL_PAGE}
      aria-labelledby="about-hero-heading"
    >
      <div className={HERO_TOP_HAIRLINE} aria-hidden />
      <Container
        className={[
          "relative z-[1] max-w-6xl py-9 sm:py-10 md:py-12",
          "lg:py-12",
        ].join(" ")}
      >
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-7 xl:gap-9">
          <div className={[HERO_SINGLE_COLUMN_SHELL, "lg:max-w-[38rem]"].join(" ")}>
            <div className={HERO_LEFT_RAIL_HOME}>
              <div className="space-y-3.5 sm:space-y-4 md:space-y-5">
                <div className={HERO_EYEBROW_ROW}>
                  <span className={HERO_EYEBROW_MARKER} aria-hidden />
                  <p className={HERO_EYEBROW_TEXT_DARK}>
                    {t("hero.eyebrow")}
                  </p>
                </div>
                <h1
                  id="about-hero-heading"
                  className={DISPLAY_HERO_TITLE_DARK}
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
          <div className="order-2 w-full min-w-0 justify-center lg:order-none lg:flex lg:items-center">
            <div className="relative h-[240px] w-full max-w-[min(100%,40rem)] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_40px_90px_-52px_rgba(15,23,42,0.55),0_0_0_1px_rgba(8,145,178,0.08)] ring-1 ring-inset ring-white/10 sm:h-[280px] md:h-[320px] lg:h-[420px]">
              <Image
                src="/images/about-command-center.png"
                alt=""
                width={1536}
                height={864}
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="h-full w-full object-cover object-center"
                priority={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
