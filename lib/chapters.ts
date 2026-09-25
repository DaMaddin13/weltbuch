import fs from "fs";
import path from "path";
import type { Chapter } from "./types";

const DIR = path.join(process.cwd(), "content", "chapters");

export function getAllChapters(): Chapter[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const data = JSON.parse(raw) as Omit<Chapter, "slug">;
      return { ...data, slug: file.replace(/\.json$/, "") };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatestChapter(): Chapter | null {
  return getAllChapters()[0] ?? null;
}

export function getChapter(slug: string): Chapter | null {
  return getAllChapters().find((c) => c.slug === slug) ?? null;
}

export function formatDate(iso: string, weekday?: string) {
  const d = new Date(`${iso}T12:00:00`);
  const date = d.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return weekday ? `${weekday}, ${date}` : date;
}
