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

export function FinalCtaSection({ t }: Props) {
  return (
    <section
      id="contact"
      className={cn(
        "relative bg-gradient-to-b from-primary via-primary to-primary",
        "text-primary-foreground",
        FINAL_CTA_PAD,
      )}
      aria-labelledby="home-final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0"
        aria-hidden
      />
      <Container className="relative max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="rounded-[2.25rem] border border-primary-foreground/10 bg-white/[0.06] px-6 py-10 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.85)] ring-1 ring-inset ring-white/10 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="home-final-cta-heading" className={FINAL_CTA_TITLE}>
              {t("finalCta.title")}
            </h2>
            <p className={cn(FINAL_CTA_DESCRIPTION, "text-primary-foreground/80")}>
              {t("finalCta.description")}
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
              <AppButton variant="inverseSolid" asChild size="lg">
                <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("finalCta.primaryCta")}
                </a>
              </AppButton>
              <AppButton
                variant="inverseOutline"
                asChild
                size="lg"
              >
                <Link href="/contact">{t("finalCta.secondaryCta")}</Link>
              </AppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
