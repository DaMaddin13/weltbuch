import Link from "next/link";

export function Chrome({ active }: { active?: "heute" | "archiv" | "methode" }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">
        <img src="/assets/emblem.jpg" alt="Weltbuch-Siegel" />
        <div className="name">
          WELT<span>BUCH</span>
        </div>
      </Link>
      <nav>
        <Link className={active === "heute" ? "active" : ""} href="/">
          Heute
        </Link>
        <Link className={active === "archiv" ? "active" : ""} href="/archiv">
          Archiv
        </Link>
        <Link className={active === "methode" ? "active" : ""} href="/methode">
          Methode
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      WELTBUCH · Die fortlaufende Geschichte unserer Zeit
      <br />
      Inspiriert von der Form der unendlichen Erzählung, nicht von deren Figuren.
    </footer>
  );
}
