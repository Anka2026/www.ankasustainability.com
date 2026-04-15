import { getTranslations } from "next-intl/server";

import { Container } from "@/components/container";
import { BrandMark } from "@/components/layout/brand-mark";
import { COMPANY_EMAIL } from "@/lib/company";

export async function ContactCompanySection() {
  const t = await getTranslations("company");
  const tContact = await getTranslations("contactPage");

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
              {t("legalName")}
            </p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
              <p>{t("addressLine1")}</p>
              <p>{t("addressLine2")}</p>
            </address>
            <p className="mt-4">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline"
              >
                {t("email")}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
