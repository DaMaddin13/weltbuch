"use client";

import { useState } from "react";
import { t, type Lang } from "@/lib/i18n";

export function ShareChapter({
  title,
  date,
  lang = "de",
  className = "share-btn"
}: {
  title: string;
  date: string;
  lang?: Lang;
  className?: string;
}) {
  const [note, setNote] = useState("");

  async function share() {
    const url = window.location.href.split("#")[0];
    const text = `${title} — WELTBUCH, ${date}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "WELTBUCH", text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setNote(t(lang, "copied"));
    } catch {
      setNote("");
    }
    window.setTimeout(() => setNote(""), 2000);
  }

  return (
    <button type="button" className={className} onClick={share}>
      {note || t(lang, "share")}
    </button>
  );
}
