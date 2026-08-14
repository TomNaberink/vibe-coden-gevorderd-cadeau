import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · niet gevonden</p>
      <h1>Deze pagina bestaat niet.</h1>
      <p>Ga terug naar het Onderwijsmaker-portfolio.</p>
      <Link className="button button-primary" href="/">Naar het portfolio</Link>
    </main>
  );
}
