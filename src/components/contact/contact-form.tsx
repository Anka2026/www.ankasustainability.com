"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { AppButton } from "@/components/ui/app-button";
import { CONTACT_TOPIC_OPTION_KEYS } from "@/lib/contact-content";
import { cn } from "@/lib/utils";

const fieldClass = cn(
  "w-full rounded-lg border border-border/90 bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm",
  "placeholder:text-muted-foreground/80",
  "transition-[border-color,box-shadow] focus:border-accent/45 focus:outline-none focus:ring-2 focus:ring-accent/15",
);

export function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl border border-accent/25 bg-accent/[0.06] px-5 py-6 text-center sm:px-8 sm:py-8"
        role="status"
      >
        <p className="text-sm font-medium leading-relaxed text-foreground sm:text-[0.9375rem]">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border/90 bg-background/80 p-6 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            {t("name")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-company" className="text-sm font-medium text-foreground">
            {t("company")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
            {t("email")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-country" className="text-sm font-medium text-foreground">
            {t("country")} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-country"
            name="country"
            type="text"
            required
            autoComplete="country-name"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="contact-topic" className="text-sm font-medium text-foreground">
            {t("topic")} <span className="text-accent">*</span>
          </label>
          <select
            id="contact-topic"
            name="topic"
            required
            defaultValue=""
            className={cn(fieldClass, "appearance-none bg-[length:1rem] bg-[right_0.65rem_center] bg-no-repeat")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="" disabled>
              {t("topicPlaceholder")}
            </option>
            {CONTACT_TOPIC_OPTION_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(key)}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
            {t("message")} <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={cn(fieldClass, "min-h-[7.5rem] resize-y")}
          />
        </div>
      </div>
      <div className="pt-1">
        <AppButton type="submit" size="lg" className="min-w-[10rem]">
          {t("submit")}
        </AppButton>
      </div>
    </form>
  );
}
