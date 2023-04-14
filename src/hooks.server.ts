/** @type {import('@sveltejs/kit').Handle} */
import { languages } from '$lib/utils/config';

export async function handle({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      const locale = event.url.pathname.split('/')[1]
      if (locale && Object.keys(languages).includes(locale)) {
        return html.replace('<html lang="en">', `<html lang="${locale}">`);
      }
      return html;
    },
  });
 
  return response;
}