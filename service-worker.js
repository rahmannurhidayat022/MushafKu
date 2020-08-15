const CACHE_NAME = "mushafKuV2";
var urlsToCache = [
  "/",
  "/manifest.json",
  "/service-worker.js",
  "/index.html",
  "/src/js/script/register/register.js",
  "/src/pages/nav.html",
  "/src/pages/beranda.html",
  "/src/pages/ayat.html",
  "/src/pages/hadits.html",
  "/src/pages/tentang.html",
  "/src/css/style.css",
  "/src/css/materialize.css",
  "/src/css/materialize.min.css",
  "/src/js/materialize/materialize.js",
  "/src/js/materialize/materialize.min.js",
  "/src/js/script/component/navbar.js",
  "/src/js/script/main/load-page.js",
  "/asset/images/heroImg.png",
  "/asset/images/lamp.png",
  "/asset/images/logo app.png",
  "/asset/images/icons/icon-72x72.png",
  "/asset/images/icons/icon-96x96.png",
  "/asset/images/icons/icon-128x128.png",
  "/asset/images/icons/icon-144x144.png",
  "/asset/images/icons/icon-152x152.png",
  "/asset/images/icons/icon-192x192.png",
  "/asset/images/icons/icon-384x384.png",
  "/asset/images/icons/icon-512x512.png",
  "https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&display=swap",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "/asset/iconfont/material-icons.css",
  "/asset/iconfont/MaterialIcons-Regular.eot",
  "/asset/iconfont/MaterialIcons-Regular.ttf",
  "/asset/iconfont/MaterialIcons-Regular.woff",
  "/asset/iconfont/MaterialIcons-Regular.woff2",
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }
 
        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});