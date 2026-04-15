import { getTranslations, setRequestLocale } from "next-intl/server";

import { Container } from "@/components/container";
import { BrandMark } from "@/components/layout/brand-mark";
import { LegalHero } from "@/components/legal";
import { COMPANY_EMAIL } from "@/lib/company";
import { SECTION_PAD_STANDARD, SECTION_PAD_STRIP } from "@/lib/section-layout";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type PageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "legalNoticePage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function LegalNoticePage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("legalNoticePage");
  const tCompany = await getTranslations("company");

  return (
    <>
      <LegalHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        titleId="legal-notice-heading"
      />
      <section className={cn("bg-background", SECTION_PAD_STRIP)}>
        <Container>
          <p className="max-w-3xl text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.7]">
            {t("intro")}
          </p>
        </Container>
      </section>
      <section className={cn("bg-surface", SECTION_PAD_STANDARD)}>
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
            <BrandMark variant="footer" className="h-9 w-9 sm:h-10 sm:w-10" />
            <div className="max-w-3xl border-l-[3px] border-primary/25 pl-6 sm:pl-8">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                {t("companyBlock.title")}
              </h2>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {tCompany("legalName")}
              </p>
              <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
                <p>{tCompany("addressLine1")}</p>
                <p>{tCompany("addressLine2")}</p>
              </address>
              <p className="mt-4">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline"
                >
                  {tCompany("email")}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-t border-border bg-background py-16 sm:py-20">
        <Container>
          <p className="max-w-3xl text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.7]">
            {t("statement")}
          </p>
        </Container>
      </section>
    </>
  );
}

