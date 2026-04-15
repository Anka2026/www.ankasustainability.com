export const ABOUT_PROCESS_KEYS = [
  "assessment",
  "structuring",
  "delivery",
  "ongoingSupport",
] as const;

export type AboutProcessStepId = (typeof ABOUT_PROCESS_KEYS)[number];
