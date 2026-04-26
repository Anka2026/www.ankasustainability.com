import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { homeCardClassName } from "@/lib/home-classes";
import { SectionHeading } from "@/components/section-heading";
import { COMPANY_LINKEDIN_URL } from "@/lib/company";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const infoKeys = ["name", "base", "founder", "focus", "digital", "linkedin"] as const;

export function AboutTrustSection({ t }: Props) {
  const linkedInUrl = COMPANY_LINKEDIN_URL.trim();
  return (
    <section
      className="border-b border-border bg-background py-10 sm:py-11 md:py-12"
      aria-labelledby="about-company-details-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="about-company-details-heading"
          accentRule
          eyebrow={t("companyDetails.eyebrow")}
          title={t("companyDetails.title")}
          description={t("companyDetails.intro")}
          descriptionClassName="max-w-4xl"
        />

        <div className="mt-7 grid gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {infoKeys.map((key) => (
            <div key={key} className={cn(homeCardClassName(true), "p-5 sm:p-6")}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                {t(`companyDetails.${key}.label`)}
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
                {key === "linkedin" && linkedInUrl ? (
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("underline decoration-border underline-offset-4 hover:decoration-accent")}
                  >
                    {t(`companyDetails.${key}.value`)}
                  </a>
                ) : (
                  t(`companyDetails.${key}.value`)
                )}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
