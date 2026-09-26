import Link from "next/link";
import { Chrome, Footer } from "@/components/Chrome";
import { formatDate, getAllChapters, localizeChapter } from "@/lib/chapters";
import { getLang } from "@/lib/locale";
import { t } from "@/lib/i18n";

export default async function ArchivPage() {
  const lang = await getLang();
  const chapters = getAllChapters().map((c) => localizeChapter(c, lang));
  return (
    <>
      <Chrome active="archiv" lang={lang} />
      <div className="page-hero">
        <h1>{t(lang, "archiveTitle")}</h1>
        <p>{t(lang, "archiveLead")}</p>
      </div>
      <div className="wrap">
        <div className="archive-list">
          {chapters.map((c, i) => (
            <Link className="archive-item" href={i === 0 ? "/" : `/kapitel/${c.slug}`} key={c.slug}>
              <div className="d">{formatDate(c.date, c.weekday, lang)}</div>
              <div>
                <h3>{c.title}</h3>
                <p>{c.subtitle}</p>
              </div>
              <div className="min">
                {c.readMinutes} {t(lang, "minShort")} · {t(lang, "chapter")} {c.number}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
