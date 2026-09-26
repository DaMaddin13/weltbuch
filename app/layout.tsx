import type { Metadata } from "next";
import "./globals.css";
import "./lang.css";
import { getLang } from "@/lib/locale";

export const metadata: Metadata = {
  title: "WELTBUCH — Die fortlaufende Geschichte unserer Zeit",
  description:
    "Jeden Morgen ein neues Kapitel aus dem Weltgeschehen. Literarisch erzählt, an den Quellen festgebunden.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getLang();
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
