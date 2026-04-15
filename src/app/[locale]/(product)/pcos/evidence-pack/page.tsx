import { getTranslations } from "next-intl/server";

import { EvidencePackTable } from "@/components/pcos/pages/evidence-table";
import { EmptyState } from "@/components/pcos/ui/empty-state";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { AppButton } from "@/components/ui/app-button";
import { seedEvidenceDocuments, seedSuppliers } from "@/pcos/domain";

export default async function EvidencePackPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("evidence.title")}
        description={t("evidence.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Export pack structure
            </AppButton>
            <AppButton size="sm">New request</AppButton>
          </div>
        }
      />

      {seedEvidenceDocuments.length === 0 ? (
        <EmptyState
          title={t("evidence.empty.title")}
          description={t("evidence.empty.description")}
          actions={
            <>
              <AppButton size="sm">Request evidence</AppButton>
              <AppButton size="sm" variant="outline">
                Define evidence requirements
              </AppButton>
            </>
          }
        />
      ) : (
        <EvidencePackTable
          title={t("evidence.table.title")}
          subtitle={t("evidence.table.subtitle")}
          documents={seedEvidenceDocuments}
          suppliers={seedSuppliers}
        />
      )}
    </div>
  );
}

