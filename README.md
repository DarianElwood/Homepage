# Homepage

This is the repo for my website.

The site is deployed as a static GitHub Pages site. The Last.fm API key is
provided to the build through the `LASTFM_API_KEY` GitHub Actions secret, and
the browser calls Last.fm directly because GitHub Pages does not run the
repository's serverless `api/` functions.

Made using ReactJS, MaterialUI and bundled with Vite.
