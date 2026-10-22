import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>Movie data from TMDB. Built by Alex Harsvik.</p>
        </footer>
      </body>
    </html>
  );
}
