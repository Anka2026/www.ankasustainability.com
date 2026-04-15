import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import {
  type SoftwarePortfolioSlug,
  type SoftwarePortfolioStatus,
  parseSoftwarePortfolioStatus,
} from "@/lib/software-portfolio";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

type TranslatorLike = IntlTranslator & ((key: string) => string);

type Product = Readonly<{
  slug: SoftwarePortfolioSlug;
  status: SoftwarePortfolioStatus;
  statusLabel: string;
  category: string;
  kicker: string;
  title: string;
  description: string;
  bullets: readonly [string, string, string];
  ctaLabel: string;
}>;

type Props = Readonly<{
  t: IntlTranslator;
}>;

function readStringArray(t: TranslatorLike, key: string): string[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw.filter((v): v is string => typeof v === "string");
}

function readTuple3(t: TranslatorLike, key: string): readonly [string, string, string] {
  const arr = readStringArray(t, key);
  return [arr[0] ?? "", arr[1] ?? "", arr[2] ?? ""] as const;
}

function getProductCard(t: TranslatorLike, slug: SoftwarePortfolioSlug): Product {
  const base = `portfolio.products.${slug}`;
  const statusRaw = t(`${base}.status`);
  const status = parseSoftwarePortfolioStatus(statusRaw);
  if (!status) {
    throw new Error(`Invalid software portfolio status for ${slug}: ${statusRaw}`);
  }

  const statusLabel = t(`portfolio.statusLabels.${status}`);

  let cardDescription: string;
  try {
    cardDescription = t(`${base}.cardDescription`);
  } catch {
    // Back-compat for older message bundles
    cardDescription = t(`${base}.value`);
  }

  return {
    slug,
    status,
    statusLabel,
    category: t(`${base}.category`),
    kicker: t(`${base}.kicker`),
    title: t(`${base}.title`),
    description: cardDescription,
    bullets: readTuple3(t, `${base}.outputs`),
    ctaLabel: t("portfolio.ctas.viewProduct"),
  };
}

function statusPillClass(status: SoftwarePortfolioStatus) {
  switch (status) {
    case "core":
      return "border-accent/28 bg-accent/[0.10] text-primary";
    case "in_development":
      return "border-primary/20 bg-primary/[0.06] text-primary";
    case "coming_soon":
    default:
      return "border-border/90 bg-background/85 text-muted-foreground";
  }
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className={cn("flex flex-col", homeCardClassName(true))}>
      <div className="flex flex-1 flex-col bg-[var(--section-tint)] p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-2">
            <span className="inline-flex rounded-full border border-border/80 bg-background/80 px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-muted-foreground">
              {product.category}
            </span>
            <h3 className="text-[1.075rem] font-semibold leading-snug tracking-tight text-foreground">
              {product.title}
            </h3>
          </div>
          <span
            className={cn(
              "shrink-0 inline-flex rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide",
              statusPillClass(product.status),
            )}
          >
            {product.statusLabel}
          </span>
        </div>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {product.kicker}
        </p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
          {product.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2.5">
          {product.bullets.map((line) => (
            <li
              key={line}
              className="rounded-full border border-border/75 bg-surface px-3 py-1.5 text-[0.8125rem] font-semibold tracking-tight text-foreground/90"
            >
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between">
          <AppButton variant="outline" size="default" className="w-full" asChild>
            <Link href={`/software/${product.slug}`}>
              <span className="inline-flex w-full items-center justify-center gap-2">
                {product.ctaLabel}
                <ChevronRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          </AppButton>
        </div>
      </div>
    </article>
  );
}

export function SoftwarePortfolio({ t }: Props) {
  const tt = t as TranslatorLike;

  const orderedSlugs: readonly SoftwarePortfolioSlug[] = [
    "agri-climate-platform",
    "cbam-calculation-engine",
    "cbam-financial-impact-engine",
    "packaging-compliance-cost-os",
    "digital-product-passport-platform",
    "sustainable-supply-chain-platform",
    "eudr-due-diligence-platform",
  ];

  const products = orderedSlugs.map((slug) => getProductCard(tt, slug));

  return (
    <section className="border-b border-border bg-surface py-10 sm:py-12">
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          accentRule
          eyebrow=""
          title={tt("portfolio.title")}
          description={tt("portfolio.description")}
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4.5 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
