import Link from "next/link";
import type { Movie } from "@/types/movie.type";
import styles from "./MovieGrid.module.css";

type MovieGridProps = {
  movies: Movie[];
};

export default function MovieGrid({ movies }: MovieGridProps) {
  if (movies.length === 0) {
    return <p>No movies found. Try another title.</p>;
  }

  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.card}>
          <Link
            href={`/${movie.id}/movie`}
            className={styles.link}
          >
            {movie.poster_path ? (
              //gad this annoys me...
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt=""
                width={342}
                height={513}
                loading="lazy"
                className={styles.poster}
              />
            ) : (
              <div className={styles.placeholder}>
                No poster available
              </div>
            )}

            <h2 className={styles.title}>{movie.title}</h2>
          </Link>

          <p className={styles.year}>
            {movie.release_date
              ? movie.release_date.slice(0, 4)
              : "Release year unknown"}
          </p>
        </li>
      ))}
    </ul>
  );
}
