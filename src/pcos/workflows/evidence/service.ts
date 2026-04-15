import type { EvidenceDocument, EvidenceStatus, TechnicalFile } from "@/pcos/domain";

export type EvidenceBucket =
  | "missing"
  | "in_progress"
  | "ready"
  | "attention"
  | "expired_or_rejected";

export function bucketEvidenceStatus(status: EvidenceStatus): EvidenceBucket {
  switch (status) {
    case "missing":
      return "missing";
    case "requested":
    case "received":
    case "in_review":
      return "in_progress";
    case "approved":
      return "ready";
    case "expired":
    case "rejected":
      return "expired_or_rejected";
    default:
      return "attention";
  }
}

export function computeEvidenceOverview(documents: EvidenceDocument[]) {
  const counts: Record<EvidenceBucket, number> = {
    missing: 0,
    in_progress: 0,
    ready: 0,
    attention: 0,
    expired_or_rejected: 0,
  };

  for (const d of documents) {
    counts[bucketEvidenceStatus(d.status)] += 1;
  }

  return counts;
}

export function computeTechnicalFileReadinessFromEvidence(params: {
  skuId: string;
  evidenceDocuments: EvidenceDocument[];
  current?: TechnicalFile;
}): TechnicalFile {
  const missingEvidenceCount = params.evidenceDocuments.filter((d) => d.status === "missing").length;

  const inProgressCount = params.evidenceDocuments.filter((d) =>
    ["requested", "received", "in_review"].includes(d.status),
  ).length;

  const rejectedOrExpired = params.evidenceDocuments.filter((d) =>
    ["rejected", "expired"].includes(d.status),
  ).length;

  const readinessScore = Math.max(
    0,
    Math.min(100, 100 - missingEvidenceCount * 35 - rejectedOrExpired * 20 - inProgressCount * 8),
  );

  const status: TechnicalFile["status"] =
    missingEvidenceCount > 0 || rejectedOrExpired > 0
      ? "blocked"
      : readinessScore >= 85
        ? "ready"
        : "in_progress";

  return {
    id: params.current?.id ?? `tf_${params.skuId}`,
    skuId: params.skuId,
    status,
    readinessScore,
    missingEvidenceCount,
    lastUpdatedAt: new Date().toISOString().slice(0, 10),
  };
}

