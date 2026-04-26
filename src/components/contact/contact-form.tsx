"use client";

import { useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";

import { AppButton } from "@/components/ui/app-button";
import { CONTACT_INTEREST_OPTION_KEYS } from "@/lib/contact-content";
import { COMPANY_EMAIL } from "@/lib/company";
import { cn } from "@/lib/utils";

const fieldClass = cn(
  "h-11 w-full rounded-xl border border-border/85 bg-white px-3.5 text-sm text-[#1c2735] shadow-sm",
  "placeholder:text-muted-foreground/75",
  "transition-[border-color,box-shadow] focus:border-accent/45 focus:outline-none focus:ring-2 focus:ring-accent/12",
);

const textareaClass = cn(
  "min-h-[9.5rem] w-full resize-y rounded-xl border border-border/85 bg-white px-3.5 py-3 text-sm text-[#1c2735] shadow-sm",
  "placeholder:text-muted-foreground/75",
  "transition-[border-color,box-shadow] focus:border-accent/45 focus:outline-none focus:ring-2 focus:ring-accent/12",
);

function buildMailtoBody(
  t: ReturnType<typeof useTranslations>,
  values: {
    name: string;
    company: string;
    email: string;
    country: string;
    interestKey: string;
    interestLabel: string;
    message: string;
  },
) {
  const lines = [
    t("emailBodyIntro"),
    "",
    `${t("fieldName")}: ${values.name}`,
    `${t("fieldCompany")}: ${values.company}`,
    `${t("fieldEmail")}: ${values.email}`,
    `${t("fieldCountry")}: ${values.country}`,
    `${t("fieldInterest")}: ${values.interestLabel} (${values.interestKey})`,
    "",
    `${t("fieldMessage")}:`,
    values.message,
  ];
  return encodeURIComponent(lines.join("\n"));
}

export function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  const defaultMailto = useMemo(() => {
    const subject = encodeURIComponent(t("mailtoSubject"));
    return `mailto:${COMPANY_EMAIL}?subject=${subject}`;
  }, [t]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const fd = new FormData(form);
      const name = String(fd.get("name") ?? "").trim();
      const company = String(fd.get("company") ?? "").trim();
      const email = String(fd.get("email") ?? "").trim();
      const country = String(fd.get("country") ?? "").trim();
      const interestKey = String(fd.get("topic") ?? "").trim();
      const message = String(fd.get("message") ?? "").trim();

      const interestLabel =
        CONTACT_INTEREST_OPTION_KEYS.includes(
          interestKey as (typeof CONTACT_INTEREST_OPTION_KEYS)[number],
        ) && interestKey
          ? t(interestKey as (typeof CONTACT_INTEREST_OPTION_KEYS)[number])
          : interestKey;

      const body = buildMailtoBody(t, {
        name,
        company,
        email,
        country,
        interestKey,
        interestLabel,
        message,
      });
      const subject = encodeURIComponent(t("mailtoSubject"));
      const href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
      setMailtoHref(href);
      setSubmitted(true);
    },
    [t],
  );

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-accent/25 bg-white/95 p-8 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.2)] ring-1 ring-inset ring-primary/[0.04] sm:p-10"
        role="status"
      >
        <p className="text-center text-[0.9375rem] font-medium leading-relaxed text-[#334155] sm:text-base">
          {t("success")}
        </p>
        <div className="mt-6 flex justify-center">
          <AppButton asChild size="lg" className="h-11 min-w-[12rem]">
            <a href={mailtoHref ?? defaultMailto}>{t("openMailCta")}</a>
          </AppButton>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-border/75 bg-white/95 p-6 shadow-[0_22px_56px_-40px_rgba(15,23,42,0.22)] ring-1 ring-inset ring-primary/[0.04] sm:p-8 lg:p-9"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="contact-name" className="text-sm font-semibold text-[#334155]">
            {t("fieldName")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t("placeholderName")}
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-company" className="text-sm font-semibold text-[#334155]">
            {t("fieldCompany")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder={t("placeholderCompany")}
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-semibold text-[#334155]">
            {t("fieldEmail")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder={t("placeholderEmail")}
            className={fieldClass}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="contact-country" className="text-sm font-semibold text-[#334155]">
            {t("fieldCountry")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-country"
            name="country"
            type="text"
            required
            autoComplete="country-name"
            placeholder={t("placeholderCountry")}
            className={cn(fieldClass, "max-w-md")}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="contact-topic" className="text-sm font-semibold text-[#334155]">
            {t("fieldInterest")} <span className="text-accent">*</span>
          </label>
          <select
            id="contact-topic"
            name="topic"
            required
            defaultValue=""
            className={cn(
              fieldClass,
              "appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat py-0",
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="" disabled>
              {t("placeholderInterest")}
            </option>
            {CONTACT_INTEREST_OPTION_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(key)}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-[#334155]">
            {t("fieldMessage")} <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder={t("placeholderMessage")}
            className={textareaClass}
          />
        </div>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground sm:text-[0.8125rem]">{t("privacyNote")}</p>
      <div className="pt-1">
        <AppButton
          type="submit"
          size="lg"
          className="h-11 min-w-[11rem] border border-primary/22 bg-primary px-8 text-primary-foreground shadow-[0_12px_32px_-18px_rgba(8,145,178,0.45)] transition-[background-color,box-shadow] hover:bg-[var(--primary-hover)] hover:shadow-[0_14px_36px_-18px_rgba(8,145,178,0.2)]"
        >
          {t("submitButton")}
        </AppButton>
      </div>
    </form>
  );
}
