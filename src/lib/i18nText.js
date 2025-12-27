export function getText(value, lang = "en") {
  if (!value) return "";
  if (typeof value === "string") return value;

  const l = (lang || "en").toLowerCase();
  const normalized = l.startsWith("fa") ? "fa" : "en";

  return value?.[normalized] || value?.en || value?.fa || "";
}
