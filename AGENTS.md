# Instructies voor AI-agents

Deze repository is een generieke GitHub-template voor toekomstige cursisten. Personaliseer haar nooit automatisch met gegevens van de repository-eigenaar, een voorbeeldpersoon of een fictieve cursist.

## Absoluut verbod op verzonnen inhoud

Verzin nooit:

- namen;
- functies of onderwijsrollen;
- vakken, onderwijssectoren of locaties;
- projecten of appnamen;
- doelgroepen, onderwijsproblemen of ervaringen;
- resultaten, effecten, mijlpalen of cursusbewijzen;
- contactgegevens of links;
- portretten, screenshots of andere afbeeldingen.

Gebruik ook geen stockpersoon, gegenereerd gezicht, voorbeeldproject, showroomdata of inhoudelijke placeholder om de site voller te laten lijken.

## Verplichte personalisatieroute

Lees `START-HIER.md` volledig. Bij een verzoek om deze template te personaliseren:

1. stel eerst de zes vragen uit `START-HIER.md`;
2. vat alle antwoorden samen;
3. vraag expliciet of de samenvatting klopt en of de site mag worden aangepast;
4. wijzig vóór die bevestiging geen persoonlijke content;
5. schrijf pas na akkoord de echte inhoud naar `src/content/maker-profile.ts`;
6. voeg geen technisch veld of status voor bevestiging toe;
7. verberg ieder ontbrekend optioneel onderdeel volledig;
8. open een live app alleen na aparte toestemming en maak dan zelf een echte screenshot;
9. controleer daarna desktop, mobiel, alle links, lint, typecheck, tests en build.

De eerste intake bevat maximaal zes inhoudelijke vragen. Vraag 5 legt binnen één vraag doelgroep, probleem en de feitelijke werking van de app vast. Stel geen extra vraag om een leeg veld te kunnen vullen. Een onderdeel waarvoor geen echte informatie is aangeleverd blijft afwezig.

## Contentcontract

De meegeleverde `makerProfile` blijft leeg totdat een cursist de personalisatieroute heeft bevestigd. De applicatie bepaalt zonder extra statusveld zelf haar toestand:

- leeg of onvolledig → neutrale startstaat;
- geldige naam + geldige rol + minimaal één geldig echt project → actief portfolio.

Vak, onderwijssector, locatie, foto, visie, mijlpalen, cursusbewijzen, contactlinks, projectresultaten en extra projecten zijn optioneel. Voeg ze alleen toe met door de cursist aangeleverde echte inhoud.

Zonder eigen foto wordt geen avatar, initialenblok of fictief gezicht getoond. Zonder echte screenshot gebruikt het project de typografische projectweergave.

Ontbreekt een live link of echte screenshot, benoem dit na de eerste aanpassing alleen als optionele kans om het portfolio overtuigender te maken. Open of voeg niets toe zonder toestemming.

## Schrijf- en veiligheidsgrenzen

- Bewaar screenshots lokaal onder `public/projects/` en alleen na toestemming.
- Neem geen persoonsgegevens, testgegevens, secrets of environment variables uit andere repositories over.
- Wijzig geen cursusrepository of ander project als leesbron.
- Voeg geen database, authenticatie, analytics of externe dienst toe zonder expliciete opdracht.
- Houd de template werkend zonder persoonlijke inhoud.

## Verificatie

Voer na relevante wijzigingen minimaal uit:

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

Controleer bij UI- of contentwijzigingen ook `/` en `/cadeau` in een echte browser op desktop en mobiel. Test alle zichtbare links, controleer overflow en consolemeldingen en rapporteer alleen werkelijk uitgevoerde controles.

De vaste lokale ontwikkelpoort is `4173`. Controleer die poort en hergebruik een gezonde bestaande server voordat je een nieuwe start.
