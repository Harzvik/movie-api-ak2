import { getTrendingMovies, searchMovies } from "@/api/tmdb";
import MovieGrid from "@/components/MovieGrid/MovieGrid";
import styles from "./page.module.css";

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
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {query ? `Search results for “${query}”` : "Browse movies"}
        </h1>

        <p className={styles.description}>
          {query
            ? ""
            : "Explore this week’s trending movies."}
        </p>
      </div>

      <MovieGrid movies={movies} />
    </div>
  );
}
