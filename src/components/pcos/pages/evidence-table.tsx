"use client";

import { useMemo, useState } from "react";

import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { SearchField } from "@/components/pcos/ui/toolbar";
import { AppButton } from "@/components/ui/app-button";
import type { EvidenceDocument, Supplier } from "@/pcos/domain";
import { bucketEvidenceStatus, computeEvidenceOverview } from "@/pcos/workflows/evidence/service";

export function EvidencePackTable({
  title,
  subtitle,
  documents,
  suppliers,
}: {
  title: string;
  subtitle: string;
  documents: EvidenceDocument[];
  suppliers: Supplier[];
}) {
  const [q, setQ] = useState("");

  const supplierById = useMemo(() => new Map(suppliers.map((s) => [s.id, s])), [suppliers]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return documents;
    return documents.filter((d) => {
      const sup = d.supplierId ? supplierById.get(d.supplierId)?.name ?? "" : "";
      return (
        d.title.toLowerCase().includes(query) ||
        d.type.toLowerCase().includes(query) ||
        d.status.toLowerCase().includes(query) ||
        sup.toLowerCase().includes(query)
      );
    });
  }, [documents, q, supplierById]);

  const overview = computeEvidenceOverview(documents);

  return (
    <TableShell
      title={title}
      subtitle={subtitle}
      toolbar={
        <div className="flex flex-wrap items-center justify-end gap-2">
          <SearchField value={q} onChange={setQ} placeholder="Search title, type, supplier, status" />
          <AppButton size="sm" variant="outline">
            New request
          </AppButton>
        </div>
      }
    >
      <div className="flex flex-wrap gap-2 border-b border-border px-5 py-3">
        <StatusChip label={`Ready ${overview.ready}`} tone="success" />
        <StatusChip label={`In progress ${overview.in_progress}`} tone="info" />
        <StatusChip label={`Missing ${overview.missing}`} tone="warning" />
        <StatusChip label={`Expired/Rejected ${overview.expired_or_rejected}`} tone="danger" />
      </div>
      <DataTable
        columns={[
          { key: "doc", header: "Document" },
          { key: "supplier", header: "Supplier", className: "w-[260px]" },
          { key: "status", header: "Status", className: "w-[170px]" },
          { key: "dates", header: "Dates", className: "w-[220px]" },
        ]}
        rows={filtered.map((d) => {
          const bucket = bucketEvidenceStatus(d.status);
          const tone =
            bucket === "ready"
              ? "success"
              : bucket === "missing"
                ? "warning"
                : bucket === "expired_or_rejected"
                  ? "danger"
                  : "info";

          const supplierName = d.supplierId ? supplierById.get(d.supplierId)?.name : undefined;

          return {
            doc: (
              <div className="min-w-0">
                <div className="truncate font-medium text-foreground">{d.title}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{d.type.replaceAll("_", " ")}</div>
              </div>
            ),
            supplier: (
              <div className="min-w-0">
                <div className="truncate text-sm text-foreground">{supplierName ?? "Internal / not linked"}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {d.relatedSkuIds?.length ? `${d.relatedSkuIds.length} SKU link(s)` : "No SKU links yet"}
                </div>
              </div>
            ),
            status: <StatusChip label={d.status.replaceAll("_", " ")} tone={tone} />,
            dates: (
              <div className="text-xs leading-relaxed text-muted-foreground">
                <div>Requested: {d.requestedAt ?? "—"}</div>
                <div>Received: {d.receivedAt ?? "—"}</div>
                <div>Approved: {d.approvedAt ?? "—"}</div>
              </div>
            ),
          };
        })}
        rowKey={(row, idx) => `evidence_${idx}`}
      />
      {filtered.length === 0 ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          No evidence documents match your search.
        </div>
      ) : null}
    </TableShell>
  );
}

