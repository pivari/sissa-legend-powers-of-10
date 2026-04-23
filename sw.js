/**
 * SISSA'S LEGEND & POWERS OF 10 - Service Worker
 * Version: 1.3
 * Changes: Added support for dynamic language JSON files and updated cache management.
 */

const CACHE_NAME = 'sissa-v1.3';

// Assets to be cached for offline usage
const assets = [
  './',
  './index.html',
  './documentation.html',
  './manifest.json',
  './logo192.png',
  './logo512.png',
  // Nuovi file di lingua dinamici (v1.3)
  './lang/it.json',
  './lang/en.json'
];

/**
 * Install Event: Open cache and store all defined assets.
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Sissa PWA: Caching version 1.3 assets');
      return cache.addAll(assets);
    })
  );
});

/**
 * Activate Event: Cleans up old caches from previous versions (v1.2 and below).
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
 * Fetch Event: Network-first falling back to cache strategy for language files,
 * and Cache-first for static UI assets.
 */
self.addEventListener('fetch', (event) => {
  // Strategia differenziata: per i file JSON cerchiamo sempre l'aggiornamento in rete
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