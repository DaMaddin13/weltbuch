import Link from "next/link";
import Image from "next/image";
import { LangSwitch } from "@/components/LangSwitch";
import { t, type Lang } from "@/lib/i18n";

export function Chrome({
  active,
  lang = "de"
}: {
  active?: "heute" | "archiv" | "methode" | "impressum" | "datenschutz";
  lang?: Lang;
}) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">
        <Image
          src="/assets/emblem.jpg"
          alt="WELTBUCH"
          width={36}
          height={36}
          sizes="36px"
        />
        <div className="name">
          WELT<span>BUCH</span>
        </div>
      </Link>
      <nav>
        <Link className={active === "heute" ? "active" : ""} href="/">
          {t(lang, "today")}
        </Link>
        <Link className={active === "archiv" ? "active" : ""} href="/archiv">
          {t(lang, "archive")}
        </Link>
        <Link className={active === "methode" ? "active" : ""} href="/methode">
          {t(lang, "method")}
        </Link>
        <LangSwitch lang={lang} />
      </nav>
    </header>
  );
}

export function Footer({ lang = "de" }: { lang?: Lang }) {
  return (
    <footer>
      <div className="footer-mark">{t(lang, "footerMark")}</div>
      <nav className="footer-links">
        <Link href="/impressum">{t(lang, "imprint")}</Link>
        <span aria-hidden="true">·</span>
        <Link href="/datenschutz">{t(lang, "privacy")}</Link>
      </nav>
    </footer>
  );
}
