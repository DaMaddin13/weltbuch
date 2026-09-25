import { notFound } from "next/navigation";
import { Chrome, Footer } from "@/components/Chrome";
import { ChapterView } from "@/components/ChapterView";
import { getAllChapters, getChapter } from "@/lib/chapters";

export function generateStaticParams() {
  return getAllChapters().map((c) => ({ slug: c.slug }));
}

export default async function KapitelPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  const all = getAllChapters();
  const idx = all.findIndex((c) => c.slug === slug);
  const newer = all[idx - 1];
  const older = all[idx + 1];
  return (
    <>
      <Chrome active={idx === 0 ? "heute" : "archiv"} />
      <ChapterView chapter={chapter} prevSlug={older?.slug} nextSlug={newer?.slug} />
      <Footer />
    </>
  );
}
