import { handleRequest } from './handler'
import { Router } from './Router'



addEventListener('fetch', (event) => {

  const router = new Router();

  event.respondWith(router.route(event.request));
})
