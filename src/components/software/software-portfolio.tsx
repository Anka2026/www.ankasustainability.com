import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { SOFTWARE_PORTFOLIO_ORDER } from "@/lib/software-portfolio";
import { cn } from "@/lib/utils";

import {
  SoftwarePortfolioClient,
  type SoftwareModalLabels,
  type SoftwarePortfolioProductDto,
} from "@/components/software/software-portfolio-client";

type TranslatorLike = IntlTranslator & ((key: string, values?: Record<string, string>) => string);

type Props = Readonly<{
  t: IntlTranslator;
}>;

const DEMO_MAIL_TO = "info@ankasustainability.com";

function buildDemoMailHref(tt: TranslatorLike, productTitle: string): string {
  const subject = tt("portfolio.demoMailSubject", { product: productTitle });
  const body = tt("portfolio.demoMailBody", { product: productTitle });
  const q = (s: string) => encodeURIComponent(s);
  return `mailto:${DEMO_MAIL_TO}?subject=${q(subject)}&body=${q(body)}`;
}

function readStringArray(t: TranslatorLike, key: string): string[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((v): v is string => typeof v === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

function optionalString(t: TranslatorLike, key: string): string | undefined {
  try {
    const v = t(key).trim();
    return v || undefined;
  } catch {
    return undefined;
  }
}

const AGRI_SCREENSHOT = "/software/agri-climate-platform-overview.png";
const CBAM_CONSOLE_SCREENSHOT = "/images/software/cbam-compliance-console-dashboard.png";

export function SoftwarePortfolio({ t }: Props) {
  const tt = t as TranslatorLike;

  const products: SoftwarePortfolioProductDto[] = SOFTWARE_PORTFOLIO_ORDER.map((slug) => {
    const base = `portfolio.products.${slug}`;
    const bullets = readStringArray(tt, `${base}.bullets`).slice(0, 4);
    const screenshotSrc =
      slug === "agri-climate-platform"
        ? AGRI_SCREENSHOT
        : slug === "cbam-compliance-console"
          ? CBAM_CONSOLE_SCREENSHOT
          : null;
    let screenshotAlt = "";
    try {
      screenshotAlt = tt(`${base}.screenshotAlt`).trim();
    } catch {
      screenshotAlt = "";
    }
    if (slug === "agri-climate-platform" && !screenshotAlt) {
      screenshotAlt = tt(`${base}.title`);
    }
    if (!screenshotAlt && screenshotSrc) {
      screenshotAlt = tt(`${base}.title`);
    }

    const solves = readStringArray(tt, `${base}.solves`);
    const modalWhatFor =
      optionalString(tt, `${base}.modalWhatFor`)?.trim() ||
      solves[0] ||
      tt(`${base}.summary`);
    const modalTeamValue =
      optionalString(tt, `${base}.modalTeamValue`)?.trim() ||
      (solves.length > 1 ? solves.slice(1, 3).filter(Boolean).join(" ") : "");
    const modalTagline = optionalString(tt, `${base}.modalTagline`)?.trim() || "";

    return {
      slug,
      pill: tt(`${base}.pill`),
      title: tt(`${base}.title`),
      summary: tt(`${base}.summary`),
      bullets,
      screenshotSrc,
      screenshotAlt: screenshotAlt || tt(`${base}.title`),
      demoMailHref: buildDemoMailHref(tt, tt(`${base}.title`)),
      modalTagline,
      modalWhatFor,
      modalTeamValue,
    };
  });

  const modalLabels: SoftwareModalLabels = {
    valueProposition: tt("portfolio.modal.labelValueProposition"),
    whatFor: tt("portfolio.modal.labelWhatFor"),
    teamValue: tt("portfolio.modal.labelTeamValue"),
    coreCapabilities: tt("portfolio.modal.labelCoreCapabilities"),
  };

  return (
    <section
      id="software-solution-areas"
      className={cn("scroll-mt-24 border-b border-border bg-[var(--section-tint)] py-10 sm:py-12")}
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          accentRule
          title={tt("portfolio.title")}
          description={tt("portfolio.description")}
          descriptionClassName="max-w-4xl text-pretty sm:text-base sm:leading-[1.62]"
        />

        <SoftwarePortfolioClient
          products={products}
          viewSolutionCta={tt("portfolio.actions.viewSolution")}
          requestDemoCta={tt("portfolio.actions.requestDemo")}
          modalClose={tt("portfolio.modalClose")}
          modalLabels={modalLabels}
          defaultModalTagline={tt("portfolio.defaultModalTagline")}
          contactCta={tt("finalCta.secondaryCta")}
        />
      </Container>
    </section>
  );
}
