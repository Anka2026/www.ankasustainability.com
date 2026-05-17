import { cn } from "@/lib/utils";

type Props = Readonly<{
  className?: string;
  variant?: "default" | "cbam";
}>;

export function SoftwareDigitalPreviewMock({ className, variant = "default" }: Props) {
  const isCbam = variant === "cbam";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_18px_44px_-32px_rgba(15,23,42,0.22)] ring-1 ring-inset ring-primary/[0.05]",
        isCbam ? "min-h-[12.5rem] sm:min-h-[14rem]" : "min-h-[11rem] sm:min-h-[12.5rem]",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(8,145,178,0.12),transparent_55%)]" />
      <div className="relative space-y-3">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-9 flex-1 rounded-lg border border-slate-200/90 bg-white/90">
              <div className="mx-2 mt-2 h-1 w-1/2 rounded-full bg-primary/25" />
              <div className="mx-2 mt-1.5 h-2 w-2/3 rounded bg-accent/20" />
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-primary/[0.04] p-2.5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80">
            <div className="h-full w-[68%] rounded-full bg-accent/55" />
          </div>
        </div>
        {isCbam ? (
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-slate-200/75 bg-white/95 p-2">
              <div className="h-1 w-2/3 rounded-full bg-primary/20" />
              <div className="mt-2 h-1 w-full rounded-full bg-slate-200/90" />
            </div>
            <div className="rounded-lg border border-slate-200/75 bg-white/95 p-2">
              <div className="h-1 w-1/2 rounded-full bg-accent/25" />
              <div className="mt-2 flex gap-1">
                <span className="h-4 w-10 rounded-full bg-sky-100/90" />
                <span className="h-4 w-8 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-slate-200/75 bg-white/95 p-2.5 space-y-2">
            <div className="h-1 w-full rounded-full bg-slate-200/85" />
            <div className="h-1 w-11/12 rounded-full bg-slate-200/70" />
            <div className="h-1 w-4/5 rounded-full bg-slate-200/60" />
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          <span className="h-5 w-14 rounded-full border border-accent/25 bg-accent/[0.08]" />
          <span className="h-5 w-12 rounded-full border border-slate-200/80 bg-white/90" />
        </div>
      </div>
    </div>
  );
}
