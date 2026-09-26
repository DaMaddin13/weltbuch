import fs from "fs";
import path from "path";
import type { Chapter, ChapterCopy } from "./types";
import type { Lang } from "./i18n";

const DIR = path.join(process.cwd(), "content", "chapters");

export function getAllChapters(): Chapter[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_") && !f.endsWith(".en.json"))
    .map((file) => {
      const slug = file.replace(/\.json$/, "");
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const data = JSON.parse(raw) as Omit<Chapter, "slug">;
      const enFile = path.join(DIR, `${slug}.en.json`);
      let en: ChapterCopy | undefined;
      if (fs.existsSync(enFile)) {
        en = JSON.parse(fs.readFileSync(enFile, "utf8")) as ChapterCopy;
      }
      return { ...data, slug, en };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatestChapter(): Chapter | null {
  return getAllChapters()[0] ?? null;
}

export function getChapter(slug: string): Chapter | null {
  return getAllChapters().find((c) => c.slug === slug) ?? null;
}

export function localizeChapter(chapter: Chapter, lang: Lang): Chapter {
  if (lang !== "en" || !chapter.en) return chapter;
  const en = chapter.en;
  return {
    ...chapter,
    weekday: en.weekday ?? chapter.weekday,
    title: en.title ?? chapter.title,
    subtitle: en.subtitle ?? chapter.subtitle,
    lede: en.lede ?? chapter.lede,
    body: en.body ?? chapter.body,
    threads: en.threads ?? chapter.threads,
    figures: en.figures ?? chapter.figures,
    sources: en.sources ?? chapter.sources,
    yesterday: en.yesterday ?? chapter.yesterday,
    openTomorrow: en.openTomorrow ?? chapter.openTomorrow
  };
}

export function formatDate(iso: string, weekday?: string, lang: Lang = "de") {
  const d = new Date(`${iso}T12:00:00`);
  const date = d.toLocaleDateString(lang === "en" ? "en-GB" : "de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return weekday ? `${weekday}, ${date}` : date;
}
