export type JsonObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Deep-merge plain objects. Arrays and primitives from `patch` replace `base`.
 * Intended for merging small locale message patches into the main JSON bundle.
 */
export function deepMergeMessages(base: JsonObject, patch: JsonObject): JsonObject {
  const out: JsonObject = { ...base };

  for (const [key, patchValue] of Object.entries(patch)) {
    const baseValue = out[key];

    if (isPlainObject(baseValue) && isPlainObject(patchValue)) {
      out[key] = deepMergeMessages(baseValue, patchValue);
      continue;
    }

    out[key] = patchValue;
  }

  return out;
}
