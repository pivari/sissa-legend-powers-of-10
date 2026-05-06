const CACHE_NAME = 'sissa-legend-v1.5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo192.png',
  './logo512.png', // Added for high-res displays and splash screens
  './favicon.ico',
  './lang/en.json',
  './lang/it.json',
  './lang/zh.json',
  './lang/documentation-en.html',
  './lang/documentation-it.html',
  './lang/documentation-zh.html'
];

// Install Event: caching all application shell resources and localization files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event: cleaning up legacy caches from previous versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Fetch Event: standard Cache First strategy to ensure offline availability
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});