import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { INSIGHTS_FEATURED_KEYS, type InsightsFeaturedKey } from "@/lib/insights-content-keys";

type PageProps = Readonly<{
  params: Promise<{ locale: string; slug: string }>;
}>;

function isFeaturedKey(value: string): value is InsightsFeaturedKey {
  return (INSIGHTS_FEATURED_KEYS as readonly string[]).includes(value);
}

function readParagraphs(t: (key: string) => string, base: string): string[] {
  const raw = t(base);
  return raw
    .split(/\r?\n\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function renderBodyBlocks(paragraphs: string[]) {
  return paragraphs.map((block, idx) => {
    const lines = block.split(/\r?\n/).map((s) => s.trim());
    const bulletLines = lines.filter((l) => l.startsWith("- "));

    if (bulletLines.length >= 2 && bulletLines.length === lines.length) {
      return (
        <ul key={`bullets-${idx}`} className="mt-6 space-y-2 border-l-2 border-accent/30 pl-4">
          {bulletLines.map((l) => (
            <li key={l} className="text-[0.9375rem] leading-relaxed text-foreground sm:text-base sm:leading-[1.6]">
              {l.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p
        key={`p-${idx}`}
        className={cn(
          idx === 0 ? "mt-6" : "mt-5",
          "text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.65]",
        )}
      >
        {block}
      </p>
    );
  });
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as AppLocale)) return {};
  if (!isFeaturedKey(slug)) return {};

  const t = await getTranslations({ locale, namespace: "insightsPage" });
  const base = `featured.items.${slug}`;

  return {
    title: `${t(`${base}.title`)} | ${t("meta.title")}`,
    description: t(`${base}.description`),
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as AppLocale)) notFound();
  setRequestLocale(locale);

  if (!isFeaturedKey(slug)) notFound();

  const t = await getTranslations({ locale, namespace: "insightsPage" });
  const base = `featured.items.${slug}`;

  const paragraphs = readParagraphs(t, `${base}.body`);

  return (
    <>
      <section className="border-b border-border bg-surface py-12 sm:py-14">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent">
              {t(`${base}.category`)}
            </p>
            <Link
              href="/resources"
              className="text-sm font-medium text-accent transition-colors hover:text-primary"
            >
              {t("detail.backToResources")}
            </Link>
          </div>

          <div className="mt-5 max-w-4xl">
            <h1 className="text-balance text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t(`${base}.title`)}
            </h1>
            <p className="mt-4 text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]">
              {t(`${base}.description`)}
            </p>
          </div>
        </Container>
      </section>

      <main className="border-b border-border bg-background py-12 sm:py-14">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <article className="max-w-4xl">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {t("detail.heading")}
            </h2>
            {renderBodyBlocks(paragraphs)}
          </article>
        </Container>
      </main>
    </>
  );
}

