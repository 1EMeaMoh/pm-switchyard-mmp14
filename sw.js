const CACHE_NAME = 'pm-portal-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // ปล่อยให้โหลดจากเน็ตเวิร์กตามปกติ (ไม่ต้องแคชเยอะ เพื่อให้อัปเดตโค้ดใหม่ได้ทันที)
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
