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
import { getTranslations } from "next-intl/server";
import { BrandMark } from "@/components/layout/brand-mark";
import { COMPANY_EMAIL } from "@/lib/company";
import { Link } from "@/i18n/navigation";
import { homeCardClassName } from "@/lib/home-classes";
import { cn } from "@/lib/utils";

import { ContactHeroVisual } from "@/components/contact/contact-hero-visual";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ContactHeroSection({ t }: Props) {
  // This needs company identity, so keep it server-rendered.
  return (
    <section
      className={HERO_SECTION_SHELL_PAGE}
      aria-labelledby="contact-hero-heading"
    >
      <div className={HERO_TOP_HAIRLINE} aria-hidden />
      <Container
        className={[
          HERO_PAGE_PADDING,
          "max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]",
        ].join(" ")}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-stretch lg:gap-12">
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
                  id="contact-hero-heading"
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
                    <Link href="#contact-form">{t("hero.primaryCta")}</Link>
                  </AppButton>
                  <AppButton variant="outline" asChild>
                    <Link href="#contact-form">{t("hero.secondaryCta")}</Link>
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full min-w-0 justify-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4">
            <ContactHeroVisual />
            <ContactCompanyHeroCard t={t} />
          </div>
        </div>
      </Container>
    </section>
  );
}

async function ContactCompanyHeroCard({ t }: { t: IntlTranslator }) {
  const tc = await getTranslations("company");

  return (
    <div className="w-full max-w-[34rem]">
      <div
        className={cn(
          homeCardClassName(false),
          "border border-white/10 bg-white/[0.06] shadow-[0_26px_70px_-48px_rgba(15,23,42,0.65)] ring-1 ring-inset ring-white/10",
          "rounded-2xl p-6 sm:p-7",
        )}
      >
        <div className="flex items-start gap-4">
          <BrandMark variant="footer" className="h-14 w-14 sm:h-16 sm:w-16" />
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              {t("companyDetails.title")}
            </p>
            <p className="mt-2 text-[1.05rem] font-semibold leading-snug tracking-tight text-white sm:text-[1.125rem]">
              {tc("legalName")}
            </p>
            <address className="mt-3 not-italic text-[0.95rem] leading-relaxed text-white/72">
              <p>{tc("addressLine1")}</p>
              <p>{tc("addressLine2")}</p>
            </address>
            <p className="mt-4">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-[0.95rem] font-semibold text-white underline underline-offset-4 decoration-white/30 transition-colors hover:decoration-white/60"
              >
                {tc("email")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
