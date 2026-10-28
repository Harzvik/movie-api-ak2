import Link from "next/link";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Gokflix
        </Link>

        <Nav />

        <div className={styles.search}>
          <SearchBar label="Search movies from the header" />
        </div>
      </div>
    </header>
  );
}
