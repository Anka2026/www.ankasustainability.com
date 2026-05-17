import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { marketingDarkCtaBandClassName } from "@/lib/home-classes";
import { FINAL_CTA_PAD } from "@/lib/section-layout";
import { FINAL_CTA_DESCRIPTION, FINAL_CTA_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { COMPANY_BOOKING_URL } from "@/lib/company";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ResourcesFinalCtaSection({ t }: Props) {
  return (
    <section
      className={cn(marketingDarkCtaBandClassName(), FINAL_CTA_PAD)}
      aria-labelledby="resources-final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0"
        aria-hidden
      />
      <Container className="relative flex max-w-3xl flex-col items-center justify-center text-center">
        <h2
          id="resources-final-cta-heading"
          className={FINAL_CTA_TITLE}
        >
          {t("finalCta.title")}
        </h2>
        <p className={FINAL_CTA_DESCRIPTION}>
          {t("finalCta.description")}
        </p>
        <div className="mt-5 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-6 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <AppButton variant="inverseSolid" asChild size="lg">
              <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("finalCta.primaryCta")}
              </a>
            </AppButton>
            <AppButton variant="inverseOutline" asChild size="lg">
            <Link href="/services">{t("finalCta.secondaryCta")}</Link>
          </AppButton>
        </div>
      </Container>
    </section>
  );
}
