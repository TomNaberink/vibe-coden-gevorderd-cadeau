# Start hier: personaliseer jouw Onderwijsmaker-portfolio

Deze repository is bewust leeg. Er staat geen voorbeeldmaker in en er mogen nooit fictieve persoonsgegevens, onderwijscontexten, projecten, resultaten, links of afbeeldingen worden toegevoegd.

## Verplichte werkwijze voor de AI

Lees voor je begint ook `AGENTS.md` en `README.md`. Stel daarna eerst precies deze zes vragen:

1. Welke naam wil je tonen?
2. Hoe wil je jouw rol in het onderwijs omschrijven?
3. Hoe heet jouw onderwijsapp?
4. Wat is de live link?
5. Voor wie is de app, welk probleem helpt deze oplossen en hoe helpt de app daarbij?
6. Wil je een eigen foto gebruiken of liever geen portret tonen?

Stel in deze eerste intake geen extra inhoudelijke vragen. Een antwoord op de live-linkvraag mag zijn dat er nog geen live link is. Een antwoord op de fotovraag mag zijn dat er geen portret wordt getoond.

## Eerst samenvatten, dan bevestigen

Vat de zes antwoorden samen en benoem duidelijk:

- welke naam en rol zichtbaar worden;
- welk echte project centraal komt te staan;
- welke live link wel of niet wordt gebruikt;
- of een eigen foto wordt gebruikt;
- welke optionele onderdelen afwezig blijven.

Vraag daarna expliciet of deze samenvatting klopt en of je de site mag aanpassen. Schrijf vóór dit akkoord niets naar `src/content/maker-profile.ts`.

Bevestiging is uitsluitend een stap in het gesprek. Voeg geen veld, vlag of status zoals `confirmed` of `bevestigd` aan de configuratie toe.

## Pas na akkoord aanpassen

Verwerk uitsluitend bevestigde informatie in `src/content/maker-profile.ts`:

- vraag 1 → `identity.name`;
- vraag 2 → `identity.role`;
- vraag 3 → `projects[0].title` en een technisch afgeleide veilige `slug`;
- vraag 4 → optioneel `projects[0].liveUrl`;
- vraag 5 → `projects[0].audienceAndProblem` als één feitelijke beschrijving van doelgroep, probleem en werking;
- vraag 6 → optioneel `identity.profileImage` en een feitelijke alternatieve tekst.

Laat vak, onderwijssector, locatie, visie, mijlpalen, cursusbewijzen, contactlinks, projectresultaten en extra projecten weg tenzij de cursist daar later zelf echte informatie voor aanlevert. Verzin geen ontbrekende tekst om een sectie te vullen.

Ontbreekt na de eerste aanpassing een live link of echte projectscreenshot, leg dan uit dat het portfolio wel bruikbaar is maar met echt projectbewijs overtuigender wordt. Bied dit uitsluitend aan als optionele vervolgstap en voeg niets toe zonder toestemming.

## Live app en screenshots

Is er een live projectlink, vraag dan apart toestemming om de app te openen en zelf een screenshot te maken. Open de link pas na toestemming.

Na toestemming:

1. open de echte app in een browser;
2. controleer of de URL en app overeenkomen met wat de cursist heeft gedeeld;
3. maak een echte, representatieve screenshot zonder gevoelige of persoonlijke gegevens;
4. sla die lokaal op onder `public/projects/`;
5. stel `image` en een feitelijke `imageAlt` in.

Zonder toestemming wordt geen website geopend en geen screenshot toegevoegd. Gebruik nooit een gegenereerde, fictieve of stockafbeelding als vervanging.

## Verplichte eindcontrole

Controleer na personalisatie:

1. de homepage op desktop;
2. de homepage op mobiel;
3. `/cadeau` op desktop en mobiel;
4. alle zichtbare interne en externe links;
5. dat ontbrekende optionele onderdelen volledig uit de interface verdwijnen;
6. dat nergens verzonnen of onbevestigde inhoud staat;
7. `npm run lint`;
8. `npm run typecheck`;
9. `npm test`;
10. `npm run build`.

Rapporteer alleen controles die werkelijk zijn uitgevoerd.
