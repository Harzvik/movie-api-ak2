import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About Gokflix</h1>

      <p className={styles.intro}>
        Gokflix is a school project that helps you find and explore movies.
      </p>

      <section className={styles.section}>
        <h2>Who is it for?</h2>
        <p>
          The website is for anyone interested in movies. You can
          search for a specific title, browse by genre or explore
          what’s trending.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Where does the data come from?</h2>
        <p>
          Movie titles, posters, descriptions, and ratings come from{" "}
          <a href="https://www.themoviedb.org/">
            The Movie Database (TMDB)
          </a>
          . The website uses the TMDB API to request and display this
          information.
        </p>
      </section>
    </div>
  );
}
