/* ============================================================
   Nivice Apartmani — app.js
   Cist (vanilla) JavaScript. Ne treba npm, ne treba build.
   ------------------------------------------------------------
   POSTAVLJANJE FORME: upisi adresu svoje forme u FORM_ENDPOINT
   (npr. 'https://formspree.io/f/xxxxxxx'). Dok je prazno,
   forma se proveri i prikaze zahvalnicu, ali NISTA NE SALJE.
   ============================================================ */

const FORM_ENDPOINT = '';

const I18N = {
  sr: {
    'meta.title': 'Nivice Apartmani — Apartmani u Herceg Novom, Crna Gora',
    'meta.desc': 'Nivice Apartmani — četiri apartmana za kratkoročni najam u Herceg Novom, Crna Gora. Od 70 EUR po noći.',
    'a11y.skip': 'Preskoči na sadržaj',
    'a11y.nav': 'Glavna navigacija',
    'a11y.menu': 'Meni',
    'a11y.lang': 'Jezik / Language',
    'a11y.close': 'Zatvori',
    'a11y.prev': 'Prethodna',
    'a11y.next': 'Sledeća',
    'brand.name': 'Nivice Apartmani',
    'brand.sub': 'Herceg Novi · Crna Gora',
    'nav.home': 'Početna',
    'nav.apartments': 'Apartmani',
    'nav.amenities': 'Sadržaji',
    'nav.location': 'Lokacija',
    'nav.gallery': 'Galerija',
    'nav.contact': 'Kontakt',
    'header.cta': 'Pošalji upit',
    'hero.eyebrow': 'Herceg Novi · Crna Gora',
    'hero.title': 'Apartmani u Herceg Novom, blizu mora',
    'hero.text': 'Četiri udobna apartmana za kratkoročni najam u Herceg Novom. Mirna lokacija, blizina plaže i sve što vam treba za opušten odmor na Jadranu.',
    'hero.cta': 'Pošalji upit',
    'hero.cta2': 'Pogledaj apartmane',
    'intro.rate': 'Svi apartmani — od 70 EUR po noći',
    'intro.text': 'Nivice Apartmani nude četiri opremljena apartmana u istom objektu. Svaki apartman ima sopstveni ulaz, kuhinju i kupatilo, a gostima su na raspolaganju i zajednički sadržaji.',
    'apt.title': 'Naši apartmani',
    'apt.lead': 'Četiri apartmana, isti standard i ista početna cena.',
    'apt.price': 'od 70 EUR / noć',
    'apt.cta': 'Pošalji upit',
    'apt.1.name': 'Apartman 1',
    'apt.1.cap': 'do 4 osobe',
    'apt.1.text': 'Dvosoban apartman sa balkonom i pogledom na more. Dnevni boravak sa kuhinjom, spavaća soba i kupatilo.',
    'apt.2.name': 'Apartman 2',
    'apt.2.cap': 'do 3 osobe',
    'apt.2.text': 'Komforan apartman za par ili manju porodicu, sa terasom i mestom za sedenje.',
    'apt.3.name': 'Apartman 3',
    'apt.3.cap': 'do 5 osoba',
    'apt.3.text': 'Prostran apartman sa dve spavaće sobe, idealan za porodicu ili dve prijateljske ekipe.',
    'apt.4.name': 'Apartman 4',
    'apt.4.cap': 'do 2 osobe',
    'apt.4.text': 'Studio apartman sa kuhinjskim delom i balkonom, praktičan za kraći boravak.',
    'am.title': 'Sadržaji',
    'am.lead': 'Sve što je uključeno u boravak.',
    'am.1': 'Klima uređaj',
    'am.2': 'Besplatan Wi-Fi',
    'am.3': 'Parking u dvorištu',
    'am.4': 'Potpuno opremljena kuhinja',
    'am.5': 'Mašina za veš',
    'am.6': 'Balkon ili terasa',
    'am.7': 'Posteljina i peškiri',
    'am.8': 'Fen za kosu',
    'am.9': 'Pegla i daska za peglanje',
    'am.10': 'Pogled na more',
    'loc.title': 'Lokacija',
    'loc.lead': 'Apartmani se nalaze u Herceg Novom, u Crnoj Gori, u mirnom delu grada blizu mora i plaže. Tačna adresa se šalje gostima nakon potvrde rezervacije.',
    'loc.place': 'Herceg Novi · Crna Gora',
    'loc.side': 'Apartmani su smešteni u mirnom delu grada, u blizini mora i plaže, sa lakim pristupom centru.',
    'loc.map': 'Ilustracija mape — ovde se kasnije ugrađuje prava mapa.',
    'loc.cta': 'Pošalji upit',
    'gal.title': 'Galerija',
    'gal.lead': 'Privremene fotografije — biće zamenjene fotografijama vlasnika.',
    'gal.note': 'Napomena: fotografije u galeriji i na karticama apartmana su privremene (stock) i biće zamenjene originalnim fotografijama vlasnika.',
    'gal.caption': 'Privremena fotografija',
    'contact.title': 'Pošaljite upit',
    'contact.lead': 'Popunite formu i javićemo vam se u vezi dostupnosti i termina.',
    'contact.name': 'Ime i prezime',
    'contact.name.ph': 'Vaše ime',
    'contact.email': 'Email adresa',
    'contact.email.ph': 'ime@primer.com',
    'contact.phone': 'Telefon (opciono)',
    'contact.phone.ph': '+382 …',
    'contact.checkin': 'Datum dolaska',
    'contact.checkout': 'Datum odlaska',
    'contact.guests': 'Broj gostiju',
    'contact.apartment': 'Apartman',
    'contact.apartment.any': 'Bilo koji apartman',
    'contact.message': 'Poruka',
    'contact.message.ph': 'Napišite vaš upit…',
    'contact.submit': 'Pošalji upit',
    'contact.sending': 'Šaljem…',
    'contact.required': 'Polja označena zvezdicom (*) su obavezna.',
    'contact.ok.title': 'Hvala na upitu!',
    'contact.ok.text': 'Vaš upit je poslat. Javićemo vam se u najkraćem roku.',
    'contact.side.title': 'Pre nego što pišete',
    'contact.side.1': 'Navedite željene datume i broj gostiju.',
    'contact.side.2': 'Ako imate pitanje o apartmanu, upišite ga u poruci.',
    'contact.side.3': 'Javljamo se na ostavljeni email ili telefon.',
    'contact.side.note': 'Kontakt podaci još nisu objavljeni. Za sva pitanja koristite formu za upit.',
    'err.name': 'Molimo unesite vaše ime.',
    'err.email': 'Molimo unesite ispravnu email adresu.',
    'err.form': 'Upit trenutno nije moguće poslati. Pokušajte ponovo kasnije ili nas kontaktirajte na drugi način.',
    'footer.about': 'Četiri apartmana za kratkoročni najam u Herceg Novom, Crnoj Gori.',
    'footer.nav.title': 'Navigacija',
    'footer.contact.title': 'Kontakt',
    'footer.contact.text': 'Kontakt podaci još nisu objavljeni. Za sva pitanja koristite formu za upit.',
    'footer.photo.note': 'Fotografije na sajtu su privremene i biće zamenjene fotografijama vlasnika.',
    'footer.rights': 'Sva prava zadržana.'
  },

  en: {
    'meta.title': 'Nivice Apartmani — Apartments in Herceg Novi, Montenegro',
    'meta.desc': 'Nivice Apartmani — four short-term rental apartments in Herceg Novi, Montenegro. From 70 EUR per night.',
    'a11y.skip': 'Skip to content',
    'a11y.nav': 'Main navigation',
    'a11y.menu': 'Menu',
    'a11y.lang': 'Language / Jezik',
    'a11y.close': 'Close',
    'a11y.prev': 'Previous',
    'a11y.next': 'Next',
    'brand.name': 'Nivice Apartmani',
    'brand.sub': 'Herceg Novi · Montenegro',
    'nav.home': 'Home',
    'nav.apartments': 'Apartments',
    'nav.amenities': 'Amenities',
    'nav.location': 'Location',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'header.cta': 'Send inquiry',
    'hero.eyebrow': 'Herceg Novi · Montenegro',
    'hero.title': 'Apartments in Herceg Novi, moments from the sea',
    'hero.text': 'Four comfortable apartments for short-term rental in Herceg Novi. A quiet location, close to the beach, with everything you need for a relaxed holiday on the Adriatic.',
    'hero.cta': 'Send inquiry',
    'hero.cta2': 'View apartments',
    'intro.rate': 'All apartments — from 70 EUR per night',
    'intro.text': 'Nivice Apartmani offers four furnished apartments in the same building. Each apartment has its own entrance, kitchen and bathroom, and guests also have shared amenities at their disposal.',
    'apt.title': 'Our apartments',
    'apt.lead': 'Four apartments, one standard and one starting price.',
    'apt.price': 'from 70 EUR / night',
    'apt.cta': 'Send inquiry',
    'apt.1.name': 'Apartment 1',
    'apt.1.cap': 'up to 4 guests',
    'apt.1.text': 'Two-room apartment with a balcony and sea view. Living area with a kitchen, one bedroom and a bathroom.',
    'apt.2.name': 'Apartment 2',
    'apt.2.cap': 'up to 3 guests',
    'apt.2.text': 'A comfortable apartment for a couple or a small family, with a terrace and a seating area.',
    'apt.3.name': 'Apartment 3',
    'apt.3.cap': 'up to 5 guests',
    'apt.3.text': 'A spacious apartment with two bedrooms, ideal for a family or two groups of friends.',
    'apt.4.name': 'Apartment 4',
    'apt.4.cap': 'up to 2 guests',
    'apt.4.text': 'A studio apartment with a kitchenette and a balcony, practical for a shorter stay.',
    'am.title': 'Amenities',
    'am.lead': 'Everything included in your stay.',
    'am.1': 'Air conditioning',
    'am.2': 'Free Wi-Fi',
    'am.3': 'Parking in the courtyard',
    'am.4': 'Fully equipped kitchen',
    'am.5': 'Washing machine',
    'am.6': 'Balcony or terrace',
    'am.7': 'Bed linen and towels',
    'am.8': 'Hairdryer',
    'am.9': 'Iron and ironing board',
    'am.10': 'Sea view',
    'loc.title': 'Location',
    'loc.lead': 'The apartments are located in Herceg Novi, Montenegro, in a quiet part of town close to the sea and the beach. The exact address is sent to guests after the booking is confirmed.',
    'loc.place': 'Herceg Novi · Montenegro',
    'loc.side': 'The apartments sit in a quiet part of town, close to the sea and the beach, with easy access to the centre.',
    'loc.map': 'Map illustration — a live map can be embedded here later.',
    'loc.cta': 'Send inquiry',
    'gal.title': 'Gallery',
    'gal.lead': 'Temporary photos — to be replaced with the owner\'s own images.',
    'gal.note': 'Note: the photos in the gallery and on the apartment cards are temporary (stock) and will be replaced with the owner\'s original photographs.',
    'gal.caption': 'Temporary photo',
    'contact.title': 'Send an inquiry',
    'contact.lead': 'Fill in the form and we will get back to you about availability and dates.',
    'contact.name': 'Full name',
    'contact.name.ph': 'Your name',
    'contact.email': 'Email address',
    'contact.email.ph': 'you@example.com',
    'contact.phone': 'Phone (optional)',
    'contact.phone.ph': '+382 ...',
    'contact.checkin': 'Check-in date',
    'contact.checkout': 'Check-out date',
    'contact.guests': 'Number of guests',
    'contact.apartment': 'Apartment',
    'contact.apartment.any': 'Any apartment',
    'contact.message': 'Message',
    'contact.message.ph': 'Write your inquiry...',
    'contact.submit': 'Send inquiry',
    'contact.sending': 'Sending...',
    'contact.required': 'Fields marked with an asterisk (*) are required.',
    'contact.ok.title': 'Thank you for your inquiry!',
    'contact.ok.text': 'Your inquiry has been sent. We will get back to you shortly.',
    'contact.side.title': 'Before you write',
    'contact.side.1': 'Tell us your preferred dates and number of guests.',
    'contact.side.2': 'If you have a question about an apartment, add it in the message.',
    'contact.side.3': 'We reply to the email or phone number you leave.',
    'contact.side.note': 'Contact details have not been published yet. Please use the inquiry form for any questions.',
    'err.name': 'Please enter your name.',
    'err.email': 'Please enter a valid email address.',
    'err.form': 'The inquiry could not be sent right now. Please try again later or contact us another way.',
    'footer.about': 'Four apartments for short-term rental in Herceg Novi, Montenegro.',
    'footer.nav.title': 'Navigation',
    'footer.contact.title': 'Contact',
    'footer.contact.text': 'Contact details have not been published yet. Please use the inquiry form for any questions.',
    'footer.photo.note': 'The photos on this site are temporary and will be replaced with the owner\'s own images.',
    'footer.rights': 'All rights reserved.'
  }
};

const STORAGE_KEY = 'nivice-lang';
const DEFAULT_LANG = 'sr';
const LOCALE = { sr: 'sr-Latn', en: 'en' };
let currentLang = DEFAULT_LANG;

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

function t(key) {
  const pack = I18N[currentLang] || I18N[DEFAULT_LANG];
  if (pack && pack[key] != null) return pack[key];
  const fb = I18N[DEFAULT_LANG];
  return (fb && fb[key] != null) ? fb[key] : key;
}

/* ---------- PRIMENA JEZIKA ---------- */
function applyLang(lang, persist) {
  currentLang = I18N[lang] ? lang : DEFAULT_LANG;

  document.documentElement.lang = LOCALE[currentLang] || 'sr-Latn';
  document.title = t('meta.title');

  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', t('meta.desc'));

  $$('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  $$('[data-i18n-ph]').forEach(function (el) {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  $$('[data-i18n-aria]').forEach(function (el) {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });

  const nav = $('#nav');
  if (nav) nav.setAttribute('aria-label', t('a11y.nav'));
  const burger = $('#burger');
  if (burger) burger.setAttribute('aria-label', t('a11y.menu'));
  const lbX = $('#lbX'), lbP = $('#lbPrev'), lbN = $('#lbNext');
  if (lbX) lbX.setAttribute('aria-label', t('a11y.close'));
  if (lbP) lbP.setAttribute('aria-label', t('a11y.prev'));
  if (lbN) lbN.setAttribute('aria-label', t('a11y.next'));
  const skip = $('.skip');
  if (skip) skip.textContent = t('a11y.skip');

  $$('.lang').forEach(function (b) {
    b.setAttribute('aria-pressed', b.getAttribute('data-lang') === currentLang ? 'true' : 'false');
  });

  const btn = $('#submitBtn');
  if (btn && !btn.dataset.sending) btn.textContent = t('contact.submit');

  if (lightboxIndex !== null) updateCaption();

  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) {}
  }
}

/* ---------- HEADER ---------- */
function initHeader() {
  const hdr = $('#hdr');
  const nav = $('#nav');
  const burger = $('#burger');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.addEventListener('click', function (e) {
    if (!nav || !burger) return;
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target) || burger.contains(e.target)) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (nav && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
    if (lightboxIndex !== null) closeLightbox();
  });

  const onScroll = function () {
    if (hdr) hdr.classList.toggle('is-stuck', window.scrollY > 8);
    markActive();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });
}

function markActive() {
  const links = $$('#nav a[href^="#"]');
  if (!links.length) return;
  let best = null, bestTop = -Infinity;
  links.forEach(function (a) {
    const el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    const top = el.getBoundingClientRect().top - 100;
    if (top <= 0 && top > bestTop) { bestTop = top; best = a; }
  });
  links.forEach(function (a) { a.classList.toggle('is-active', a === best); });
}

/* ---------- REVEAL ---------- */
function initReveal() {
  const items = $$('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  items.forEach(function (el, i) {
    el.style.transitionDelay = (Math.min(i, 6) * 45) + 'ms';
    io.observe(el);
  });
}

/* ---------- GALERIJA / LIGHTBOX ---------- */
const GALLERY = [
  'images/photo-02.jpg',
  'images/photo-03.jpg',
  'images/photo-04.jpg',
  'images/photo-09.jpg',
  'images/photo-10.jpg'
];
let lightboxIndex = null;

function updateCaption() {
  const cap = $('#lbCap');
  if (!cap) return;
  if (lightboxIndex === null) { cap.textContent = ''; return; }
  cap.textContent = t('gal.caption') + ' ' + (lightboxIndex + 1) + ' / ' + GALLERY.length;
}

function openLightbox(i) {
  if (i < 0) i = GALLERY.length - 1;
  if (i >= GALLERY.length) i = 0;
  lightboxIndex = i;
  const lb = $('#lb'), img = $('#lbImg');
  if (!lb || !img) return;
  img.src = GALLERY[i];
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  updateCaption();
}

function closeLightbox() {
  const lb = $('#lb');
  if (lb) lb.hidden = true;
  lightboxIndex = null;
  document.body.style.overflow = '';
}

function initGallery() {
  $$('.gal__item').forEach(function (btn, idx) {
    btn.addEventListener('click', function () {
      openLightbox(isNaN(parseInt(btn.getAttribute('data-i'), 10)) ? idx : parseInt(btn.getAttribute('data-i'), 10) - 1);
    });
  });
  const lb = $('#lb');
  if (!lb) return;
  const x = $('#lbX'), p = $('#lbPrev'), n = $('#lbNext');
  if (x) x.addEventListener('click', closeLightbox);
  if (p) p.addEventListener('click', function (e) { e.stopPropagation(); openLightbox(lightboxIndex - 1); });
  if (n) n.addEventListener('click', function (e) { e.stopPropagation(); openLightbox(lightboxIndex + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft') openLightbox(lightboxIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(lightboxIndex + 1);
  });
  let sx = null;
  lb.addEventListener('touchstart', function (e) { sx = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 45) openLightbox(lightboxIndex + (dx < 0 ? 1 : -1));
    sx = null;
  }, { passive: true });
}

/* ---------- DUGMAD NA KARTICAMA ---------- */
function initCardButtons() {
  $$('[data-apt]').forEach(function (a) {
    a.addEventListener('click', function () {
      const sel = $('#apartmentSel');
      if (sel) sel.value = a.getAttribute('data-apt');
    });
  });
}

/* ---------- FORMA ---------- */
function setErr(name, msg) {
  const el = document.querySelector('[data-err="' + name + '"]');
  if (el) el.textContent = msg || '';
  const input = document.querySelector('[name="' + name + '"]');
  if (input && input.parentElement) input.parentElement.classList.toggle('has-err', !!msg);
}

function clearErrors() {
  ['name', 'email', 'phone', 'checkin', 'checkout', 'guests', 'apartment', 'message', 'form'].forEach(function (k) {
    setErr(k, '');
  });
}

function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim());
}

function initForm() {
  const form = $('#inqForm');
  if (!form) return;
  const btn = $('#submitBtn');
  const ok = $('#okPanel');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    if (ok) ok.hidden = true;

    const data = {};
    new FormData(form).forEach(function (v, k) { data[k] = String(v).trim(); });

    let bad = false;
    if (!data.name) { setErr('name', t('err.name')); bad = true; }
    if (!validEmail(data.email)) { setErr('email', t('err.email')); bad = true; }
    if (bad) {
      const first = form.querySelector('.has-err input, .has-err select, .has-err textarea');
      if (first) first.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
      return;
    }

    if (btn) { btn.dataset.sending = '1'; btn.disabled = true; btn.textContent = t('contact.sending'); }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    }).then(function (r) {
      if (!r.ok) throw new Error('bad status');
      if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    }).catch(function () {
      setErr('form', t('err.form'));
    }).then(function () {
      if (btn) { delete btn.dataset.sending; btn.disabled = false; btn.textContent = t('contact.submit'); }
    });
  });
}

/* ---------- JEZIK: DUGMAD ---------- */
function initLangButtons() {
  $$('.lang').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang'), true); });
  });
}

/* ---------- START ---------- */
document.addEventListener('DOMContentLoaded', function () {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  initHeader();
  initGallery();
  initCardButtons();
  initForm();
  initLangButtons();
  initReveal();
  applyLang(saved || DEFAULT_LANG, false);

  const y = $('#year');
  if (y) y.textContent = String(new Date().getFullYear());
});

window.NIVICE = { setLang: function (l) { applyLang(l, true); }, t: t };
