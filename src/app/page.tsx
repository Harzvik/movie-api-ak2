import Link from "next/link";
import SearchBar from "@/components/SearchBar/SearchBar";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import { getTrendingMovies } from "@/api/tmdb";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  const movies = await getTrendingMovies();

  const featuredMovies = movies
    .filter((movie) => movie.poster_path)
    .slice(0, 3);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Welcome to Gokflix</p>

          <h1 className={styles.heading}>
            What are you
            <br />
            watching tonight?
          </h1>

          <p className={styles.description}>
            Find a movie you’ve been meaning to watch, or see what’s
            trending this week.
          </p>

          <div className={styles.search}>
            <SearchBar label="Find a movie from the homepage" />
          </div>

          <Link href="/browse" className={styles.browseLink}>
            Browse movies <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.posters} aria-hidden="true">
          {featuredMovies.map((movie) => (
            <Image
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt=""
              width={342}
              height={513}
              className={styles.poster}
            />
          ))}
        </div>
      </section>

      <div className={styles.trending}>
        <MovieCarousel title="Trending this week" movies={movies} />
      </div>
    </div>
  );
}
