"use client";

import styles from "./page.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function MovieError({ retry }: ErrorProps) {
  return (
    <div className={styles.page}>
      <h1>Couldn’t load this movie</h1>
      <p>Please try again later.</p>

      <button
        type="button"
        onClick={() => retry()}
        className={styles.retry}
      >
        Try again
      </button>
    </div>
  );
}
