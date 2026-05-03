import { cn } from "@/lib/utils";

type PlaceholderVariant = "default" | "card";

type Props = Readonly<{
  className?: string;
  /** `card`: dashboard-style skeleton for fixed-height product card previews. */
  variant?: PlaceholderVariant;
}>;

/** Premium neutral surface when no product screenshot is available. */
export function SoftwarePreviewPlaceholder({ className, variant = "default" }: Props) {
  if (variant === "card") {
    return (
      <div
        className={cn(
          "relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/95",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] ring-1 ring-inset ring-slate-900/[0.03]",
          className,
        )}
        aria-hidden
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(8,145,178,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.06)_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden
        />
        <div className="relative flex h-full min-h-0 flex-col p-3 sm:p-3.5">
          <div className="flex shrink-0 items-center gap-2 border-b border-slate-200/60 pb-2.5">
            <div className="h-2 w-2 rounded-full bg-slate-200/90" />
            <div className="h-2 flex-1 max-w-[40%] rounded-full bg-slate-200/80" />
            <div className="ml-auto h-2 w-12 rounded-md bg-slate-100/90" />
          </div>
          <div className="mt-2.5 flex min-h-0 flex-1 gap-2.5">
            <div className="flex w-[22%] shrink-0 flex-col gap-2 rounded-lg border border-slate-200/50 bg-slate-50/80 p-2">
              <div className="h-1.5 w-full rounded bg-slate-200/70" />
              <div className="h-1.5 w-[80%] rounded bg-slate-200/50" />
              <div className="mt-1 h-1.5 w-full rounded bg-slate-200/40" />
              <div className="h-1.5 w-[60%] rounded bg-slate-200/40" />
              <div className="mt-auto h-8 w-full rounded-md bg-slate-100/90" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="grid shrink-0 grid-cols-3 gap-2">
                <div className="h-14 rounded-lg border border-slate-200/60 bg-white/90 shadow-sm" />
                <div className="h-14 rounded-lg border border-slate-200/60 bg-white/90 shadow-sm" />
                <div className="h-14 rounded-lg border border-slate-200/60 bg-white/90 shadow-sm" />
              </div>
              <div className="min-h-0 flex-1 rounded-lg border border-slate-200/55 bg-white/70 p-2 shadow-sm">
                <div className="h-2 w-1/3 rounded bg-slate-200/70" />
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-slate-200/45" />
                  <div className="h-1.5 w-[92%] rounded bg-slate-200/40" />
                  <div className="h-1.5 w-[78%] rounded bg-slate-200/35" />
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="h-8 flex-1 rounded-md bg-slate-100/95" />
                  <div className="h-8 flex-1 rounded-md bg-slate-100/95" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
