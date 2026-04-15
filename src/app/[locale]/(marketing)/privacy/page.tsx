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

  const t = await getTranslations({ locale, namespace: "privacyPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("privacyPage");

  return (
    <>
      <LegalHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        titleId="privacy-heading"
      />
      <section
        className={cn("bg-background", SECTION_PAD_STRIP)}
        aria-labelledby="privacy-intro"
      >
        <Container>
          <p
            id="privacy-intro"
            className="max-w-3xl text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.7]"
          >
            {t("intro")}
          </p>
        </Container>
      </section>
      <LegalProseSection id="collect" title={t("sections.collect.title")}>
        <p>{t("sections.collect.body")}</p>
      </LegalProseSection>
      <LegalProseSection id="use" title={t("sections.use.title")}>
        <p>{t("sections.use.body")}</p>
      </LegalProseSection>
      <LegalProseSection id="contact" title={t("sections.contact.title")}>
        <p>{t("sections.contact.body")}</p>
      </LegalProseSection>
      <LegalProseSection id="updates" title={t("sections.updates.title")}>
        <p>{t("sections.updates.body")}</p>
      </LegalProseSection>
    </>
  );
}

