import { notFound } from "next/navigation";
import { Chrome, Footer } from "@/components/Chrome";
import { ChapterView } from "@/components/ChapterView";
import { getAllChapters, getChapter, localizeChapter } from "@/lib/chapters";
import { getLang } from "@/lib/locale";

export function generateStaticParams() {
  return getAllChapters().map((c) => ({ slug: c.slug }));
}

export default async function KapitelPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const lang = await getLang();
  const { slug } = await params;
  const raw = getChapter(slug);
  if (!raw) notFound();
  const chapter = localizeChapter(raw, lang);
  const all = getAllChapters();
  const idx = all.findIndex((c) => c.slug === slug);
  const newer = all[idx - 1];
  const older = all[idx + 1];
  return (
    <>
      <Chrome active={idx === 0 ? "heute" : "archiv"} lang={lang} />
      <ChapterView chapter={chapter} prevSlug={older?.slug} nextSlug={newer?.slug} lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
