// Este é o Service Worker. Ele avisa ao celular que o App pode ser instalado.
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Apenas deixa a requisição passar normalmente, sem bloquear a internet
    e.respondWith(fetch(e.request));
});