import Link from "next/link";
import Image from "next/image";
import type { Chapter } from "@/lib/types";
import { formatDate } from "@/lib/chapters";
import { ShareChapter } from "@/components/ShareChapter";
import { t, type Lang } from "@/lib/i18n";

function openLine(chapter: Chapter) {
  if (chapter.openTomorrow) return chapter.openTomorrow;
  const marked = chapter.threads.filter((thread) =>
    /offen|open|frist|deadline|unterwegs|en route|andauernd|ongoing/i.test(thread.status)
  );
  const pick = (marked.length ? marked : chapter.threads).slice(0, 3);
  return pick.map((thread) => thread.title).join(" · ");
}

export function ChapterView({
  chapter,
  prevSlug,
  nextSlug,
  lang = "de"
}: {
  chapter: Chapter;
  prevSlug?: string;
  nextSlug?: string;
  lang?: Lang;
}) {
  const today = formatDate(chapter.date, chapter.weekday, lang);

  return (
    <>
      <section className="hero">
        <Image
          className="cover"
          src="/assets/cover.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-copy">
          <div className="kicker">{t(lang, "kicker")}</div>
          <h1>{chapter.title}</h1>
          <p className="lede">{chapter.lede || chapter.subtitle}</p>
          <div className="meta">
            <span>{today}</span>
            <span>
              {t(lang, "chapter")} {chapter.number}
            </span>
            <span>
              {t(lang, "readTime")} {chapter.readMinutes} {t(lang, "minutes")}
            </span>
          </div>
          <div className="hero-actions">
            <a className="cta" href="#kapitel">
              {t(lang, "readChapter")}
            </a>
            <ShareChapter title={chapter.title} date={today} lang={lang} className="cta cta-quiet" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="layout">
          <main className="page">
            <ol className="ribbon" id="kapitel">
              {chapter.yesterday ? (
                <li>
                  <span>{t(lang, "yesterday")}</span>
                  <b>{chapter.yesterday.teaser || chapter.yesterday.title}</b>
                </li>
              ) : null}
              <li>
                <span>{t(lang, "todayRibbon")}</span>
                <b>{chapter.lede || chapter.subtitle}</b>
              </li>
              <li>
                <span>{t(lang, "openTomorrow")}</span>
                <b>{openLine(chapter)}</b>
              </li>
            </ol>
            <div className="chapter-head">
              <div className="orn">✦ &nbsp; {chapter.date.split("-").reverse().join(".")} &nbsp; ✦</div>
              <h2>{chapter.title}</h2>
              {chapter.subtitle ? <div className="sub">{chapter.subtitle}</div> : null}
            </div>
            <article className="prose" dangerouslySetInnerHTML={{ __html: chapter.body }} />
            <p className="chapter-end">{t(lang, "chapterEnd")}</p>
            <div className="afterword">
              <p>
                {t(lang, "threadsRemain")}: {openLine(chapter)}.
              </p>
              <ShareChapter title={chapter.title} date={today} lang={lang} />
            </div>
            <div className="day-nav">
              {prevSlug ? <Link href={`/kapitel/${prevSlug}`}>{t(lang, "prevDay")}</Link> : <span />}
              {nextSlug ? <Link href={`/kapitel/${nextSlug}`}>{t(lang, "nextDay")}</Link> : <span />}
            </div>
          </main>

          <aside className="side">
            <div className="card">
              <h4>{t(lang, "runningThreads")}</h4>
              {chapter.threads.map((thread) => (
                <div className="thread" key={thread.id}>
                  <span>{thread.since}</span>
                  <b>{thread.title}</b>
                  <div className="summary">{thread.summary}</div>
                  <div className="pill">{thread.status}</div>
                </div>
              ))}
            </div>
            <div className="card">
              <h4>{t(lang, "readingNote")}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>{t(lang, "readingNoteText")}</p>
            </div>
            {chapter.yesterday ? (
              <div className="card">
                <h4>{t(lang, "yesterday")}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>
                  <i>{chapter.yesterday.title}</i>
                  <br />
                  {chapter.yesterday.teaser}
                </p>
              </div>
            ) : null}
          </aside>
        </div>

        {chapter.figures.length > 0 ? (
          <>
            <h2 className="section-title">{t(lang, "figures")}</h2>
            <div className="grid-3">
              {chapter.figures.map((figure) => (
                <div className="fig" key={figure.name}>
                  <div className="role">{figure.role}</div>
                  <h5>{figure.name}</h5>
                  <p>{figure.text}</p>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {chapter.sources.length > 0 ? (
          <>
            <h2 className="section-title" id="quellen">
              {t(lang, "sources")}
            </h2>
            <div className="sources">
              <h3>{t(lang, "sourcesLead")}</h3>
              <p className="intro">{t(lang, "sourcesIntro")}</p>
              <ol>
                {chapter.sources.map((source) => (
                  <li id={source.id} key={source.id}>
                    {source.text}{" "}
                    {source.url ? (
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {t(lang, "sourceLink")}
                      </a>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
