/**
 * SISSA'S LEGEND & POWERS OF 10 - Service Worker
 * Version: 1.4
 * Changes: Added support for localized documentation files in the /lang/ folder.
 */

const CACHE_NAME = 'sissa-v1.4';

// Assets to be cached for offline usage
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo192.png',
  './logo512.png',
  // File di lingua JSON (v1.3)
  './lang/it.json',
  './lang/en.json',
  // Documentazione localizzata (v1.4)
  './lang/documentation-it.html',
  './lang/documentation-en.html'
];

/**
 * Install Event: Open cache and store all defined assets.
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Sissa PWA: Caching version 1.4 assets');
      return cache.addAll(assets);
    })
  );
});

/**
 * Activate Event: Cleans up old caches from previous versions.
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => {
                console.log('Sissa PWA: Removing old cache', key);
                return caches.delete(key);
            })
      );
    })
  );
});

/**
 * Fetch Event: Network-first falling back to cache strategy for language/docs files,
 * and Cache-first for static UI assets.
 */
self.addEventListener('fetch', (event) => {
  // Strategia differenziata: per i file nella cartella /lang/ cerchiamo sempre l'aggiornamento in rete
  if (event.request.url.includes('/lang/')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    // Strategia standard per il resto degli asset statici
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});