import type { getTranslations } from "next-intl/server";

/** Return type of `await getTranslations(...)` for section components. */
export type IntlTranslator = Awaited<ReturnType<typeof getTranslations>>;
