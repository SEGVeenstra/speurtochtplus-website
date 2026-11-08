# speurtochtplus-website

Website van Speurtocht Plus (https://www.speurtochtplus.nl), gebouwd met [Astro](https://astro.build) en gehost op GitHub Pages.

## Content aanpassen

| Wat | Waar |
| --- | --- |
| Artikelen | `src/content/articles/*.md` (bovenaan: titel, datum, korte beschrijving, omslagafbeelding) |
| Afbeeldingen bij artikelen | `src/content/articles/images/` |
| Over ons | `src/content/pages/over-ons.md` |
| Homepage-teksten | `src/pages/index.astro` |
| Download-pagina | `src/pages/download.astro` |
| Contactgegevens, KvK/BTW, store-links, Web3Forms-sleutel | `src/config.ts` |

**Nieuw artikel:** kopieer een bestaand `.md`-bestand in `src/content/articles/`, pas titel, datum en tekst aan en zet de afbeelding in `images/`. Het artikel verschijnt vanzelf op de artikelenpagina, de homepage en in de zoekfunctie.

Wijziging committen en pushen naar `main` → de site wordt automatisch opnieuw gepubliceerd.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # bouwt naar dist/ en maakt de zoekindex (Pagefind)
```

De zoekfunctie werkt alleen op een gebouwde site, niet in `npm run dev`.

## Oude URL's

De oude JouwWeb-artikel-URL's (`/artikelen/3191676_...`) sturen door naar de nieuwe. Dat staat in `astro.config.mjs`.

## Hosting op GitHub Pages

1. Repository → Settings → Pages → Source: **GitHub Actions**.
2. Custom domain: `www.speurtochtplus.nl` (`public/CNAME`).
3. DNS bij Namecheap: `CNAME` van `www` naar `segveenstra.github.io`, en voor de kale domeinnaam vier `A`-records naar 185.199.108.153, .109.153, .110.153 en .111.153.
4. Zet bij Settings → Pages **Enforce HTTPS** aan zodra het certificaat klaar is.
