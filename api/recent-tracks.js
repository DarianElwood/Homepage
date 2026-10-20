import process from 'node:process';

export default async function handler(request, response) {
  const user = typeof request.query.user === 'string' ? request.query.user.trim() : '';
  const requestedLimit = Number.parseInt(request.query.limit ?? '1', 10);
  const limit = Number.isInteger(requestedLimit)
    ? Math.min(Math.max(requestedLimit, 1), 50)
    : 1;

  if (!user) {
    response.status(400).json({ error: 'Missing Last.fm username.' });
    return;
  }

  const apiKey = process.env.LASTFM_API_KEY;
  const apiUrl = process.env.LASTFM_API_BASE_URL;

  if (!apiKey || !apiUrl) {
    console.error('Last.fm server environment variables are not configured.');
    response.status(500).json({ error: 'Last.fm is not configured.' });
    return;
  }

  const params = new URLSearchParams({
    method: 'user.getrecenttracks',
    user,
    limit: String(limit),
    api_key: apiKey,
    format: 'json',
  });

  try {
    const lastFmResponse = await fetch(`${apiUrl}?${params}`);
    const data = await lastFmResponse.json();

    if (!lastFmResponse.ok || data.error) {
      console.error('Last.fm request failed:', data.message || lastFmResponse.status);
      response.status(lastFmResponse.ok ? 502 : lastFmResponse.status).json({
        error: 'Last.fm request failed.',
      });
      return;
    }

    response.status(200).json(data.recenttracks?.track ?? []);
  } catch (error) {
    console.error('Last.fm request failed:', error);
    response.status(502).json({ error: 'Unable to fetch recent tracks.' });
  }
}
