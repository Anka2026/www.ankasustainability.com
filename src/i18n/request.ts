import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { deepMergeMessages, type JsonObject } from "@/lib/merge-messages";
import { enSoftwarePortfolioPatch } from "@/messages/patches/en.softwarePortfolio";
import { nlSoftwarePortfolioPatch } from "@/messages/patches/nl.softwarePortfolio";
import { trSoftwarePortfolioPatch } from "@/messages/patches/tr.softwarePortfolio";

import { routing, type AppLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const candidate = await requestLocale;

  const locale = routing.locales.find((l) => l === candidate) as
    | AppLocale
    | undefined;

  if (!locale) {
    notFound();
  }

  const baseMessages = (await import(`../messages/${locale}.json`))
    .default as unknown as JsonObject;

  const patch =
    locale === "en"
      ? enSoftwarePortfolioPatch
      : locale === "nl"
        ? nlSoftwarePortfolioPatch
        : locale === "tr"
          ? trSoftwarePortfolioPatch
          : null;

  const messages = patch ? deepMergeMessages(baseMessages, patch) : baseMessages;

  return {
    locale,
    messages,
  };
});
