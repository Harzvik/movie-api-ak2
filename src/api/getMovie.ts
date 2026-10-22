import { API_URL, API_KEY } from '../variables';

export async function getMovie(title: string) {
  const response = await fetch(`${API_URL}t=${encodeURIComponent(title)}${API_KEY}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch movie: ${response.status}`);
  }

  return response.json();
}
