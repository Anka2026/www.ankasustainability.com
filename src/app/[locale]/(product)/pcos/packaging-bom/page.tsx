import { getTranslations } from "next-intl/server";

import { PackagingBomTable } from "@/components/pcos/pages/bom-table";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { AppButton } from "@/components/ui/app-button";
import { seedMaterials, seedPackagingUnits, seedSuppliers } from "@/pcos/domain";

export default async function PackagingBomPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("bom.title")}
        description={t("bom.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Material library
            </AppButton>
            <AppButton size="sm">New component</AppButton>
          </div>
        }
      />

      <PackagingBomTable
        title={t("bom.table.title")}
        subtitle={t("bom.table.subtitle")}
        packagingUnits={seedPackagingUnits}
        materials={seedMaterials}
        suppliers={seedSuppliers}
      />
    </div>
  );
}

