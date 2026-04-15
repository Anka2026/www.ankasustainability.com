import { getTranslations } from "next-intl/server";

import { EmptyState } from "@/components/pcos/ui/empty-state";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { AppButton } from "@/components/ui/app-button";
import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { seedMarkets, seedSkus } from "@/pcos/domain";

export default async function ResponsibilityMappingPage() {
  const t = await getTranslations("pcos");

  const rows = seedSkus.slice(0, 5).flatMap((sku) =>
    seedMarkets.slice(0, 3).map((m) => ({
      sku: `${sku.skuCode} · ${sku.name}`,
      market: m.code,
      operator: "Importer / Private-label (to confirm)",
      status: "in_progress",
    })),
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("responsibility.title")}
        description={t("responsibility.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Responsibility templates
            </AppButton>
            <AppButton size="sm">New mapping</AppButton>
          </div>
        }
      />

      <div className="grid gap-3 lg:grid-cols-3">
        <EmptyState
          title={t("responsibility.cards.operator.title")}
          description={t("responsibility.cards.operator.description")}
          actions={<AppButton size="sm">Define operator roles</AppButton>}
        />
        <EmptyState
          title={t("responsibility.cards.market.title")}
          description={t("responsibility.cards.market.description")}
          actions={<AppButton size="sm" variant="outline">Add market overlay</AppButton>}
        />
        <EmptyState
          title={t("responsibility.cards.audit.title")}
          description={t("responsibility.cards.audit.description")}
          actions={<AppButton size="sm" variant="outline">Prepare mapping export</AppButton>}
        />
      </div>

      <TableShell
        title={t("responsibility.table.title")}
        subtitle={t("responsibility.table.subtitle")}
        toolbar={
          <AppButton size="sm" variant="outline">
            Bulk update
          </AppButton>
        }
      >
        <DataTable
          columns={[
            { key: "sku", header: "SKU" },
            { key: "market", header: "Market", className: "w-[120px]" },
            { key: "operator", header: "Economic operator responsibility" },
            { key: "status", header: "Status", className: "w-[160px]" },
          ]}
          rows={rows.map((r) => ({
            sku: <span className="text-sm font-medium text-foreground">{r.sku}</span>,
            market: <StatusChip label={r.market} tone="info" />,
            operator: <span className="text-sm text-muted-foreground">{r.operator}</span>,
            status: <StatusChip label={r.status.replaceAll("_", " ")} tone="warning" />,
          }))}
          rowKey={(row, idx) => `resp_${idx}`}
        />
      </TableShell>
    </div>
  );
}

