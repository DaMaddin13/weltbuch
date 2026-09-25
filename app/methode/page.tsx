import { Chrome, Footer } from "@/components/Chrome";

export default function MethodePage() {
  return (
    <>
      <Chrome active="methode" />
      <div className="page-hero">
        <h1>Wie das Weltbuch entsteht</h1>
        <p>Ein Kapitel am Tag. Fünf bis fünfzehn Minuten. Quellen darunter.</p>
      </div>
      <div className="wrap">
        <div className="how">
          <p>
            Jede Nacht liest ein Lauf ausgewählte Haupt- und Qualitätsquellen: Agenturen,
            große Tageszeitungen, öffentlich-rechtliche Sender, das Wikipedia-Tagesportal
            als Lagebild, dazu Regionalquellen, damit nicht nur Washington und Peking vorkommen.
          </p>
          <div className="steps">
            <div className="step">
              <b>1. Einsammeln</b>
              Mehrere Dutzend Leitartikel, nach Region und Thema geordnet. Kein einzelner Feed entscheidet.
            </div>
            <div className="step">
              <b>2. Wägen</b>
              Was setzt gestrige Stränge fort? Was ist neu, was nur laut? Opferzahlen dürfen nicht hinter Prominenz verschwinden.
            </div>
            <div className="step">
              <b>3. Erzählen</b>
              Ein Kapitel, keine Presseschau. Wiederkehrende Schauplätze, damit Kontinuität entsteht. 5–15 Minuten.
            </div>
            <div className="step">
              <b>4. Binden</b>
              Jede faktische Wendung bekommt eine Quelle. Der Text darf zuspitzen, nicht erfinden.
            </div>
          </div>
        </div>
        <h2 className="section-title">Was das sein will — und was nicht</h2>
        <div className="manifest">
          <p>
            <b style={{ color: "var(--gold-lite)" }}>Nicht</b> ein Ersatz für Journalismus.
            Wer nach dem Kapitel die Quellen öffnet, hat den eigentlichen Dienst verstanden.
          </p>
          <p>
            <b style={{ color: "var(--gold-lite)" }}>Doch</b> ein Gegenmittel gegen die Feed-Zerlegung:
            statt zwanzig Headlines ohne Zusammenhang ein fortlaufendes Buch.
          </p>
          <p>
            <b style={{ color: "var(--gold-lite)" }}>Ton.</b> Literarisch, gelegentlich hell, wo Macht
            sich selbst feiert. Ernst, wo Menschen sterben. Keine Witze über Gräber.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
