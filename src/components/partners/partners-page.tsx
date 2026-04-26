import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { PartnerLogoSlot } from "@/components/partners/partner-logo-slot";
import { HERO_LEFT_RAIL_HOME } from "@/lib/hero-classes";
import type { IntlTranslator } from "@/lib/i18n-types";
import { Link } from "@/i18n/navigation";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ListChecks, ShieldCheck, Sparkles, UsersRound, Workflow } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const PANEL_ICONS = [UsersRound, ShieldCheck, ListChecks, Sparkles] as const;
const MODEL_STEPS = ["s1", "s2", "s3", "s4"] as const;
const PARTNER_KEYS = ["meva", "beyond"] as const;

function readStringArray(t: IntlTranslator, key: string): string[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((v): v is string => typeof v === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

function PartnersHero({ t }: Props) {
  const panelItems = readStringArray(t, "hero.panel.items");
  const panelEyebrow = t("hero.panel.eyebrow").trim();

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-slate-50/80"
      aria-labelledby="partners-hero-heading"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(900px_480px_at_8%_12%,rgba(8,145,178,0.22),transparent_58%),radial-gradient(1000px_520px_at_88%_8%,rgba(15,23,42,0.11),transparent_55%),radial-gradient(1200px_520px_at_14%_10%,rgba(8,145,178,0.18),transparent_60%)]",
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(241,245,249,0.95))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(90deg,transparent,rgba(8,145,178,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.16),transparent_68%)] blur-3xl"
        aria-hidden
      />

      <Container className="relative z-[1] max-w-7xl pt-11 pb-10 sm:pt-12 sm:pb-12 md:pt-14 md:pb-12 xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="grid items-stretch gap-8 sm:gap-9 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-11 xl:gap-12">
          <div
            className={cn(
              HERO_LEFT_RAIL_HOME,
              "min-w-0 max-w-[min(100%,32rem)] sm:max-w-[36rem] lg:max-w-[min(100%,38rem)]",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              {t("hero.eyebrow")}
            </p>
            <h1
              id="partners-hero-heading"
              className="mt-3.5 text-balance text-pretty text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-900 sm:mt-4 sm:text-[2.1rem] sm:leading-[1.1] md:text-[2.45rem] lg:text-[2.6rem] lg:leading-[1.06]"
            >
              {t("hero.title")}
            </h1>
            <p className="mt-3.5 text-pretty text-[0.98rem] leading-relaxed text-slate-600 sm:mt-4 sm:text-[1.0625rem] sm:leading-[1.65]">
              {t("hero.description")}
            </p>

            <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:mt-7 sm:max-w-md sm:flex-row sm:items-stretch sm:gap-3.5 md:max-w-none">
              <AppButton
                asChild
                className="h-11 w-full shrink-0 border border-accent/45 bg-accent text-accent-foreground shadow-[0_18px_44px_-22px_rgba(8,145,178,0.5)] sm:h-10 sm:w-auto"
              >
                <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("hero.primaryCta")}
                </a>
              </AppButton>
              <AppButton variant="outline" asChild className="h-11 w-full border-slate-300/90 bg-white/60 sm:h-10 sm:w-auto">
                <Link href="/services">{t("hero.secondaryCta")}</Link>
              </AppButton>
            </div>
          </div>

          <div className="order-2 w-full min-w-0 self-stretch lg:order-none">
            <div
              className={cn(
                "relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.9rem] border border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/90",
                "shadow-[0_32px_88px_-48px_rgba(15,23,42,0.55),0_0_0_1px_rgba(8,145,178,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]",
                "ring-1 ring-inset ring-slate-900/[0.04]",
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0",
                  "bg-[radial-gradient(820px_420px_at_12%_8%,rgba(8,145,178,0.2),transparent_55%),radial-gradient(700px_380px_at_96%_8%,rgba(15,23,42,0.1),transparent_52%)]",
                )}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(8,145,178,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.1)_1px,transparent_1px)] [background-size:32px_32px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-6 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.2),transparent_62%)] blur-2xl"
                aria-hidden
              />

              <div className="relative flex flex-1 flex-col p-5 sm:p-6 md:p-7">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="min-w-0 flex-1 pr-1">
                    {panelEyebrow ? (
                      <p className="text-[0.65rem] font-bold uppercase leading-none tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.16em]">
                        {panelEyebrow}
                      </p>
                    ) : null}
                    <p
                      className={cn(
                        "text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-[1.0625rem] sm:leading-tight",
                        panelEyebrow ? "mt-2.5 sm:mt-3" : "mt-0",
                      )}
                    >
                      {t("hero.panel.title")}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-2.5 sm:text-[0.9375rem] sm:leading-[1.6]">
                      {t("hero.panel.description")}
                    </p>
                  </div>
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.07] text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] ring-1 ring-inset ring-primary/10">
                    <Workflow className="h-5 w-5" aria-hidden />
                  </span>
                </div>

                <div className="mt-5 grid min-h-0 flex-1 grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-3.5">
                  {panelItems.slice(0, 4).map((label, idx) => {
                    const Icon = PANEL_ICONS[idx] ?? ListChecks;
                    return (
                      <div
                        key={label}
                        className="group flex min-h-[4rem] rounded-2xl border border-slate-200/90 bg-white/70 p-3.5 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-slate-900/[0.03] transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-y-px hover:border-primary/22 hover:bg-white hover:shadow-[0_16px_40px_-28px_rgba(8,145,178,0.32)]"
                      >
                        <div className="flex w-full items-center gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/12 bg-slate-50/90 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] transition-colors group-hover:border-primary/20 group-hover:bg-primary/[0.06]">
                            <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} aria-hidden />
                          </span>
                          <p className="min-w-0 flex-1 text-left text-sm font-semibold leading-snug text-slate-800">
                            {label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PartnerCard({ t, partnerKey }: Props & { partnerKey: (typeof PARTNER_KEYS)[number] }) {
  const base = `partners.${partnerKey}`;
  const focus = readStringArray(t, `${base}.focus`);
  const name = t(`${base}.name`);
  const logoSrc = t(`${base}.logoSrc`);
  const initials = t(`${base}.initials`);
  const websiteUrl = t(`${base}.websiteUrl`);

  return (
    <article
      className={cn(
        "grid h-full min-h-0 grid-cols-1 gap-6 rounded-[1.85rem] border border-border/90 bg-background p-6 shadow-[0_26px_70px_-56px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-primary/[0.05] sm:gap-7 sm:p-7",
        "md:grid-cols-[1fr_200px] md:items-center md:gap-8 md:p-8",
        "lg:grid-cols-[1fr_220px] lg:gap-9",
      )}
    >
      <div className="order-2 flex min-h-0 min-w-0 flex-col md:order-1">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">{name}</h3>
        <p className="mt-2.5 text-[0.7rem] font-bold uppercase leading-snug tracking-[0.12em] text-primary/80 sm:tracking-[0.14em]">
          {t(`${base}.category`)}
        </p>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-3.5 sm:text-[0.9375rem] sm:leading-[1.62]">
          {t(`${base}.description`)}
        </p>
        <div
          className="my-4 h-px w-full bg-gradient-to-r from-border/0 via-border/80 to-border/0 sm:my-5"
          role="separator"
        />
        <ul className="space-y-2.5 sm:space-y-3">
          {focus.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-foreground/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 sm:mt-7">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-primary/18 bg-primary/[0.04] px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm shadow-primary/[0.04] transition-[color,box-shadow,background-color,border-color] hover:border-primary/28 hover:bg-primary/[0.07] hover:shadow-md hover:shadow-primary/[0.06]",
            )}
          >
            {t(`${base}.websiteCta`)}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/75" aria-hidden />
          </a>
        </div>
      </div>

      <div className="order-1 flex min-h-[9.5rem] w-full min-w-0 items-center justify-center self-center md:order-2 md:min-h-0">
        <PartnerLogoSlot src={logoSrc} alt={name} initials={initials} />
      </div>
    </article>
  );
}

function PartnersEcosystemSection({ t }: Props) {
  return (
    <section className="border-b border-border bg-[var(--section-tint)] py-12 sm:py-14" aria-labelledby="partners-ecosystem-heading">
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">{t("ecosystem.eyebrow")}</p>
        <h2
          id="partners-ecosystem-heading"
          className="mt-3 max-w-4xl text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("ecosystem.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
          {t("ecosystem.description")}
        </p>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {PARTNER_KEYS.map((key) => (
            <PartnerCard key={key} t={t} partnerKey={key} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PartnersModelSection({ t }: Props) {
  return (
    <section className="border-b border-border bg-background py-12 sm:py-14" aria-labelledby="partners-model-heading">
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">{t("model.eyebrow")}</p>
        <h2
          id="partners-model-heading"
          className="mt-3 max-w-4xl text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("model.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
          {t("model.intro")}
        </p>

        <div
          className={cn(
            "mt-8 overflow-hidden rounded-[1.5rem] border border-border/90",
            "bg-[var(--section-tint)]/80 shadow-[0_26px_70px_-64px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.05]",
          )}
        >
          <ol className="grid grid-cols-1 divide-y divide-border/70 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {MODEL_STEPS.map((stepId, index) => (
              <li key={stepId} className="flex min-h-0 min-w-0 flex-col p-5 sm:p-5 lg:min-h-[10rem] lg:py-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-background font-mono text-xs font-bold tabular-nums text-primary/90 sm:text-[0.8125rem]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 min-w-0 text-[0.95rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[1rem]">
                  {t(`model.${stepId}.title`)}
                </h3>
                <p className="mt-2.5 min-w-0 flex-1 text-sm leading-relaxed text-muted-foreground sm:leading-[1.55]">
                  {t(`model.${stepId}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function PartnersFinalCta({ t }: Props) {
  return (
    <section
      className="relative border-b border-border bg-primary py-12 text-primary-foreground sm:py-14"
      aria-labelledby="partners-final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0"
        aria-hidden
      />
      <Container className="relative max-w-3xl text-center">
        <h2 id="partners-final-cta-heading" className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("finalCta.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/88 sm:text-lg sm:leading-[1.65]">
          {t("finalCta.description")}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row sm:gap-4">
          <AppButton
            asChild
            className="w-full border-transparent bg-primary-foreground text-primary shadow-md shadow-black/10 hover:bg-primary-foreground hover:shadow-lg sm:w-auto"
          >
            <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("finalCta.primaryCta")}
            </a>
          </AppButton>
          <AppButton
            variant="outline"
            asChild
            className="w-full border-primary-foreground/50 bg-transparent text-primary-foreground shadow-none hover:border-accent hover:bg-accent/15 hover:text-primary-foreground sm:w-auto"
          >
            <Link href="/contact">{t("finalCta.secondaryCta")}</Link>
          </AppButton>
        </div>
      </Container>
    </section>
  );
}

export function PartnersPage({ t }: Props) {
  return (
    <>
      <PartnersHero t={t} />
      <PartnersEcosystemSection t={t} />
      <PartnersModelSection t={t} />
      <PartnersFinalCta t={t} />
    </>
  );
}
