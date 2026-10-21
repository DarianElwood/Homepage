# Homepage

This is the repo for my website.

The site is deployed with Vercel. The browser calls the server-side
`api/recent-tracks.js` function, which keeps the Last.fm API key out of the
frontend bundle.

For local development or Vercel, set `LASTFM_API_KEY` as a server environment
variable. Do not use a `VITE_` prefix for this secret.

Made using ReactJS, MaterialUI and bundled with Vite.
