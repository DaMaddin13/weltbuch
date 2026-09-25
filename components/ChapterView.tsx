import Link from "next/link";
import type { Chapter } from "@/lib/types";
import { formatDate } from "@/lib/chapters";

export function ChapterView({
  chapter,
  prevSlug,
  nextSlug
}: {
  chapter: Chapter;
  prevSlug?: string;
  nextSlug?: string;
}) {
  return (
    <>
      <section className="hero">
        <img className="cover" src="/assets/cover.jpg" alt="" />
        <div className="hero-copy">
          <div className="kicker">Die fortlaufende Geschichte unserer Zeit</div>
          <h1>{chapter.title}</h1>
          <p className="lede">{chapter.lede || chapter.subtitle}</p>
          <div className="meta">
            <span>{formatDate(chapter.date, chapter.weekday)}</span>
            <span>Kapitel {chapter.number}</span>
            <span>Lesezeit {chapter.readMinutes} Minuten</span>
          </div>
          <a className="cta" href="#kapitel">
            Kapitel lesen
          </a>
        </div>
      </section>

      <div className="wrap">
        <div className="layout">
          <main className="page" id="kapitel">
            <div className="chapter-head">
              <div className="orn">✦ &nbsp; {chapter.date.split("-").reverse().join(".")} &nbsp; ✦</div>
              <h2>{chapter.title}</h2>
              {chapter.subtitle ? <div className="sub">{chapter.subtitle}</div> : null}
            </div>
            <article className="prose" dangerouslySetInnerHTML={{ __html: chapter.body }} />
            <p className="chapter-end">ENDE DES HEUTIGEN KAPITELS</p>
            <div className="day-nav">
              {prevSlug ? <Link href={`/kapitel/${prevSlug}`}>← Voriger Tag</Link> : <span />}
              {nextSlug ? <Link href={`/kapitel/${nextSlug}`}>Nächster Tag →</Link> : <span />}
            </div>
          </main>

          <aside className="side">
            <div className="card">
              <h4>Laufende Stränge</h4>
              {chapter.threads.map((t) => (
                <div className="thread" key={t.id}>
                  <span>{t.since}</span>
                  <b>{t.title}</b>
                  <div className="summary">{t.summary}</div>
                  <div className="pill">{t.status}</div>
                </div>
              ))}
            </div>
            <div className="card">
              <h4>Lesehinweis</h4>
              <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>
                Die erzählerische Form verdichtet. Sie erfindet keine Ereignisse.
                Jede nummerierte Marke führt zu einer veröffentlichten Quelle.
                Humor trifft Macht, nicht Opfer.
              </p>
            </div>
            {chapter.yesterday ? (
              <div className="card">
                <h4>Gestern</h4>
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
            <h2 className="section-title">Figuren dieser Tage</h2>
            <div className="grid-3">
              {chapter.figures.map((f) => (
                <div className="fig" key={f.name}>
                  <div className="role">{f.role}</div>
                  <h5>{f.name}</h5>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {chapter.sources.length > 0 ? (
          <>
            <h2 className="section-title" id="quellen">
              Quellenanhang
            </h2>
            <div className="sources">
              <h3>Woraus dieses Kapitel gezogen wurde</h3>
              <p className="intro">
                Keine Szene ohne Beleg. Die literarische Stimme ordnet, sie ersetzt die Reporter nicht.
              </p>
              <ol>
                {chapter.sources.map((s) => (
                  <li id={s.id} key={s.id}>
                    {s.text}{" "}
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        Quelle
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
