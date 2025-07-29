const CACHE_NAME = 'leonard-lee-resume-v1';
const urlsToCache = [
  '/',
  '/picoflee.jpg',
  '/_next/static/css/',
  '/_next/static/chunks/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});