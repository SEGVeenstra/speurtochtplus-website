// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Oude JouwWeb-artikel-URL's (met nummer ervoor) sturen door naar de nieuwe URL's.
const oud = {
  '3191676_zo-maak-je-eenvoudig-je-eigen-gps-speurtocht': 'zo-maak-je-eenvoudig-je-eigen-gps-speurtocht',
  '3191677_zo-speel-je-een-gps-speurtocht': 'zo-speel-je-een-gps-speurtocht',
  '3210766_een-betaalbaar-kinderfeestje-organiseren': 'een-betaalbaar-kinderfeestje-organiseren',
  '3224119_de-interactieve-lunchwandeling-transformeer-je-dagelijkse-rondje-in-een-leerzame-bedrijfstour':
    'de-interactieve-lunchwandeling-transformeer-je-dagelijkse-rondje-in-een-leerzame-bedrijfstour',
  '3245885_zo-gebruik-je-een-gps-speurtocht-om-jou-horecazaak-te-promoten':
    'zo-gebruik-je-een-gps-speurtocht-om-jou-horecazaak-te-promoten',
  '3276547_zo-maak-je-een-avontuurlijke-gps-speurtocht-op-de-camping':
    'zo-maak-je-een-avontuurlijke-gps-speurtocht-op-de-camping',
};
const redirects = Object.fromEntries(
  Object.entries(oud).map(([van, naar]) => [`/artikelen/${van}`, `/artikelen/${naar}`]),
);

export default defineConfig({
  site: 'https://www.speurtochtplus.nl',
  integrations: [sitemap()],
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  redirects,
});
