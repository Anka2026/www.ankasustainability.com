import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { marketingDarkCtaBandClassName, marketingDarkCtaPanelClassName } from "@/lib/home-classes";
import { FINAL_CTA_PAD } from "@/lib/section-layout";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { COMPANY_BOOKING_URL } from "@/lib/company";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SectorsFinalCtaSection({ t }: Props) {
  return (
    <section
      className={cn(marketingDarkCtaBandClassName(), FINAL_CTA_PAD)}
      aria-labelledby="sectors-final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(8,145,178,0.12),transparent_55%)]"
        aria-hidden
      />

      <Container className="relative max-w-4xl">
        <div className={cn(marketingDarkCtaPanelClassName(), "text-center")}>
          <h2
            id="sectors-final-cta-heading"
            className="text-balance text-pretty text-2xl font-semibold tracking-tight text-primary-foreground sm:text-3xl"
          >
            {t("finalCta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-[min(100%,36rem)] text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg sm:leading-[1.65]">
            {t("finalCta.description")}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row sm:gap-4">
            <AppButton variant="inverseSolid" asChild size="lg">
              <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("finalCta.primaryCta")}
              </a>
            </AppButton>
            <AppButton variant="inverseOutline" asChild size="lg">
              <Link href="/services">{t("finalCta.secondaryCta")}</Link>
            </AppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
