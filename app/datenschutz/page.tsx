import { Chrome, Footer } from "@/components/Chrome";
import { getLang } from "@/lib/locale";

export default async function DatenschutzPage() {
  const lang = await getLang();
  const en = lang === "en";
  return (
    <>
      <Chrome active="datenschutz" lang={lang} />
      <div className="page-hero">
        <h1>{en ? "Privacy" : "Datenschutz"}</h1>
        <p>{en ? "Information under Art. 13 GDPR" : "Informationen nach Art. 13 DSGVO"}</p>
      </div>
      <div className="wrap">
        <div className="legal">
          <h2>{en ? "Controller" : "Verantwortlicher"}</h2>
          <p>
            Martin Hofer
            <br />
            Wintergasse 30
            <br />
            3002 Purkersdorf
            <br />
            {en ? "Austria" : "Österreich"}
            <br />
            E-Mail:{" "}
            <a href="mailto:martin.hofer1304@gmail.com">martin.hofer1304@gmail.com</a>
          </p>

          <h2>{en ? "What this notice covers" : "Worüber diese Erklärung spricht"}</h2>
          <p>
            {en
              ? "This site has no user account, no contact form, no newsletter and no analytics pixel. No marketing cookies are set. A consent banner is therefore not required."
              : "Diese Seite hat kein Nutzerkonto, kein Kontaktformular, keinen Newsletter und kein Analyse-Pixel. Es werden keine Marketing-Cookies gesetzt. Ein Einwilligungsbanner ist daher nicht erforderlich."}
          </p>
          <p>
            {en
              ? "A single functional cookie (weltbuch-lang) stores the language choice. It is not used for tracking."
              : "Ein einziges Funktions-Cookie (weltbuch-lang) speichert die Sprachwahl. Es dient nicht der Werbung."}
          </p>

          <h2>{en ? "What data arise" : "Welche Daten anfallen"}</h2>
          <p>
            {en
              ? "When the site is called, the host automatically records technical logs, including IP address, time, requested address, browser type and referrer. This is ordinary, so the page can be delivered and protected against abuse. Legal basis: legitimate interest in operating the site (Art. 6(1)(f) GDPR)."
              : "Beim Aufruf erhebt der Hoster automatisch technische Protokolldaten, darunter IP-Adresse, Zeitpunkt, aufgerufene Adresse, Browsertyp und Referrer. Das ist üblich, damit die Seite ausgeliefert und gegen Missbrauch geschützt werden kann. Rechtsgrundlage: berechtigtes Interesse am Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO)."}
          </p>

          <h2>Hosting</h2>
          <p>
            {en
              ? "The site is provided via Vercel Inc. (USA). Technical data may be transferred to the United States. Vercel relies on standard contractual clauses. Details are in Vercel’s privacy notice."
              : "Die Seite wird über Vercel Inc. (USA) bereitgestellt. Dabei können technische Daten in die USA übermittelt werden. Vercel stützt solche Übermittlungen auf Standardvertragsklauseln. Einzelheiten stehen in den Datenschutzhinweisen von Vercel."}
          </p>

          <h2>{en ? "Fonts" : "Schriften"}</h2>
          <p>
            {en
              ? "Fonts are loaded from Google Fonts. Google may receive the visitor’s IP address. Legal basis: legitimate interest in a consistent presentation (Art. 6(1)(f) GDPR)."
              : "Zur Darstellung werden Schriftarten von Google Fonts geladen. Dabei kann Google die IP-Adresse des Aufrufs erhalten. Rechtsgrundlage: berechtigtes Interesse an einer einheitlichen Darstellung (Art. 6 Abs. 1 lit. f DSGVO)."}
          </p>

          <h2>{en ? "Retention" : "Speicherdauer"}</h2>
          <p>
            {en
              ? "Server logs are kept by the host only as long as needed for operation and security, then deleted or anonymised."
              : "Serverprotokolle werden vom Hoster nur so lange gehalten, wie sie für Betrieb und Sicherheit nötig sind, danach gelöscht oder anonymisiert."}
          </p>

          <h2>{en ? "Your rights" : "Ihre Rechte"}</h2>
          <p>
            {en
              ? "You may request access, rectification, erasure, restriction of processing, data portability and objection. You also have the right to lodge a complaint with the competent supervisory authority — in Austria the Datenschutzbehörde, in Germany the authority of the relevant federal state."
              : "Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch verlangen. Außerdem besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsicht — in Österreich die Datenschutzbehörde, in Deutschland die Aufsicht des jeweiligen Bundeslandes."}
          </p>

          <h2>{en ? "No automated decision" : "Keine automatisierte Entscheidung"}</h2>
          <p>
            {en
              ? "There is no profiling and no automated decision within the meaning of Art. 22 GDPR."
              : "Es findet kein Profiling und keine automatisierte Entscheidung im Sinne von Art. 22 DSGVO statt."}
          </p>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
