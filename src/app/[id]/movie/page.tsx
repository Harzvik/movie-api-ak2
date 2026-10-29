import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMovie } from "@/api/tmdb";
import styles from "./page.module.css";

type MoviePageProps = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movieId = Number(id);

  if (!Number.isSafeInteger(movieId) || movieId <= 0) {
    notFound();
  }

  const movie = await getMovie(movieId);

  return (
    <div className={styles.page}>
      <Link href="/browse" className={styles.back}>
        ← Browse movies
      </Link>

      <article className={styles.details}>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
            width={500}
            height={750}
            sizes="(max-width: 700px) 240px, 320px"
            className={styles.poster}
          />
        ) : (
          <div className={styles.placeholder}>No poster available</div>
        )}

        <div className={styles.content}>
          <h1 className={styles.title}>{movie.title}</h1>

          <dl className={styles.facts}>
            <div>
              <dt>Released</dt>
              <dd>{movie.release_date || "Unknown"}</dd>
            </div>

            <div>
              <dt>Runtime</dt>
              <dd>
                {movie.runtime
                  ? `${movie.runtime} minutes`
                  : "Unknown"}
              </dd>
            </div>

            <div>
              <dt>TMDB rating</dt>
              <dd>
                {movie.vote_average > 0
                  ? `${movie.vote_average.toFixed(1)} / 10`
                  : "Not rated"}
              </dd>
            </div>
          </dl>

          {movie.genres.length > 0 && (
            <ul className={styles.genres} aria-label="Genres">
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}

          <h2 className={styles.subheading}>About the movie</h2>
          <p className={styles.overview}>
            {movie.overview || "No description available."}
          </p>
        </div>
      </article>
    </div>
  );
}
