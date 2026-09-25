import { Chrome, Footer } from "@/components/Chrome";

export default function ImpressumPage() {
  return (
    <>
      <Chrome active="impressum" />
      <div className="page-hero">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 DDG und § 18 MStV</p>
      </div>
      <div className="wrap">
        <div className="legal">
          <h2>Anbieter</h2>
          <p>
            Martin Hofer
            <br />
            Wintergasse 30
            <br />
            3002 Purkersdorf
            <br />
            Österreich
          </p>
          <p>
            E-Mail:{" "}
            <a href="mailto:martin.hofer1304@gmail.com">martin.hofer1304@gmail.com</a>
          </p>
          <p>Diese Website wird von einer Privatperson betrieben.</p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Martin Hofer
            <br />
            Wintergasse 30
            <br />
            3002 Purkersdorf
          </p>

          <h2>Hinweis zum Angebot</h2>
          <p>
            WELTBUCH ist eine literarische Tageschronik öffentlich zugänglicher
            Nachrichten. Sie ersetzt keine Zeitung. Die erzählerische Form verdichtet;
            die zugrunde liegenden Meldungen sind im Quellenanhang jedes Kapitels
            ausgewiesen.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
