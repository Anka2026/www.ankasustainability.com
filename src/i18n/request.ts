import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { deepMergeMessages, type JsonObject } from "@/lib/merge-messages";
import { enResourcesInsightsPatch } from "@/messages/patches/en.resourcesInsights";
import { enResourcesTechnicalBriefPatch } from "@/messages/patches/en.resourcesTechnicalBrief";
import { enSectorsDetailPatch } from "@/messages/patches/en.sectorsDetail";
import { enSectorsHeroIntroPatch } from "@/messages/patches/en.sectorsHeroIntro";
import { enServicesDigitalSolutionPatch } from "@/messages/patches/en.servicesDigitalSolution";
import { enSoftwarePortfolioPatch } from "@/messages/patches/en.softwarePortfolio";
import { nlResourcesInsightsPatch } from "@/messages/patches/nl.resourcesInsights";
import { nlResourcesTechnicalBriefPatch } from "@/messages/patches/nl.resourcesTechnicalBrief";
import { nlSectorsDetailPatch } from "@/messages/patches/nl.sectorsDetail";
import { nlSectorsHeroIntroPatch } from "@/messages/patches/nl.sectorsHeroIntro";
import { nlServicesDigitalSolutionPatch } from "@/messages/patches/nl.servicesDigitalSolution";
import { nlSoftwarePortfolioPatch } from "@/messages/patches/nl.softwarePortfolio";
import { trResourcesInsightsPatch } from "@/messages/patches/tr.resourcesInsights";
import { trResourcesTechnicalBriefPatch } from "@/messages/patches/tr.resourcesTechnicalBrief";
import { trSectorsDetailPatch } from "@/messages/patches/tr.sectorsDetail";
import { trSectorsHeroIntroPatch } from "@/messages/patches/tr.sectorsHeroIntro";
import { trServicesDigitalSolutionPatch } from "@/messages/patches/tr.servicesDigitalSolution";
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

  const patches: JsonObject[] = [];
  if (locale === "en") {
    patches.push(
      enSoftwarePortfolioPatch,
      enServicesDigitalSolutionPatch,
      enResourcesInsightsPatch,
      enResourcesTechnicalBriefPatch,
      enSectorsDetailPatch,
      enSectorsHeroIntroPatch,
    );
  } else if (locale === "nl") {
    patches.push(
      nlSoftwarePortfolioPatch,
      nlServicesDigitalSolutionPatch,
      nlResourcesInsightsPatch,
      nlResourcesTechnicalBriefPatch,
      nlSectorsDetailPatch,
      nlSectorsHeroIntroPatch,
    );
  } else if (locale === "tr") {
    patches.push(
      trSoftwarePortfolioPatch,
      trServicesDigitalSolutionPatch,
      trResourcesInsightsPatch,
      trResourcesTechnicalBriefPatch,
      trSectorsDetailPatch,
      trSectorsHeroIntroPatch,
    );
  }

  const messages = patches.reduce(
    (acc, patch) => deepMergeMessages(acc, patch),
    baseMessages,
  );

  return {
    locale,
    messages,
  };
});
