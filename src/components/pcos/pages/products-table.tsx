"use client";

import { useMemo, useState } from "react";

import { AppButton } from "@/components/ui/app-button";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { SearchField } from "@/components/pcos/ui/toolbar";
import type { SKU } from "@/pcos/domain";
import { getSkuDisplayName } from "@/pcos/domain/selectors";

export function ProductsTable({
  title,
  subtitle,
  ctas,
  skus,
}: {
  title: string;
  subtitle: string;
  ctas?: React.ReactNode;
  skus: SKU[];
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return skus;
    return skus.filter((s) => {
      return (
        s.skuCode.toLowerCase().includes(query) ||
        s.name.toLowerCase().includes(query) ||
        (s.gtin ?? "").toLowerCase().includes(query)
      );
    });
  }, [q, skus]);

  return (
    <TableShell
      title={title}
      subtitle={subtitle}
      toolbar={
        <div className="flex flex-wrap items-center justify-end gap-2">
          <SearchField value={q} onChange={setQ} placeholder="Search SKU code, name, GTIN" />
          {ctas ? ctas : null}
        </div>
      }
    >
      <DataTable
        columns={[
          { key: "sku", header: "SKU" },
          { key: "markets", header: "Markets", className: "w-[140px]" },
          { key: "packaging", header: "Packaging", className: "w-[180px]" },
          { key: "status", header: "Status", className: "w-[130px]" },
          { key: "actions", header: "", className: "w-[120px] text-right" },
        ]}
        rows={filtered.map((s) => ({
          sku: (
            <div className="min-w-0">
              <div className="truncate font-medium text-foreground">{getSkuDisplayName(s)}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {s.gtin ? `GTIN ${s.gtin}` : "GTIN not set"}
              </div>
            </div>
          ),
          markets: <span className="text-sm text-foreground">{s.markets.join(", ")}</span>,
          packaging: <span className="text-sm text-muted-foreground">{s.packagingUnitId ?? "Not linked"}</span>,
          status: (
            <StatusChip
              label={s.status}
              tone={s.status === "active" ? "success" : s.status === "draft" ? "info" : "neutral"}
            />
          ),
          actions: (
            <div className="flex justify-end">
              <AppButton size="sm" variant="outline">
                Open
              </AppButton>
            </div>
          ),
        }))}
        rowKey={(row, idx) => `sku_${idx}`}
      />
      {filtered.length === 0 ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          No SKUs match your search.
        </div>
      ) : null}
    </TableShell>
  );
}

