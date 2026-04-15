"use client";

import { useMemo, useState } from "react";

import { SearchField } from "@/components/pcos/ui/toolbar";
import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { AppButton } from "@/components/ui/app-button";
import type { Material, PackagingUnit, Supplier } from "@/pcos/domain";
import { getPackagingUnitTotalWeightGrams } from "@/pcos/domain/selectors";

export function PackagingBomTable({
  title,
  subtitle,
  packagingUnits,
  materials,
  suppliers,
}: {
  title: string;
  subtitle: string;
  packagingUnits: PackagingUnit[];
  materials: Material[];
  suppliers: Supplier[];
}) {
  const [q, setQ] = useState("");

  const lookups = useMemo(() => {
    const mat = new Map(materials.map((m) => [m.id, m]));
    const sup = new Map(suppliers.map((s) => [s.id, s]));
    return { mat, sup };
  }, [materials, suppliers]);

  const flattened = useMemo(() => {
    const query = q.trim().toLowerCase();

    const rows = packagingUnits.flatMap((u) =>
      u.components.map((c) => ({
        unit: u,
        component: c,
      })),
    );

    if (!query) return rows;

    return rows.filter(({ unit, component }) => {
      const m = lookups.mat.get(component.materialId)?.name ?? "";
      const s = component.supplierId ? lookups.sup.get(component.supplierId)?.name ?? "" : "";

      return (
        unit.name.toLowerCase().includes(query) ||
        component.name.toLowerCase().includes(query) ||
        m.toLowerCase().includes(query) ||
        s.toLowerCase().includes(query)
      );
    });
  }, [packagingUnits, q, lookups.mat, lookups.sup]);

  return (
    <TableShell
      title={title}
      subtitle={subtitle}
      toolbar={
        <div className="flex flex-wrap items-center justify-end gap-2">
          <SearchField value={q} onChange={setQ} placeholder="Search unit, component, material, supplier" />
          <AppButton size="sm" variant="outline">
            Add unit
          </AppButton>
        </div>
      }
    >
      <DataTable
        columns={[
          { key: "unit", header: "Packaging unit" },
          { key: "level", header: "Level", className: "w-[140px]" },
          { key: "component", header: "Component" },
          { key: "material", header: "Material", className: "w-[180px]" },
          { key: "weight", header: "Weight (g)", className: "w-[120px] text-right" },
          { key: "supplier", header: "Supplier", className: "w-[220px]" },
        ]}
        rows={flattened.map(({ unit, component }) => {
          const m = lookups.mat.get(component.materialId);
          const s = component.supplierId ? lookups.sup.get(component.supplierId) : undefined;
          const unitWeight = getPackagingUnitTotalWeightGrams(unit);

          return {
            unit: (
              <div className="min-w-0">
                <div className="truncate font-medium text-foreground">{unit.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{unitWeight.toFixed(1)} g total</div>
              </div>
            ),
            level: <StatusChip label={unit.level} tone="neutral" />,
            component: (
              <div className="min-w-0">
                <div className="truncate font-medium text-foreground">{component.name}</div>
                <div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                  {(component.tags ?? []).join(" · ") || "—"}
                </div>
              </div>
            ),
            material: (
              <div className="min-w-0">
                <div className="truncate text-sm text-foreground">{m?.name ?? component.materialId}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {m?.recycledContentPct != null ? `${m.recycledContentPct}% recycled` : "Recycled content not set"}
                </div>
              </div>
            ),
            weight: <div className="text-right tabular-nums">{component.weightGrams.toFixed(1)}</div>,
            supplier: (
              <div className="min-w-0">
                <div className="truncate text-sm text-foreground">{s?.name ?? "Not linked"}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {s?.status ? `Supplier status: ${s.status}` : "—"}
                </div>
              </div>
            ),
          };
        })}
        rowKey={(row, idx) => `bom_${idx}`}
      />
      {flattened.length === 0 ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          No BOM items match your search.
        </div>
      ) : null}
    </TableShell>
  );
}

