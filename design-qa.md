# Design-QA — generieke startertemplate

## Gecontroleerde toestanden

- Lege starter op `/`, desktopviewport 1440 × 1024: `qa/starter-desktop-1440.png`.
- Lege starter op `/`, mobiele viewport 390 × 844: `qa/starter-mobile-390.png`.
- Cadeaupagina op `/cadeau`, desktopviewport 1440 × 1024: `qa/cadeau-desktop-1440.png`.
- Cadeaupagina op `/cadeau`, mobiele viewport 390 × 844: `qa/cadeau-mobile-390.png`.
- Minimale één-projecttoestand: contractueel getest in `src/lib/maker-profile-validation.test.ts` zonder persoonlijke of inhoudelijke testpersona.

## Lege startstaat

- De paginatitel is `Onderwijsmaker-portfolio`.
- De hoofdkop is exact `Jouw portfolio staat klaar om persoonlijk te maken.`
- Er wordt geen persoonlijke identiteit, avatar, portret of projectsectie gerenderd.
- Er staat geen tekst of verwijzing uit het verwijderde showroomvoorbeeld in de DOM.
- De desktop- en mobiele weergave hebben geen horizontale overflow.
- De abstracte portfolio-illustratie bevat geen naam, persoon, project of inhoudelijke placeholder.

## Cadeaupagina

- De route werkt zonder persoonlijke configuratie.
- Er wordt geen naam of fictieve cursist getoond.
- De CTA `Open mijn portfolio` navigeert terug naar `/`.
- De link `Cursuscadeau` op de starter navigeert naar `/cadeau`.
- De desktop- en mobiele weergave hebben geen horizontale overflow.

## Technische browsercontrole

- Betekenisvolle body-inhoud aanwezig.
- Geen Next.js-foutoverlay.
- Geen console-errors of warnings.
- Geen zichtbare dode interne links in de gecontroleerde lege toestand.

Er staan geen open P0-, P1- of P2-bevindingen.

## Eindresultaat

**final result: passed**
