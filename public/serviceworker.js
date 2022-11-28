const CACHE_NAME = "static-dog-app";
const urlsToCache = [
    '/static/js/*.js',
    '/static/js/*.js.map',
    '/static/css/*.css',
    '/static/css/*.css.map',
    '/offline.json',
    '/error.png',
];

const self = this;

self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('in install service worker... cache opened');
            return cache.addAll(urlsToCache);
        })
    );
})

// Active service worker
self.addEventListener('active', (event) => {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                    .filter(function (cacheName) {
                        return cacheName != CACHE_NAME
                    })
                    .map(function (cacheName) {
                        return caches.delete(cacheName);
                    })
            )
        })
    )
})

// Listen for requst
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Pisahkan request API dan internal

    if (url.origin === location.origin) {
        // untuk internal assest
        event.respondWith(
            caches.match(request).then((responses) => {
                return responses || fetch(request);
            })
        )
    } else {
        // untuk fetch data dari API
        event.respondWith(
            caches.open('dynamic-dog-api').then((cache) => {
                return fetch(request).then((liveResponse) => {
                    cache.put(request, liveResponse.clone());
                    return liveResponse;
                }).catch(() => {
                    return caches.match(request)
                        .then((response) => {
                            if (response) return response
                            return caches.match('/offline.json')
                        })
                })
            })
        )
    }
})
