import styles from "./SearchBar.module.css";

type SearchBarProps = {
  label?: string;
  defaultValue?: string;
};

export default function SearchBar({
  label = "Search movies",
  defaultValue = "",
}: SearchBarProps) {
  return (
    <form
      action="/browse"
      method="get"
      role="search"
      aria-label={label}
      className={styles.form}
    >
      <label className={styles.label}>
        <span className={styles.hidden}>{label}</span>

        <input
          type="search"
          name="query"
          placeholder="Search movies…"
          defaultValue={defaultValue}
          className={styles.input}
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
