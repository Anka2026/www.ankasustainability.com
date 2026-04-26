import { getTranslations } from "next-intl/server";

import { Container } from "@/components/container";
import { BrandMark } from "@/components/layout/brand-mark";
import {
  COMPANY_EMAIL,
  COMPANY_KVK_LINE,
  COMPANY_LEGAL_NAME,
  COMPANY_LINKEDIN_URL,
} from "@/lib/company";

export async function ContactCompanySection() {
  const t = await getTranslations("company");
  const tContact = await getTranslations("contactPage");
  const tFooter = await getTranslations("footer");
  const linkedInUrl = COMPANY_LINKEDIN_URL.trim();
  const showLinkedIn = linkedInUrl.length > 0;

  return (
    <section
      className="border-b border-border bg-background"
      aria-labelledby="contact-company-heading"
    >
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
          <BrandMark variant="footer" className="h-9 w-9 sm:h-10 sm:w-10" />
          <div className="max-w-lg border-l-[3px] border-primary/25 pl-6 sm:pl-8">
            <h2
              id="contact-company-heading"
              className="text-xs font-semibold tracking-[0.2em] text-primary uppercase"
            >
              {tContact("companyDetails.title")}
            </h2>
            <p className="mt-4 text-sm font-semibold text-foreground">
              {COMPANY_LEGAL_NAME}
            </p>
            <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
              <p>{t("addressLine1")}</p>
              <p>{t("addressLine2")}</p>
            </address>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {COMPANY_KVK_LINE}
            </p>
            <p className="mt-3 min-w-0">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline lg:whitespace-nowrap"
              >
                {t("email")}
              </a>
            </p>
            {showLinkedIn ? (
              <p className="mt-2 min-w-0">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline lg:whitespace-nowrap"
                >
                  {tContact("companyDetails.linkedInCta")}
                </a>
              </p>
            ) : null}
            <div className="mt-5 border-t border-border/70 pt-4">
              <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                {tFooter("officesTitle")}
              </p>
              <p className="mt-2 whitespace-pre-line text-sm font-normal leading-relaxed text-foreground">
                {tFooter("officesAddressBlock")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
