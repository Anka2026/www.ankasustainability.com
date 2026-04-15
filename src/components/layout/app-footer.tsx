import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { COMPANY_EMAIL } from "@/lib/company";
import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";
import { Container } from "./container";

const FOOTER_NAV_HREFS = [
  "/",
  "/about",
  "/services",
  "/software",
  "/sectors",
  "/insights",
  "/contact",
] as const;

const FOOTER_LEGAL_HREFS = ["/privacy", "/terms", "/legal-notice"] as const;

const linkClassName = cn(
  "text-sm font-medium text-white/75 transition-colors",
  "hover:text-white",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
);

export async function AppFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tCompany = await getTranslations("company");

  const year = new Date().getFullYear();

  const navLabels = [
    tNav("home"),
    tNav("about"),
    tNav("services"),
    tNav("software"),
    tNav("sectors"),
    tNav("insights"),
    tNav("contact"),
  ] as const;

  const legalLabels = [
    t("legal.privacy"),
    t("legal.terms"),
    t("legal.legalNotice"),
  ] as const;

  return (
    <footer className="border-t border-primary/35 bg-primary text-white shadow-[inset_0_1px_0_0_rgba(8,145,178,0.22)]">
      <Container className="py-8 sm:py-9 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div
              className={cn(
                "shrink-0 rounded-2xl border border-white/12 bg-white/[0.06] p-3",
                "shadow-[0_18px_46px_-34px_rgba(15,23,42,0.35),inset_0_1px_0_0_rgba(255,255,255,0.10)]",
                "ring-1 ring-inset ring-white/10",
              )}
              aria-hidden
            >
              <BrandMark variant="footer" />
            </div>
            <div className="min-w-0 border-l-[3px] border-accent/60 pl-4 sm:pl-5">
              <p className="text-sm font-semibold leading-snug text-white">
                {tCompany("legalName")}
              </p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-white/70">
                <p>{tCompany("addressLine1")}</p>
                <p>{tCompany("addressLine2")}</p>
              </address>
              <p className="mt-2.5">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-sm font-medium text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {tCompany("email")}
                </a>
              </p>
            </div>
          </div>

          <nav
            aria-label={t("navAria")}
            className="lg:border-l lg:border-white/10 lg:pl-8"
          >
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

          <nav
            aria-label={t("legalNavAria")}
            className="lg:border-l lg:border-white/10 lg:pl-8"
          >
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
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="max-w-2xl text-sm leading-relaxed text-white/68">
            {t("note")}
          </p>
          <p className="shrink-0 text-xs leading-relaxed text-white/60 sm:max-w-[min(100%,22rem)] sm:text-right">
            {t("rights", { year })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
