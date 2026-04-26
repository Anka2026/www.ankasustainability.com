/**
 * Canonical company identifiers for mailto, structured data, and shared UI.
 * `COMPANY_LINKEDIN_URL` — set when the public company LinkedIn is confirmed; leave
 * empty to hide LinkedIn lines across the site.
 */
export const COMPANY_EMAIL = "info@ankasustainability.com" as const;
export const COMPANY_KVK = "99787784" as const;
export const COMPANY_BOOKING_URL =
  "https://calendar.app.google/csQXoNF7bwacYNDJ7" as const;

/** Registered legal name; keep in sync with footer and statutory filings. */
export const COMPANY_LEGAL_NAME =
  "ANKA Sustainability Consulting B.V." as const;

/** Trade register line; must read exactly `KvK:` on every locale (Dutch Kamer van Koophandel). */
export const COMPANY_KVK_LINE = `KvK: ${COMPANY_KVK}` as const;

/** LinkedIn label shown next to the company LinkedIn link. */
export const COMPANY_LINKEDIN_LABEL = "LinkedIn: ANKA Sustainability" as const;

export const COMPANY_LINKEDIN_URL =
  "https://www.linkedin.com/company/ankadanismanlik/" as const;

export const FOUNDER_LINKEDIN_URL =
  "https://www.linkedin.com/in/burcu-%C5%9Fim%C5%9Fek-53556612a/" as const;
