import { getTranslations } from "next-intl/server";

import { SuppliersTable } from "@/components/pcos/pages/suppliers-table";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { AppButton } from "@/components/ui/app-button";
import { seedEvidenceDocuments, seedSuppliers } from "@/pcos/domain";

export default async function SuppliersPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("suppliers.title")}
        description={t("suppliers.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Supplier portal settings
            </AppButton>
            <AppButton size="sm">Invite supplier</AppButton>
          </div>
        }
      />

      <SuppliersTable
        title={t("suppliers.table.title")}
        subtitle={t("suppliers.table.subtitle")}
        suppliers={seedSuppliers}
        evidenceDocuments={seedEvidenceDocuments}
      />
    </div>
  );
}

