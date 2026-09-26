import { Chrome, Footer } from "@/components/Chrome";
import { getLang } from "@/lib/locale";
import { t } from "@/lib/i18n";

export default async function MethodePage() {
  const lang = await getLang();
  const en = lang === "en";
  return (
    <>
      <Chrome active="methode" lang={lang} />
      <div className="page-hero">
        <h1>{t(lang, "methodTitle")}</h1>
        <p>{t(lang, "methodLead")}</p>
      </div>
      <div className="wrap">
        <div className="how">
          <p>
            {en
              ? "Each night a run reads selected major and quality sources: wire services, large dailies, public broadcasters, the Wikipedia current-events desk as a situation picture, plus regional sources so that Washington and Beijing are not the only cities on the map."
              : "Jede Nacht liest ein Lauf ausgewählte Haupt- und Qualitätsquellen: Agenturen, große Tageszeitungen, öffentlich-rechtliche Sender, das Wikipedia-Tagesportal als Lagebild, dazu Regionalquellen, damit nicht nur Washington und Peking vorkommen."}
          </p>
          <div className="steps">
            <div className="step">
              <b>{en ? "1. Gather" : "1. Einsammeln"}</b>
              {en
                ? "Dozens of lead pieces, ordered by region and theme. No single feed decides."
                : "Mehrere Dutzend Leitartikel, nach Region und Thema geordnet. Kein einzelner Feed entscheidet."}
            </div>
            <div className="step">
              <b>{en ? "2. Weigh" : "2. Wägen"}</b>
              {en
                ? "What continues yesterday’s threads? What is new, what is merely loud? Casualty figures must not vanish behind celebrity."
                : "Was setzt gestrige Stränge fort? Was ist neu, was nur laut? Opferzahlen dürfen nicht hinter Prominenz verschwinden."}
            </div>
            <div className="step">
              <b>{en ? "3. Tell" : "3. Erzählen"}</b>
              {en
                ? "One chapter, not a press review. Recurring stages, so continuity can grow. Five to fifteen minutes."
                : "Ein Kapitel, keine Presseschau. Wiederkehrende Schauplätze, damit Kontinuität entsteht. 5–15 Minuten."}
            </div>
            <div className="step">
              <b>{en ? "4. Bind" : "4. Binden"}</b>
              {en
                ? "Every factual turn receives a source. The text may sharpen; it may not invent."
                : "Jede faktische Wendung bekommt eine Quelle. Der Text darf zuspitzen, nicht erfinden."}
            </div>
          </div>
        </div>
        <h2 className="section-title">{en ? "What this means to be — and what not" : "Was das sein will — und was nicht"}</h2>
        <div className="manifest">
          <p>
            <b style={{ color: "var(--gold-lite)" }}>{en ? "Not" : "Nicht"}</b>{" "}
            {en
              ? "a substitute for journalism. Anyone who opens the sources after the chapter has understood the real service."
              : "ein Ersatz für Journalismus. Wer nach dem Kapitel die Quellen öffnet, hat den eigentlichen Dienst verstanden."}
          </p>
          <p>
            <b style={{ color: "var(--gold-lite)" }}>{en ? "But" : "Doch"}</b>{" "}
            {en
              ? "an antidote to the feed’s fragmentation: instead of twenty headlines without connection, a continuing book."
              : "ein Gegenmittel gegen die Feed-Zerlegung: statt zwanzig Headlines ohne Zusammenhang ein fortlaufendes Buch."}
          </p>
          <p>
            <b style={{ color: "var(--gold-lite)" }}>{en ? "Tone." : "Ton."}</b>{" "}
            {en
              ? "Literary, occasionally bright where power celebrates itself. Serious where people die. No jokes over graves."
              : "Literarisch, gelegentlich hell, wo Macht sich selbst feiert. Ernst, wo Menschen sterben. Keine Witze über Gräber."}
          </p>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
