import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles.page} role="status">
      <p>Loading movie details…</p>

      <div className={styles.details} aria-hidden="true">
        <div className={`${styles.placeholder} ${styles.skeleton}`} />

        <div>
          <div className={`${styles.skeletonTitle} ${styles.skeleton}`} />
          <div className={`${styles.skeletonText} ${styles.skeleton}`} />
        </div>
      </div>
    </div>
  );
}
