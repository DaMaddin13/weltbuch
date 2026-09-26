import { cookies } from "next/headers";
import type { Lang } from "./i18n";

export async function getLang(): Promise<Lang> {
  const value = (await cookies()).get("weltbuch-lang")?.value;
  return value === "en" ? "en" : "de";
}
