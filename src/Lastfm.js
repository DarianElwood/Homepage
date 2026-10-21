export const getRecentTracks = async (user, limit = 10) => {
  const params = new URLSearchParams({
    user,
    limit: String(limit),
  });
  const response = await fetch(`/api/recent-tracks?${params}`);

  if (!response.ok) {
    throw new Error(`Recent tracks request failed with status ${response.status}.`);
  }

  return response.json();
};