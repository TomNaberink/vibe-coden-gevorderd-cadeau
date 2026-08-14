import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jouw Onderwijsmaker-portfolio",
  description: "De feestelijke onthulling van het cursuscadeau na Vibe Coden Gevorderd.",
};

export default function GiftPage() {
  return (
    <main className="gift-page">
      <div className="gift-brand">AI voor Docenten <span>· cursuscadeau</span></div>
      <section className="gift-reveal" aria-labelledby="gift-title">
        <div className="gift-copy">
          <p className="gift-kicker">Vibe Coden Gevorderd voltooid</p>
          <h1 id="gift-title">Je bouwt niet alleen apps. Je bent een onderwijsmaker.</h1>
          <p>
            Dit portfolio is jouw plek om te laten zien wat je maakt, waarom je het maakt en welke onderwijsbehoefte centraal staat.
          </p>
          <ul>
            <li>Je bouwt vanuit een echte onderwijsbehoefte.</li>
            <li>Je test, bewaart en publiceert steeds professioneler.</li>
            <li>Je kunt blijven toevoegen zonder opnieuw te beginnen.</li>
          </ul>
          <Link className="button button-primary gift-button" href="/">Open mijn portfolio</Link>
          <small>Door docenten, voor het onderwijs.</small>
        </div>
        <div className="gift-visual">
          <Image
            src="/gift/portfolio-reveal.png"
            alt="Paarse presentatiemap waar portfolio- en projectpagina’s uit tevoorschijn komen"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 58vw"
          />
        </div>
      </section>
    </main>
  );
}
