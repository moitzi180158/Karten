let currentPath = self.location.href.replace("/serviceworker.js", "");

const cacheName = "Karten"
const assets = [
    "/",
    "/index.html",
    "/script.js"
]

.map(url => currentPath + url)

self.addEventListener("install", installEvent => {
    installEvent.waitUntill( caches.open(cacheName).then(chache => {
        cacheName.addAll(assets)
    }))
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request)
        })
    )
});