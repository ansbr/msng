/** @type {import('@sveltejs/kit').Handle} */
import { languages, messengersBySlug } from '$lib/utils/config';

export async function handle({ event, resolve }) {

	const pathnames = event.url.pathname.split('/')
	if (pathnames[1]?.length && pathnames[2]?.length && messengersBySlug[pathnames[1]]) {
		return new Response('', { status: 301, headers: { Location: `/o?${pathnames[2]}=${pathnames[1]}` } });
	}

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      const locale = pathnames[1]
      if (locale && Object.keys(languages).includes(locale)) {
        return html.replace('<html lang="en">', `<html lang="${locale}">`);
      }
      return html;
    },
  });
 
  return response;
}