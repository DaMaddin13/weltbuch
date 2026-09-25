import Link from "next/link";
import { Chrome, Footer } from "@/components/Chrome";
import { formatDate, getAllChapters } from "@/lib/chapters";

export default function ArchivPage() {
  const chapters = getAllChapters();
  return (
    <>
      <Chrome active="archiv" />
      <div className="page-hero">
        <h1>Archiv der Tage</h1>
        <p>Jedes Datum ein Kapitel. Das Neueste steht oben.</p>
      </div>
      <div className="wrap">
        <div className="archive-list">
          {chapters.map((c, i) => (
            <Link className="archive-item" href={i === 0 ? "/" : `/kapitel/${c.slug}`} key={c.slug}>
              <div className="d">{formatDate(c.date, c.weekday)}</div>
              <div>
                <h3>{c.title}</h3>
                <p>{c.subtitle}</p>
              </div>
              <div className="min">{c.readMinutes} Min · Kap. {c.number}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
