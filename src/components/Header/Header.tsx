import Link from "next/link";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Gokflix
        </Link>

        <Nav />
      </div>
    </header>
  );
}
