"use client";

import { useMemo, useState } from "react";

import { DataTable, TableShell } from "@/components/pcos/ui/table";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { SearchField } from "@/components/pcos/ui/toolbar";
import type { RuleResult } from "@/pcos/domain";

type SeverityFilter = "all" | "critical" | "warning" | "info";

export function ComplianceRisksTable({
  title,
  subtitle,
  risks,
}: {
  title: string;
  subtitle: string;
  risks: RuleResult[];
}) {
  const [q, setQ] = useState("");
  const [severity, setSeverity] = useState<SeverityFilter>("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return risks.filter((r) => {
      if (severity !== "all" && r.severity !== severity) return false;
      if (!query) return true;
      return (
        r.title.toLowerCase().includes(query) ||
        r.summary.toLowerCase().includes(query) ||
        (r.marketCode ?? "").toLowerCase().includes(query)
      );
    });
  }, [q, risks, severity]);

  return (
    <TableShell
      title={title}
      subtitle={subtitle}
      toolbar={
        <div className="flex flex-wrap items-center justify-end gap-2">
          <SearchField value={q} onChange={setQ} placeholder="Search risks, market, summary" />
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value as SeverityFilter)}
            className="h-9 rounded-[min(0.85rem,var(--radius-lg))] border border-border bg-background px-3 text-sm text-foreground shadow-sm shadow-primary/[0.04] ring-1 ring-primary/[0.03] focus:outline-none"
          >
            <option value="all">All severities</option>
            <option value="critical">Critical</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </select>
        </div>
      }
    >
      <DataTable
        columns={[
          { key: "severity", header: "Severity", className: "w-[140px]" },
          { key: "title", header: "Finding" },
          { key: "market", header: "Market", className: "w-[100px]" },
          { key: "category", header: "Category", className: "w-[160px]" },
          { key: "status", header: "Status", className: "w-[140px]" },
        ]}
        rows={filtered.map((r) => ({
          severity: (
            <StatusChip
              label={r.severity.toUpperCase()}
              tone={r.severity === "critical" ? "danger" : r.severity === "warning" ? "warning" : "info"}
            />
          ),
          title: (
            <div className="min-w-0">
              <div className="truncate font-medium text-foreground">{r.title}</div>
              <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{r.summary}</div>
            </div>
          ),
          market: r.marketCode ?? "—",
          category: <span className="text-sm text-muted-foreground">{r.category}</span>,
          status: <StatusChip label={r.status} tone={r.status === "open" ? "warning" : "neutral"} />,
        }))}
        rowKey={(row, idx) => `risk_${idx}`}
      />
      {filtered.length === 0 ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          No findings match your filters.
        </div>
      ) : null}
    </TableShell>
  );
}

