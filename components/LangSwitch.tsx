"use client";

import type { Lang } from "@/lib/i18n";

export function LangSwitch({ lang }: { lang: Lang }) {
  function setLang(next: Lang) {
    document.cookie = `weltbuch-lang=${next}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  }

  return (
    <span className="lang-switch" role="group" aria-label="Language">
      <button type="button" className={lang === "de" ? "on" : ""} onClick={() => setLang("de")}>
        DE
      </button>
      <button type="button" className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>
        EN
      </button>
    </span>
  );
}
