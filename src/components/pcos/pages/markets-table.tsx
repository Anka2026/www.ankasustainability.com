"use client";

import { useMemo, useState } from "react";

import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { SearchField } from "@/components/pcos/ui/toolbar";
import { AppButton } from "@/components/ui/app-button";
import type { Market } from "@/pcos/domain";

export function MarketsTable({
  title,
  subtitle,
  markets,
}: {
  title: string;
  subtitle: string;
  markets: Market[];
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return markets;
    return markets.filter((m) => {
      return (
        m.code.toLowerCase().includes(query) ||
        m.name.toLowerCase().includes(query) ||
        (m.overlays.eprNotes ?? "").toLowerCase().includes(query)
      );
    });
  }, [markets, q]);

  return (
    <TableShell
      title={title}
      subtitle={subtitle}
      toolbar={
        <div className="flex flex-wrap items-center justify-end gap-2">
          <SearchField value={q} onChange={setQ} placeholder="Search market, code, overlay notes" />
          <AppButton size="sm" variant="outline">
            Add market
          </AppButton>
        </div>
      }
    >
      <DataTable
        columns={[
          { key: "market", header: "Market" },
          { key: "eu", header: "EU", className: "w-[120px]" },
          { key: "active", header: "Active", className: "w-[140px]" },
          { key: "overlay", header: "Overlay notes" },
        ]}
        rows={filtered.map((m) => ({
          market: (
            <div className="min-w-0">
              <div className="truncate font-medium text-foreground">
                {m.name} <span className="text-muted-foreground">({m.code})</span>
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Country overlay slots attach here (EPR, registry, reporting).
              </div>
            </div>
          ),
          eu: <StatusChip label={m.euMemberState ? "Member state" : "Non-EU"} tone={m.euMemberState ? "info" : "neutral"} />,
          active: <StatusChip label={m.active ? "Active" : "Inactive"} tone={m.active ? "success" : "neutral"} />,
          overlay: (
            <div className="text-sm leading-relaxed text-muted-foreground">
              {m.overlays.eprNotes ?? "No overlay notes yet."}
            </div>
          ),
        }))}
        rowKey={(row, idx) => `market_${idx}`}
      />
      {filtered.length === 0 ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          No markets match your search.
        </div>
      ) : null}
    </TableShell>
  );
}

