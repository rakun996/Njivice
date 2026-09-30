# Nivice Apartmani — sajt

Gotov statični sajt. **Ne treba npm, ne treba build, ne treba Node.**
Ubaci fajlove u GitHub repozitorijum, uključi GitHub Pages i radi.

## Šta je u paketu

    index.html          — cela stranica (jedna strana, sve sekcije)
    styles.css          — sav dizajn
    app.js              — jezik (ME/EN), meni, galerija, forma
    images/photo-01..10 — privremene (stock) fotografije
    .nojekyll           — govori GitHub Pages-u da ne dira fajlove
    README.md           — ovo uputstvo

## Kako da postaviš na GitHub (bez build-a)

1. Napravi nov repozitorijum ili otvori postojeći.
2. Ubaci **sve fajlove iz ovog paketa u koren repozitorijuma** — `index.html`
   mora da bude u korenu, a ne u podfolderu.
3. Repo → **Settings** → **Pages** → **Build and deployment** → **Source**:
   izaberi **Deploy from a branch**, grana **main**, folder **/(root)** → Save.
4. Sačekaj 1–2 minuta i otvori adresu `https://KORISNIK.github.io/REPO/`.

Ako je repo u podfolderu (npr. `/Njivice-/`), putanje u fajlovima su relativne
(`images/...`, `styles.css`), pa rade i u podfolderu — nema šta da se menja.

## Kako da promeniš tekst

Sav tekst na oba jezika je u `app.js`, u objektu **I18N** na vrhu fajla —
odvojeno `sr:` i `en:`. Menjaš na jednom mestu, menja se u oba jezika.

## Kako da zameniš fotografije

1. Ubaci svoje fotografije u folder `images/`.
2. Nazovi ih isto kao postojeće (`photo-01.jpg` … `photo-10.jpg`) pa se sve
   zamene same. Ili promeni putanje u `index.html` i u `app.js` (lista `GALLERY`).
3. Kada postaviš prave fotografije, **obriši napomenu o privremenim
   fotografijama** — ona je u `index.html` (klasa `note` u galeriji i u futeru)
   i u `app.js` pod ključevima `gal.note`, `gal.lead`, `footer.photo.note`.

## Važno: forma trenutno ne šalje ništa

Na vrhu `app.js` stoji:

    const FORM_ENDPOINT = '';

Dok je prazno, forma proveri polja i prikaže zahvalnicu, ali **upit se nigde ne
šalje**. Da upiti stvarno stižu, upiši adresu svoje forme, na primer:

    const FORM_ENDPOINT = 'https://formspree.io/f/tvojKod';

Kod za slanje je već napisan — ništa drugo ne treba menjati.

## Jezik

Dugmad **ME** i **EN** u zaglavlju menjaju jezik bez učitavanja stranice.
Podrazumevano je crnogorski; izbor se pamti u pregledaču.

## Kontakt podaci

Telefon, email i adresa **nisu objavljeni** jer nisu bili dostavljeni. Kada ih
budeš imao, dodaj ih u sekciju Kontakt i u futer (`index.html` + `app.js`).

## Radne napomene (placeholder sadržaj)

- Nazivi apartmana su „Apartman 1–4“, a opisi i kapaciteti gostiju su radni.
- Cena je prikazana kao „od 70 EUR / noć“, bez sezonskih uslova i bez pravila
  boravka — pravila (prijava, odjava, otkazivanje, kućni red) nisu izmišljana.
- Mapa je ilustracija, ne prava mapa. Prava mapa se kasnije ugrađuje u tom bloku.
