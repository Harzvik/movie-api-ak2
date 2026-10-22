"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className={styles.nav}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={styles.link}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
