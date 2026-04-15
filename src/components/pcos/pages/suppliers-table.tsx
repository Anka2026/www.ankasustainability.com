"use client";

import { useMemo, useState } from "react";

import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { SearchField } from "@/components/pcos/ui/toolbar";
import { AppButton } from "@/components/ui/app-button";
import type { EvidenceDocument, Supplier } from "@/pcos/domain";

export function SuppliersTable({
  title,
  subtitle,
  suppliers,
  evidenceDocuments,
}: {
  title: string;
  subtitle: string;
  suppliers: Supplier[];
  evidenceDocuments: EvidenceDocument[];
}) {
  const [q, setQ] = useState("");

  const evidenceBySupplier = useMemo(() => {
    const map = new Map<string, EvidenceDocument[]>();
    for (const d of evidenceDocuments) {
      if (!d.supplierId) continue;
      map.set(d.supplierId, [...(map.get(d.supplierId) ?? []), d]);
    }
    return map;
  }, [evidenceDocuments]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return suppliers;
    return suppliers.filter((s) => {
      return (
        s.name.toLowerCase().includes(query) ||
        (s.countryCode ?? "").toLowerCase().includes(query) ||
        (s.contact?.email ?? "").toLowerCase().includes(query)
      );
    });
  }, [q, suppliers]);

  return (
    <TableShell
      title={title}
      subtitle={subtitle}
      toolbar={
        <div className="flex flex-wrap items-center justify-end gap-2">
          <SearchField value={q} onChange={setQ} placeholder="Search supplier, country, email" />
          <AppButton size="sm" variant="outline">
            Invite supplier
          </AppButton>
          <AppButton size="sm">New supplier</AppButton>
        </div>
      }
    >
      <DataTable
        columns={[
          { key: "supplier", header: "Supplier" },
          { key: "status", header: "Status", className: "w-[150px]" },
          { key: "evidence", header: "Evidence", className: "w-[200px]" },
          { key: "sla", header: "SLA", className: "w-[120px]" },
        ]}
        rows={filtered.map((s) => {
          const docs = evidenceBySupplier.get(s.id) ?? [];
          const missing = docs.filter((d) => d.status === "missing").length;
          const inProgress = docs.filter((d) => ["requested", "received", "in_review"].includes(d.status)).length;
          const approved = docs.filter((d) => d.status === "approved").length;

          return {
            supplier: (
              <div className="min-w-0">
                <div className="truncate font-medium text-foreground">{s.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {(s.countryCode ? `${s.countryCode} · ` : "") + (s.contact?.email ?? "No contact email")}
                </div>
              </div>
            ),
            status: (
              <StatusChip
                label={s.status}
                tone={s.status === "active" ? "success" : s.status === "onboarding" ? "info" : "neutral"}
              />
            ),
            evidence: (
              <div className="text-xs leading-relaxed text-muted-foreground">
                <div>Approved: {approved}</div>
                <div>In progress: {inProgress}</div>
                <div>Missing: {missing}</div>
              </div>
            ),
            sla: <span className="text-sm text-foreground">{s.evidenceSlaDays ? `${s.evidenceSlaDays}d` : "—"}</span>,
          };
        })}
        rowKey={(row, idx) => `supplier_${idx}`}
      />
      {filtered.length === 0 ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          No suppliers match your search.
        </div>
      ) : null}
    </TableShell>
  );
}

