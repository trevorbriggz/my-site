export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // If the request is for an asset (js, css, images), let it pass through
  if (url.pathname.startsWith('/assets/') || url.pathname.includes('.')) {
    return env.ASSETS.fetch(request);
  }

  // Otherwise, serve the root index.html
  return env.ASSETS.fetch(new URL('/', request.url));
}