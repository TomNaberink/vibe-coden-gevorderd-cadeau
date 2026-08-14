# Onderwijsmaker-portfolio

Een schone GitHub-startertemplate voor cursisten van Vibe Coden Gevorderd. De repository bevat bewust geen voorbeeldmaker, persoonlijke gegevens of fictieve projecten.

## Gebruik als GitHub-template

1. Maak op GitHub vanuit deze template een eigen repository via **Use this template**.
2. Open de nieuwe repository met jouw vibe-code-AI.
3. Vraag de AI om `START-HIER.md` en `AGENTS.md` volledig te lezen en de personalisatieroute te volgen.

De template gebruikt geen database, authenticatie, analytics, secrets of environment variables. Het portfolio blijft een neutrale startstaat totdat een geldige naam, onderwijsrol en minimaal één echt project zijn toegevoegd.

## Personaliseren met een vibe-code-AI

Geef je AI eerst de opdracht om [START-HIER.md](./START-HIER.md) en [AGENTS.md](./AGENTS.md) volledig te lezen. De AI stelt daarna maximaal zes vragen, vat je antwoorden samen en vraagt expliciet om bevestiging. Pas na jouw akkoord mag zij `src/content/maker-profile.ts` aanpassen.

De AI mag niets invullen wat jij niet hebt aangeleverd. Ontbrekende onderdelen blijven leeg en verdwijnen automatisch uit de site. Een naam, onderwijsrol en één echt project zijn voldoende om het portfolio te activeren.

Binnen de zes vragen beschrijf je ook voor wie jouw app is, welk probleem zij oplost en hoe zij daarbij helpt. Zo kan zelfs een portfolio met één project inhoudelijk duidelijk en persoonlijk worden.

Als je een live projectlink deelt, moet de AI eerst toestemming vragen voordat zij de app opent en een echte screenshot maakt. Zonder toestemming of screenshot blijft het project als verzorgde typografische presentatie zichtbaar.

## Vereisten

- Node.js `20.9.0` of nieuwer;
- npm;
- een lokale Git-kopie van de repository.

## Lokaal starten

```powershell
npm ci
npm run dev
```

De site opent op `http://127.0.0.1:4173`. De feestelijke ingang staat op `/cadeau`.

## Beschikbare controles

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

Met `npm run check` voer je alle vier de controles achter elkaar uit. GitHub Actions gebruikt dezelfde kwaliteitscontrole bij iedere push en pull request.

Controleer daarna `/` en `/cadeau` ook zichtbaar op desktop en mobiel, inclusief alle aanwezige links.

## Belangrijkste bestanden

- `START-HIER.md`: de verplichte intake en personalisatieroute;
- `AGENTS.md`: harde grenzen voor iedere AI-agent;
- `src/content/maker-profile.ts`: de enige centrale makerconfiguratie;
- `src/lib/maker-profile-validation.ts`: bepaalt of het portfolio actief mag worden;
- `RELEASE-CHECKLIST.md`: laatste controle vóór publicatie of hergebruik.

`next-env.d.ts`, `.next/`, `node_modules/` en TypeScript-buildinformatie worden lokaal gegenereerd en horen niet in Git.

## Publiceren

Lees vóór openbare publicatie `RELEASE-CHECKLIST.md` en `ASSETS.md`. De software wordt beschikbaar gesteld onder de MIT-licentie. De publicatie- en hergebruiksrechten van de meegeleverde cadeau-illustratie zijn door de repository-eigenaar bevestigd.

## Licentie

Deze template valt onder de [MIT-licentie](./LICENSE). Copyright © 2026 Tom Naberink, handelend onder de naam AI voor Docenten.
