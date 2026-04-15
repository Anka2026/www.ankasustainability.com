import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import type { ServicesCategoryId } from "@/lib/services-categories";
import { SERVICES_CATEGORY_ORDER } from "@/lib/services-categories";

type PageProps = Readonly<{
  params: Promise<{ locale: string; service: string }>;
}>;

function isServicesCategoryId(value: string): value is ServicesCategoryId {
  return (SERVICES_CATEGORY_ORDER as readonly string[]).includes(value);
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, service } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    return {};
  }

  if (!isServicesCategoryId(service)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "servicesPage" });

  const baseTitle = t("meta.title");
  const serviceTitle = t(`categories.${service}.label`);

  return {
    title: `${serviceTitle} · ${baseTitle}`,
    description: t(`categories.${service}.summary`),
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, service } = await params;

  setRequestLocale(locale);

  if (!isServicesCategoryId(service)) {
    notFound();
  }

  const t = await getTranslations("servicesPage");

  const topicsRaw = t(`categories.${service}.topics`);
  const topicLines = topicsRaw
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <main className="border-b border-border bg-background py-14 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t("meta.title")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t(`categories.${service}.label`)}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
            {t(`categories.${service}.description`)}
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t("topicsHeading")}
          </h2>
          <ul className="mt-4 grid gap-2.5 border-l-2 border-accent/40 pl-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-2.5">
            {topicLines.map((line, i) => (
              <li
                key={`${service}-topic-${i}`}
                className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]"
              >
                {line}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}

