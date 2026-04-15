import { getTranslations, setRequestLocale } from "next-intl/server";

import { Container } from "@/components/container";
import { LegalHero, LegalProseSection } from "@/components/legal";
import { SECTION_PAD_STRIP } from "@/lib/section-layout";
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

  const t = await getTranslations({ locale, namespace: "termsPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("termsPage");

  return (
    <>
      <LegalHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        titleId="terms-heading"
      />
      <section
        className={cn("bg-background", SECTION_PAD_STRIP)}
        aria-labelledby="terms-intro"
      >
        <Container>
          <p
            id="terms-intro"
            className="max-w-3xl text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.7]"
          >
            {t("intro")}
          </p>
        </Container>
      </section>
      <LegalProseSection id="website-use" title={t("sections.websiteUse.title")}>
        <p>{t("sections.websiteUse.body")}</p>
      </LegalProseSection>
      <LegalProseSection
        id="intellectual-property"
        title={t("sections.intellectualProperty.title")}
      >
        <p>{t("sections.intellectualProperty.body")}</p>
      </LegalProseSection>
      <LegalProseSection id="limitation" title={t("sections.limitation.title")}>
        <p>{t("sections.limitation.body")}</p>
      </LegalProseSection>
      <LegalProseSection id="contact" title={t("sections.contact.title")}>
        <p>{t("sections.contact.body")}</p>
      </LegalProseSection>
    </>
  );
}

