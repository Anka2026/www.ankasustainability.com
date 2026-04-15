import { getTranslations } from "next-intl/server";

import { PageHeader } from "@/components/pcos/ui/page-header";
import { KpiCard } from "@/components/pcos/ui/kpi-card";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { AppButton } from "@/components/ui/app-button";
import { seedEvidenceDocuments, seedSkus, seedTechnicalFiles } from "@/pcos/domain";
import { computeTechnicalFileReadinessFromEvidence } from "@/pcos/workflows/evidence/service";

export default async function TechnicalFilePage() {
  const t = await getTranslations("pcos");

  const tfBySku = new Map(seedTechnicalFiles.map((tf) => [tf.skuId, tf]));

  const computed = seedSkus.map((sku) => {
    const evidenceForSku = seedEvidenceDocuments.filter((d) =>
      (d.relatedSkuIds ?? []).includes(sku.id),
    );
    const tf = computeTechnicalFileReadinessFromEvidence({
      skuId: sku.id,
      evidenceDocuments: evidenceForSku,
      current: tfBySku.get(sku.id),
    });
    return { sku, tf };
  });

  const readyCount = computed.filter((x) => x.tf.status === "ready").length;
  const blockedCount = computed.filter((x) => x.tf.status === "blocked").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("technicalFile.title")}
        description={t("technicalFile.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Export technical file
            </AppButton>
            <AppButton size="sm">Generate pack</AppButton>
          </div>
        }
      />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title={t("technicalFile.kpis.total")} value={`${computed.length}`} />
        <KpiCard title={t("technicalFile.kpis.ready")} value={`${readyCount}`} />
        <KpiCard title={t("technicalFile.kpis.blocked")} value={`${blockedCount}`} />
        <KpiCard title={t("technicalFile.kpis.evidenceLinked")} value={`${seedEvidenceDocuments.length}`} />
      </section>

      <TableShell
        title={t("technicalFile.table.title")}
        subtitle={t("technicalFile.table.subtitle")}
        toolbar={
          <AppButton size="sm" variant="outline">
            Review queue
          </AppButton>
        }
      >
        <DataTable
          columns={[
            { key: "sku", header: "SKU" },
            { key: "status", header: "Status", className: "w-[160px]" },
            { key: "score", header: "Readiness", className: "w-[160px] text-right" },
            { key: "missing", header: "Missing evidence", className: "w-[160px] text-right" },
            { key: "updated", header: "Updated", className: "w-[140px]" },
          ]}
          rows={computed.map(({ sku, tf }) => ({
            sku: (
              <div className="min-w-0">
                <div className="truncate font-medium text-foreground">
                  {sku.skuCode} · {sku.name}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  Markets: {sku.markets.join(", ")}
                </div>
              </div>
            ),
            status: (
              <StatusChip
                label={tf.status.replaceAll("_", " ")}
                tone={tf.status === "ready" ? "success" : tf.status === "blocked" ? "danger" : "info"}
              />
            ),
            score: <div className="text-right tabular-nums">{tf.readinessScore}%</div>,
            missing: <div className="text-right tabular-nums">{tf.missingEvidenceCount}</div>,
            updated: tf.lastUpdatedAt,
          }))}
          rowKey={(row, idx) => `tf_${idx}`}
        />
      </TableShell>
    </div>
  );
}

