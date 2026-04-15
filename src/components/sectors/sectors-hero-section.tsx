import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import {
  HERO_EYEBROW_MARKER,
  HERO_EYEBROW_ROW,
  HERO_LEFT_RAIL,
  HERO_PAGE_PADDING,
  HERO_SECTION_SHELL_PAGE,
  HERO_SINGLE_COLUMN_SHELL,
  HERO_TEXT_STACK,
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

export function SectorsHeroSection({ t }: Props) {
  return (
    <section
      className={HERO_SECTION_SHELL_PAGE}
      aria-labelledby="sectors-hero-heading"
    >
      <div className={HERO_TOP_HAIRLINE} aria-hidden />
      <Container
        className={[
          HERO_PAGE_PADDING,
          "max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]",
        ].join(" ")}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-12">
          <div className={HERO_SINGLE_COLUMN_SHELL}>
            <div className={[HERO_LEFT_RAIL, "pl-5 sm:pl-7"].join(" ")}>
              <div className={HERO_TEXT_STACK}>
                <div className={HERO_EYEBROW_ROW}>
                  <span className={HERO_EYEBROW_MARKER} aria-hidden />
                  <p className={HERO_EYEBROW_TEXT_DARK}>
                    {t("hero.eyebrow")}
                  </p>
                </div>
                <h1
                  id="sectors-hero-heading"
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
                    <Link href="/services">{t("hero.secondaryCta")}</Link>
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full justify-self-end lg:block">
            <div className="relative mt-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_40px_90px_-52px_rgba(15,23,42,0.55),0_0_0_1px_rgba(8,145,178,0.08)] ring-1 ring-inset ring-white/10 sm:mt-5 lg:mt-7 lg:max-w-none">
              <Image
                src="/images/sectors-hero.png"
                alt=""
                width={1536}
                height={864}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
