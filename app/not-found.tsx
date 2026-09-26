import Link from "next/link";
import { Chrome, Footer } from "@/components/Chrome";
import { getLang } from "@/lib/locale";
import { t } from "@/lib/i18n";

export default async function NotFound() {
  const lang = await getLang();
  return (
    <>
      <Chrome lang={lang} />
      <div className="page-hero">
        <h1>{t(lang, "notFoundTitle")}</h1>
        <p>{t(lang, "notFoundLead")}</p>
        <p style={{ marginTop: 24 }}>
          <Link className="cta" href="/">
            {t(lang, "backToday")}
          </Link>
        </p>
      </div>
      <Footer lang={lang} />
    </>
  );
}
