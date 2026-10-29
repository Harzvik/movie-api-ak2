import Link from "next/link";
import {
  getGenres,
  getMoviesByGenre,
  getTrendingMovies,
  searchMovies,
} from "@/api/tmdb";
import MovieGrid from "@/components/MovieGrid/MovieGrid";
import styles from "./page.module.css";

type BrowseProps = {
  searchParams: Promise<{
    query?: string | string[];
    genre?: string | string[];
  }>;
};

export default async function Browse({ searchParams }: BrowseProps) {
  const params = await searchParams;

  const query =
    typeof params.query === "string" ? params.query.trim() : "";

  const genres = await getGenres();

  const selectedGenre = genres.find(
    (genre) => String(genre.id) === params.genre,
  );

  const movies = query
    ? await searchMovies(query)
    : selectedGenre
      ? await getMoviesByGenre(selectedGenre.id)
      : await getTrendingMovies();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {query
            ? `Search results for “${query}”`
            : selectedGenre
              ? `${selectedGenre.name} movies`
              : "Browse movies"}
        </h1>
      </div>

      {query ? (
        <Link href="/browse">Browse by genre instead</Link>
      ) : (
        <details className={styles.filters}>
          <summary className={styles.filterButton}>
            Filter{selectedGenre ? `: ${selectedGenre.name}` : ""}
          </summary>

          <form action="/browse" method="get" className={styles.filterForm}>
            <label htmlFor="genre">Genre</label>

            <select
              id="genre"
              name="genre"
              defaultValue={selectedGenre?.id ?? ""}
            >
              <option value="">All genres</option>

              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>

            <button type="submit">Apply</button>
          </form>
        </details>
      )}

      <MovieGrid movies={movies} />
    </div>
  );
}
