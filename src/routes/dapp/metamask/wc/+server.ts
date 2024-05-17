import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (page) => {
  let uri = page.url.searchParams.get('uri');
  const requestId = page.url.searchParams.get('requestId');
  if (uri) {
    uri = uri.replace('wc', 'metamask');
    console.log(uri)
    return Response.redirect(uri, 302);
  } else if (requestId) {
    return Response.redirect('metamask:' + requestId, 302);
  } else {
    return new Response('Not correct params', { status: 200 });
  }
  // return new Response(`<?xml version="1.0" encoding="UTF-8"?>
  //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //   </urlset>
  // `, {
	// 	headers: {
	// 		'Cache-Control': 'max-age=0, s-maxage=3600',
	// 		'Content-Type': 'application/xml'
	// 	}
	// });
};