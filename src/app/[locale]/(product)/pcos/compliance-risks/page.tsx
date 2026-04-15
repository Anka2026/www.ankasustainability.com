import { getTranslations } from "next-intl/server";

import { ComplianceRisksTable } from "@/components/pcos/pages/risks-table";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { AppButton } from "@/components/ui/app-button";
import { seedRuleResults } from "@/pcos/domain";

export default async function ComplianceRisksPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("risks.title")}
        description={t("risks.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Export findings
            </AppButton>
            <AppButton size="sm">Run checks</AppButton>
          </div>
        }
      />
      <ComplianceRisksTable
        title={t("risks.table.title")}
        subtitle={t("risks.table.subtitle")}
        risks={seedRuleResults}
      />
    </div>
  );
}

