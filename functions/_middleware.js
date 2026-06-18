export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'crypto-yield-archive.pages.dev') {
    url.hostname = 'cya.badjoke-lab.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
