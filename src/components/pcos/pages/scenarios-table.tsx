"use client";

import { useMemo, useState } from "react";

import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { SearchField } from "@/components/pcos/ui/toolbar";
import { AppButton } from "@/components/ui/app-button";
import type { PackagingUnit, Scenario, SKU } from "@/pcos/domain";
import { compareScenario } from "@/pcos/workflows/scenario/service";
import { getSkuDisplayName, getPackagingUnitTotalWeightGrams } from "@/pcos/domain/selectors";

export function ScenariosTable({
  title,
  subtitle,
  scenarios,
  skus,
  packagingUnits,
}: {
  title: string;
  subtitle: string;
  scenarios: Scenario[];
  skus: SKU[];
  packagingUnits: PackagingUnit[];
}) {
  const [q, setQ] = useState("");

  const skuById = useMemo(() => new Map(skus.map((s) => [s.id, s])), [skus]);
  const puById = useMemo(() => new Map(packagingUnits.map((p) => [p.id, p])), [packagingUnits]);

  const enriched = useMemo(() => {
    return scenarios
      .map((s) => {
        const sku = skuById.get(s.skuId);
        const baseline = puById.get(s.baselinePackagingUnitId);
        const alternative = puById.get(s.alternativePackagingUnitId);
        const comparison =
          baseline && alternative ? compareScenario({ scenario: s, baseline, alternative }) : null;
        return { s, sku, baseline, alternative, comparison };
      })
      .filter((x) => {
        const query = q.trim().toLowerCase();
        if (!query) return true;
        const skuName = x.sku ? getSkuDisplayName(x.sku) : "";
        return (
          x.s.name.toLowerCase().includes(query) ||
          skuName.toLowerCase().includes(query) ||
          (x.baseline?.name ?? "").toLowerCase().includes(query) ||
          (x.alternative?.name ?? "").toLowerCase().includes(query)
        );
      });
  }, [puById, q, scenarios, skuById]);

  return (
    <TableShell
      title={title}
      subtitle={subtitle}
      toolbar={
        <div className="flex flex-wrap items-center justify-end gap-2">
          <SearchField value={q} onChange={setQ} placeholder="Search scenario, SKU, packaging unit" />
          <AppButton size="sm">New scenario</AppButton>
        </div>
      }
    >
      <DataTable
        columns={[
          { key: "scenario", header: "Scenario" },
          { key: "sku", header: "SKU" },
          { key: "delta", header: "Weight delta", className: "w-[160px]" },
          { key: "status", header: "Status", className: "w-[150px]" },
        ]}
        rows={enriched.map(({ s, sku, baseline, alternative, comparison }) => {
          const baseWeight = baseline ? getPackagingUnitTotalWeightGrams(baseline) : null;
          const altWeight = alternative ? getPackagingUnitTotalWeightGrams(alternative) : null;
          const delta = comparison ? comparison.weightDeltaGrams : altWeight != null && baseWeight != null ? altWeight - baseWeight : null;
          const pct = comparison?.weightDeltaPct;

          return {
            scenario: (
              <div className="min-w-0">
                <div className="truncate font-medium text-foreground">{s.name}</div>
                <div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                  Baseline: {baseline?.name ?? "—"} → Alternative: {alternative?.name ?? "—"}
                </div>
              </div>
            ),
            sku: <span className="text-sm text-foreground">{sku ? getSkuDisplayName(sku) : "—"}</span>,
            delta: (
              <div className="text-right tabular-nums text-sm text-foreground">
                {delta == null ? "—" : `${delta.toFixed(1)} g`}
                <div className="text-xs text-muted-foreground">{pct == null ? "" : `${pct.toFixed(1)}%`}</div>
              </div>
            ),
            status: (
              <StatusChip
                label={s.status.replaceAll("_", " ")}
                tone={s.status === "approved" ? "success" : s.status === "under_review" ? "info" : "neutral"}
              />
            ),
          };
        })}
        rowKey={(row, idx) => `scenario_${idx}`}
      />
      {enriched.length === 0 ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          No scenarios match your search.
        </div>
      ) : null}
    </TableShell>
  );
}

