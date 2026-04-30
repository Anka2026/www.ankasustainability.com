import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { FINAL_CTA_PAD } from "@/lib/section-layout";
import { FINAL_CTA_DESCRIPTION, FINAL_CTA_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { COMPANY_BOOKING_URL } from "@/lib/company";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function InsightsFinalCtaSection({ t }: Props) {
  return (
    <section
      className={cn("relative bg-primary text-primary-foreground", FINAL_CTA_PAD)}
      aria-labelledby="insights-final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0"
        aria-hidden
      />
      <Container className="relative flex max-w-3xl flex-col items-center justify-center text-center">
        <h2
          id="insights-final-cta-heading"
          className={FINAL_CTA_TITLE}
        >
          {t("finalCta.title")}
        </h2>
        <p className={FINAL_CTA_DESCRIPTION}>
          {t("finalCta.description")}
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4">
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
