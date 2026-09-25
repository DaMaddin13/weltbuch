import { Chrome, Footer } from "@/components/Chrome";

export default function DatenschutzPage() {
  return (
    <>
      <Chrome active="datenschutz" />
      <div className="page-hero">
        <h1>Datenschutz</h1>
        <p>Informationen nach Art. 13 DSGVO</p>
      </div>
      <div className="wrap">
        <div className="legal">
          <h2>Verantwortlicher</h2>
          <p>
            Martin Hofer
            <br />
            Wintergasse 30
            <br />
            3002 Purkersdorf
            <br />
            Österreich
            <br />
            E-Mail:{" "}
            <a href="mailto:martin.hofer1304@gmail.com">martin.hofer1304@gmail.com</a>
          </p>

          <h2>Worüber diese Erklärung spricht</h2>
          <p>
            Diese Seite hat kein Nutzerkonto, kein Kontaktformular, keinen Newsletter
            und kein Analyse-Pixel. Es werden keine Marketing-Cookies gesetzt. Ein
            Einwilligungsbanner ist daher nicht erforderlich.
          </p>

          <h2>Welche Daten anfallen</h2>
          <p>
            Beim Aufruf erhebt der Hoster automatisch technische Protokolldaten, darunter
            IP-Adresse, Zeitpunkt, aufgerufene Adresse, Browsertyp und Referrer. Das ist
            üblich, damit die Seite ausgeliefert und gegen Missbrauch geschützt werden
            kann. Rechtsgrundlage: berechtigtes Interesse am Betrieb der Website
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2>Hosting</h2>
          <p>
            Die Seite wird über Vercel Inc. (USA) bereitgestellt. Dabei können
            technische Daten in die USA übermittelt werden. Vercel stützt solche
            Übermittlungen auf Standardvertragsklauseln. Einzelheiten stehen in den
            Datenschutzhinweisen von Vercel.
          </p>

          <h2>Schriften</h2>
          <p>
            Zur Darstellung werden Schriftarten von Google Fonts geladen. Dabei kann
            Google die IP-Adresse des Aufrufs erhalten. Rechtsgrundlage: berechtigtes
            Interesse an einer einheitlichen Darstellung (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2>Speicherdauer</h2>
          <p>
            Serverprotokolle werden vom Hoster nur so lange gehalten, wie sie für Betrieb
            und Sicherheit nötig sind, danach gelöscht oder anonymisiert.
          </p>

          <h2>Ihre Rechte</h2>
          <p>
            Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch verlangen. Außerdem besteht ein
            Beschwerderecht bei der zuständigen Datenschutzaufsicht — in Österreich die
            Datenschutzbehörde, in Deutschland die Aufsicht des jeweiligen Bundeslandes.
          </p>

          <h2>Keine automatisierte Entscheidung</h2>
          <p>
            Es findet kein Profiling und keine automatisierte Entscheidung im Sinne von
            Art. 22 DSGVO statt.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
