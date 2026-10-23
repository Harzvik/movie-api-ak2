import type {
  Movie,
  MovieDetails,
  MovieListResponse,
} from "../types/movie.type";

//unified logic to catch errors, responses and variables
//trying smth new here, LET ME COOK
const API_URL = "https://api.themoviedb.org/3";

async function fetchFromTMDB<T>(path: string): Promise<T> {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    throw new Error("TMDB_API_KEY is missing.");
  }

  const url = new URL(`${API_URL}${path}`);
  url.searchParams.set("api_key", apiKey);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status}).`);
  }

  return response.json();
}


//API calls
export async function getMovie(id: number): Promise<MovieDetails> {
  if (!Number.isSafeInteger(id) || id <= 0) {
    throw new Error("Movie ID must be a positive integer.");
  }

  return fetchFromTMDB<MovieDetails>(`/movie/${id}`);
}

export async function getTrendingMovies(
  timeWindow: "day" | "week" = "week",
): Promise<Movie[]> {
  const data = await fetchFromTMDB<MovieListResponse>(
    `/trending/movie/${timeWindow}`,
  );

  return data.results;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  const params = new URLSearchParams({
    query: trimmedQuery,
  });

  const data = await fetchFromTMDB<MovieListResponse>(
    `/search/movie?${params.toString()}`,
  );

  return data.results;
}
