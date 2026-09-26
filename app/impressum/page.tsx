import { Chrome, Footer } from "@/components/Chrome";
import { getLang } from "@/lib/locale";

export default async function ImpressumPage() {
  const lang = await getLang();
  const en = lang === "en";
  return (
    <>
      <Chrome active="impressum" lang={lang} />
      <div className="page-hero">
        <h1>{en ? "Imprint" : "Impressum"}</h1>
        <p>{en ? "Information required under German and Austrian media law" : "Angaben gemäß § 5 DDG und § 18 MStV"}</p>
      </div>
      <div className="wrap">
        <div className="legal">
          <h2>{en ? "Publisher" : "Anbieter"}</h2>
          <p>
            Martin Hofer
            <br />
            Wintergasse 30
            <br />
            3002 Purkersdorf
            <br />
            {en ? "Austria" : "Österreich"}
          </p>
          <p>
            E-Mail:{" "}
            <a href="mailto:martin.hofer1304@gmail.com">martin.hofer1304@gmail.com</a>
          </p>
          <p>{en ? "This website is operated by a private individual." : "Diese Website wird von einer Privatperson betrieben."}</p>

          <h2>{en ? "Responsible for content" : "Verantwortlich für den Inhalt"}</h2>
          <p>
            Martin Hofer
            <br />
            Wintergasse 30
            <br />
            3002 Purkersdorf
          </p>

          <h2>{en ? "About the offering" : "Hinweis zum Angebot"}</h2>
          <p>
            {en
              ? "WELTBUCH is a literary daily chronicle of publicly available news. It is not a newspaper. The narrative form condenses; the underlying reports are listed in each chapter’s sources."
              : "WELTBUCH ist eine literarische Tageschronik öffentlich zugänglicher Nachrichten. Sie ersetzt keine Zeitung. Die erzählerische Form verdichtet; die zugrunde liegenden Meldungen sind im Quellenanhang jedes Kapitels ausgewiesen."}
          </p>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
