"use client";

import { useState } from "react";

export function ShareChapter({
  title,
  date,
  className = "share-btn"
}: {
  title: string;
  date: string;
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
      setNote("Link kopiert");
    } catch {
      setNote("");
    }
    window.setTimeout(() => setNote(""), 2000);
  }

  return (
    <button type="button" className={className} onClick={share}>
      {note || "Kapitel teilen"}
    </button>
  );
}
