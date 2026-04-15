import { getTranslations } from "next-intl/server";

import { ScenariosTable } from "@/components/pcos/pages/scenarios-table";
import { EmptyState } from "@/components/pcos/ui/empty-state";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { AppButton } from "@/components/ui/app-button";
import { seedPackagingUnits, seedScenarios, seedSkus } from "@/pcos/domain";

export default async function ScenarioComparisonPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("scenarios.title")}
        description={t("scenarios.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Export comparison
            </AppButton>
            <AppButton size="sm">New scenario</AppButton>
          </div>
        }
      />

      {seedScenarios.length === 0 ? (
        <EmptyState
          title={t("scenarios.empty.title")}
          description={t("scenarios.empty.description")}
          actions={
            <>
              <AppButton size="sm">Create scenario</AppButton>
              <AppButton size="sm" variant="outline">
                Compare packaging units
              </AppButton>
            </>
          }
        />
      ) : (
        <ScenariosTable
          title={t("scenarios.table.title")}
          subtitle={t("scenarios.table.subtitle")}
          scenarios={seedScenarios}
          skus={seedSkus}
          packagingUnits={seedPackagingUnits}
        />
      )}
    </div>
  );
}

