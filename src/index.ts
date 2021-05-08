import { Router } from './Router'

addEventListener('fetch', (event) => {
  event.respondWith(Router.route(event.request));
})
