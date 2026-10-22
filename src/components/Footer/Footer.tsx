import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Made by Alex Harsvik.</p>

        <p>
          Movie data provided by{" "}
          <a href="https://www.themoviedb.org/">TMDB</a>.
        </p>
      </div>
    </footer>
  );
}
