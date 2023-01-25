const STATIC_CACHE="static";

const APP_SHELL=[
    "/",
    "index.html",
    "stilo.css",
    "JS/functions.js",
    "JS/main.js",
    "JS/script.js",
    "JS/script2.js",
    "images/img.jpg",
]

self.addEventListener("install",(e)=>{
    const cacheStatic=caches
    .open(STATIC_CACHE)
    .then((cache)=>cache.addAll(APP_SHELL));

    e.wait.Until(cacheStatic);
});

self.addEventListener("fetch", (e) =>{
    console.log("fetch1 ", e.request);

    e.respondWith(
        catches
        .match(e.request)
        .then(res=> res || fetch(e.request))
        .catch(console.log)

        );
});