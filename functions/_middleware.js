export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pagesHost = url.hostname.endsWith('.crypto-yield-archive.pages.dev') || url.hostname === 'crypto-yield-archive.pages.dev';

  if (url.hostname === 'crypto-yield-archive.pages.dev') {
    url.hostname = 'cya.badjoke-lab.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  if (pagesHost) {
    if (url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nDisallow: /\n', {
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'public, max-age=300, must-revalidate',
          'x-robots-tag': 'noindex, nofollow, noarchive',
        },
      });
    }

    const response = await context.next();
    const previewResponse = new Response(response.body, response);
    previewResponse.headers.set('x-robots-tag', 'noindex, nofollow, noarchive');
    previewResponse.headers.set('link', '<https://cya.badjoke-lab.com/>; rel="canonical"');
    return previewResponse;
  }

  return context.next();
}
