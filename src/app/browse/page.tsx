import { getTrendingMovies, searchMovies } from "@/api/tmdb";
import MovieGrid from "@/components/MovieGrid/MovieGrid";

type BrowseProps = {
  searchParams: Promise<{
    query?: string | string[];
  }>;
};

export default async function Browse({ searchParams }: BrowseProps) {
  const params = await searchParams;

  const query =
    typeof params.query === "string" ? params.query.trim() : "";

  const movies = query
    ? await searchMovies(query)
    : await getTrendingMovies();

  return (
    <>
      <h1>
        {query ? `Search results for “${query}”` : "Browse movies"}
      </h1>

      {!query && <p>Explore this week’s trending movies.</p>}

      <MovieGrid movies={movies} />
    </>
  );
}
