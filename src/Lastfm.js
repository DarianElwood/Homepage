export const getRecentTracks = async (user, limit = 10) => {
  try {
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
    const apiUrl = import.meta.env.VITE_LASTFM_API_BASE_URL;

    if (!apiKey || !apiUrl) {
      throw new Error('Last.fm environment variables are not configured.');
    }

    const params = new URLSearchParams({
      method: 'user.getrecenttracks',
      user,
      limit: String(limit),
      api_key: apiKey,
      format: 'json',
    });
    const response = await fetch(`${apiUrl}?${params}`);

    if (!response.ok) {
      throw new Error(`Last.fm request failed with status ${response.status}.`);
    }

    const data = await response.json();
    if (data.error) {
      throw new Error(data.message || 'Last.fm returned an error.');
    }

    return data.recenttracks?.track ?? [];
  } catch (error) {
    console.error('Error fetching recent tracks:', error);
    return [];
  }
};