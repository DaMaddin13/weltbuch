import Link from "next/link";
import { Chrome, Footer } from "@/components/Chrome";

export default function NotFound() {
  return (
    <>
      <Chrome />
      <div className="page-hero">
        <h1>Dieses Kapitel gibt es nicht.</h1>
        <p>Zurück zum jüngsten Tag.</p>
        <p style={{ marginTop: 24 }}>
          <Link className="cta" href="/">
            Nach heute
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
