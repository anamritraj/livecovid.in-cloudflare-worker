import { processCronTrigger } from './cron-workers/cronWorkers';
import { Router } from './Router'

addEventListener('fetch', (event) => {
  event.respondWith(Router.route(event.request));
})
addEventListener('scheduled', (event) => {
  event.waitUntil(processCronTrigger())
})