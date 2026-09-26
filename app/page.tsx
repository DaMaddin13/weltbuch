import { Chrome, Footer } from "@/components/Chrome";
import { ChapterView } from "@/components/ChapterView";
import { getAllChapters, getLatestChapter, localizeChapter } from "@/lib/chapters";
import { getLang } from "@/lib/locale";
import { t } from "@/lib/i18n";

export default async function HomePage() {
  const lang = await getLang();
  const raw = getLatestChapter();
  const all = getAllChapters();
  if (!raw) {
    return (
      <>
        <Chrome active="heute" lang={lang} />
        <div className="page-hero">
          <h1>{t(lang, "noChapter")}</h1>
        </div>
        <Footer lang={lang} />
      </>
    );
  }
  const chapter = localizeChapter(raw, lang);
  const idx = all.findIndex((c) => c.slug === chapter.slug);
  const older = all[idx + 1];
  return (
    <>
      <Chrome active="heute" lang={lang} />
      <ChapterView chapter={chapter} prevSlug={older?.slug} lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
