import { cn } from "@/lib/utils";

/** Premium neutral surface when no product screenshot is available. */
export function SoftwarePreviewPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[12rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-slate-100/90",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] ring-1 ring-inset ring-slate-900/[0.04]",
        className,
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(8,145,178,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.07)_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_220px_at_50%_40%,rgba(8,145,178,0.12),transparent_62%)]"
        aria-hidden
      />
    </div>
  );
}
