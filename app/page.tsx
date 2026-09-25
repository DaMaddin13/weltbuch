import { Chrome, Footer } from "@/components/Chrome";
import { ChapterView } from "@/components/ChapterView";
import { getAllChapters, getLatestChapter } from "@/lib/chapters";

export default function HomePage() {
  const chapter = getLatestChapter();
  const all = getAllChapters();
  if (!chapter) {
    return (
      <>
        <Chrome active="heute" />
        <div className="page-hero">
          <h1>Noch kein Kapitel.</h1>
        </div>
        <Footer />
      </>
    );
  }
  const idx = all.findIndex((c) => c.slug === chapter.slug);
  const older = all[idx + 1];
  return (
    <>
      <Chrome active="heute" />
      <ChapterView chapter={chapter} prevSlug={older?.slug} />
      <Footer />
    </>
  );
}
