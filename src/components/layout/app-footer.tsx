import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import {
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_KVK_LINE,
  COMPANY_LINKEDIN_LABEL,
  COMPANY_LINKEDIN_URL,
} from "@/lib/company";
import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";
import { Container } from "./container";

const FOOTER_NAV_HREFS = [
  "/",
  "/about",
  "/services",
  "/software",
  "/sectors",
  "/partners",
  "/resources",
  "/contact",
] as const;

const FOOTER_LEGAL_HREFS = ["/privacy", "/terms", "/legal-notice"] as const;

const linkClassName = cn(
  "text-sm font-medium text-white/75 transition-colors",
  "hover:text-white",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
);

const columnDivider =
  "min-w-0 lg:border-l lg:border-white/10 lg:pl-4 xl:pl-5";

type FooterOfficeBlock = Readonly<{
  title: string;
  lines: readonly string[];
}>;

function isFooterOfficeBlocks(value: unknown): value is FooterOfficeBlock[] {
  if (!Array.isArray(value)) return false;
  return value.every(
    (item) =>
      item !== null &&
      typeof item === "object" &&
      "title" in item &&
      typeof (item as FooterOfficeBlock).title === "string" &&
      "lines" in item &&
      Array.isArray((item as FooterOfficeBlock).lines) &&
      (item as FooterOfficeBlock).lines.every((l) => typeof l === "string"),
  );
}

const officeBodyClassName = cn(
  "text-[0.8125rem] font-normal leading-[1.55] text-white/78 sm:text-sm sm:leading-[1.55]",
);

export async function AppFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tCompany = await getTranslations("company");

  const year = new Date().getFullYear();
  const linkedInUrl = COMPANY_LINKEDIN_URL.trim();
  const showLinkedIn = linkedInUrl.length > 0;

  const navLabels = [
    tNav("home"),
    tNav("about"),
    tNav("services"),
    tNav("software"),
    tNav("sectors"),
    tNav("partners"),
    tNav("insights"),
    tNav("contact"),
  ] as const;

  const legalLabels = [
    t("legal.privacy"),
    t("legal.terms"),
    t("legal.legalNotice"),
  ] as const;

  const officeBlocksRaw = t.raw("officeBlocks");
  const officeBlocks = isFooterOfficeBlocks(officeBlocksRaw)
    ? officeBlocksRaw
    : null;

  return (
    <footer className="border-t border-primary/35 bg-primary text-white shadow-[inset_0_1px_0_0_rgba(8,145,178,0.22)]">
      <Container className="max-w-7xl px-4 py-8 sm:px-5 sm:py-9 md:py-10 lg:px-7 xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="lg:translate-x-12">
        <div
          className={cn(
            "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-7",
            "lg:grid-cols-[minmax(0,440px)_minmax(0,170px)_minmax(0,190px)_minmax(0,300px)] lg:items-start",
            "lg:gap-x-12 lg:gap-y-6",
          )}
        >
          {/* 1 — Brand + company (Netherlands B.V.): logo + firm info, gap-8 (~32px) */}
          <div className="min-w-0">
            <div className="flex flex-col items-start gap-8 sm:flex-row">
              <span
                className="inline-flex shrink-0 self-start overflow-hidden rounded-lg w-24 h-24 lg:h-[120px] lg:w-[120px]"
                aria-hidden
              >
                <BrandMark
                  variant="footer"
                  className="h-full w-full max-h-full max-w-full object-contain object-left"
                />
              </span>
              <div className="min-w-0 flex-1 space-y-0">
                <p className="text-sm font-semibold leading-snug text-white">
                  {COMPANY_LEGAL_NAME}
                </p>
                <address className="mt-3.5 not-italic text-sm leading-[1.55] text-white/72">
                  <p>{tCompany("addressLine1")}</p>
                  <p>{tCompany("addressLine2")}</p>
                </address>
                <p className="mt-3 text-sm leading-relaxed text-white/72">
                  {COMPANY_KVK_LINE}
                </p>
                <p className="mt-3 min-w-0">
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className={cn(
                      "inline-block max-w-full font-medium text-white underline-offset-4 transition-colors",
                      "text-[0.8125rem] leading-snug sm:text-sm",
                      "hover:text-accent hover:underline",
                      "break-words [overflow-wrap:break-word] lg:whitespace-nowrap lg:[overflow-wrap:normal]",
                    )}
                  >
                    {tCompany("email")}
                  </a>
                </p>
                {showLinkedIn ? (
                  <p className="mt-2.5 min-w-0">
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-block max-w-full text-sm font-medium text-white underline-offset-4 transition-colors",
                        "hover:text-accent hover:underline",
                        "break-words lg:whitespace-nowrap",
                      )}
                    >
                      {COMPANY_LINKEDIN_LABEL}
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          {/* 2 — Navigation */}
          <nav aria-label={t("navAria")} className={columnDivider}>
            <ul className="flex flex-col gap-2">
              {FOOTER_NAV_HREFS.map((href, i) => (
                <li key={href}>
                  <Link href={href} className={linkClassName}>
                    {navLabels[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3 — Legal */}
          <nav aria-label={t("legalNavAria")} className={columnDivider}>
            <ul className="flex flex-col gap-2">
              {FOOTER_LEGAL_HREFS.map((href, i) => (
                <li key={href}>
                  <Link href={href} className={linkClassName}>
                    {legalLabels[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 4 — Offices (Türkiye) */}
          <div className={cn(columnDivider)}>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/72 uppercase">
              {t("officesTitle")}
            </p>
            {officeBlocks ? (
              <div className="mt-3 space-y-5">
                {officeBlocks.map((block, blockIndex) => (
                  <div key={blockIndex} className="space-y-1">
                    <p className="text-sm font-semibold leading-snug text-white/88">
                      {block.title}
                    </p>
                    {block.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className={officeBodyClassName}>
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p className={cn("mt-3 whitespace-pre-line", officeBodyClassName)}>
                {t("officesAddressBlock")}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="max-w-3xl text-sm leading-relaxed text-white/68">
            {t("note")}
          </p>
          <p className="shrink-0 text-xs leading-relaxed text-white/60 sm:max-w-[min(100%,22rem)] sm:text-right">
            {t("rights", { year })}
          </p>
        </div>
        </div>
      </Container>
    </footer>
  );
}
