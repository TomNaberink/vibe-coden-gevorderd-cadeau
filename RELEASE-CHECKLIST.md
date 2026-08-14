# Releasechecklist voor GitHub

## Lokaal gecontroleerd

- [x] De makerconfiguratie is leeg.
- [x] De neutrale startstaat werkt zonder persoonlijke inhoud.
- [x] `/cadeau` werkt zonder naam of fictieve aanspreekvorm.
- [x] Er zijn geen cursistgegevens, testpersona's, e-mailadressen of secrets gevonden.
- [x] `START-HIER.md`, `AGENTS.md` en `README.md` leggen dezelfde personalisatieroute vast.
- [x] Ontbrekende optionele onderdelen verdwijnen uit de interface.
- [x] De repository bevat een reproduceerbare `package-lock.json` en een `npm ci`-route.
- [x] GitHub Actions controleert lint, TypeScript, tests en build.
- [x] Een schone `npm ci`-installatie is lokaal geslaagd.
- [x] `npm run check` is na die schone installatie volledig geslaagd.
- [x] npm meldt 0 bekende kwetsbaarheden in de geïnstalleerde dependencyboom.
- [x] De lokale Git-repository gebruikt branch `main`.

## Nog expliciet beslissen vóór openbare publicatie

- [x] De MIT-licentie bevat de bevestigde rechthebbende in de copyrightregel.
- [x] De publicatie- en hergebruiksrechten van `public/gift/portfolio-reveal.png` zijn bevestigd.
- [x] De publieke Git-auteursmetadata gebruikt het GitHub-noreply-adres van `TomNaberink`.
- [ ] Kies de uiteindelijke GitHub-organisatie, repositorynaam en zichtbaarheid.

## Na het aanmaken van de GitHub-repository

- [ ] Push de lokale `main`-branch.
- [ ] Controleer of de GitHub Actions-workflow groen wordt.
- [ ] Zet in **Settings** de optie **Template repository** aan.
- [ ] Maak vanuit **Use this template** één nieuwe testrepository.
- [ ] Controleer in die testrepository de volledige route uit `START-HIER.md`.
- [ ] Controleer een eventuele deployment pas na aparte toestemming.

Publiceren, een remote toevoegen, pushen en deployen vallen buiten de lokale releasevoorbereiding en gebeuren alleen na een expliciete opdracht.
