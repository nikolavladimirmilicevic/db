/* Deaf Boys League service worker.
   Deliberately caches NOTHING: every request goes straight to the network,
   so data is always as fresh as opening the page normally. Its only purpose
   is to make the site installable as an app. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
