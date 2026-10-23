"use client";

import Link from "next/link";
import type { Movie } from "../../types/movie.type";
import styles from "./MovieCarousel.module.css";
import { useRef } from "react";
import Image from "next/image";

type MovieCarouselProps = {
  title: string;
  movies: Movie[];
};

export default function MovieCarousel({
  title,
  movies,
}: MovieCarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  function scroll(direction: "left" | "right") {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    carousel.scrollBy({
      left: carousel.clientWidth * (direction === "left" ? -0.8 : 0.8),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>

        {movies.length > 0 && (
          <div className={styles.controls}>
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label={`Scroll ${title} left`}
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label={`Scroll ${title} right`}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>

      {movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <ul
          ref={carouselRef}
          className={styles.carousel}
          aria-label={`${title} movies`}
          tabIndex={0}
        >
          {movies.map((movie, index) => (
            <li key={movie.id} className={styles.card}>
              <span className={styles.rank} aria-hidden="true">
                {index + 1}
              </span>

              <Link
                href={`/movies/${movie.id}`}
                className={styles.link}
              >
                {movie.poster_path ? (
                  <Image
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

                <h3 className={styles.title}>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
