import type { RequestHandler } from './$types';
import { languages, messengersList } from '$lib/utils/config';

interface IPage {
  path: string
  priority: number
  lastmod: string
  frequency: string
}

export const GET: RequestHandler = async (page) => {
	const siteURL = page.url.origin;
	const priority = 0.6;
	const frequency = 'weekly';
  const lastmod = new Date().toISOString();

  const homePages = Object.entries(languages).map(lang => {
    const path = lang[0] == 'en' ? '' : '/' + lang[0];
    return { path, priority: lang[0] == 'en' ? 1 : 0.8 }
  })
  
  const generatorPages = Object.entries(languages).map(lang => {
    const prefix = lang[0] == 'en' ? '/' : '/' + lang[0] + '/';
    return { path: prefix + 'generator', priority: 0.8 }
  })

  const messengerPages = messengersList.map(messenger => {
    return Object.entries(languages).map(lang => {
      const prefix = lang[0] == 'en' ? '/' : '/' + lang[0] + '/';
      return { path:  prefix + messenger.name + '.html', priority: 0.8 }
    })
  }).flat()
  
	const pages: IPage[] = [
    ...homePages,
    ...generatorPages,
    ...messengerPages,
		{	path: '/service/privacy-policy', frequency: 'monthly'	},
		{	path: '/service/terms-and-conditions', frequency: 'monthly' }
	].map(page => ({ priority, frequency, lastmod, ...page }))

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map((entry) => {
					return `<url>
            <loc>${siteURL}${entry.path}</loc>
            <lastmod>${entry.lastmod}</lastmod>
            <changefreq>${entry.frequency}</changefreq>
            <priority>${entry.priority}</priority>
          </url>`;
				}).join('')}
    </urlset>`;

	return new Response(xml, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
};