import type { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>

        <main>{children}</main>

        <footer>
          <p>Movie data from TMDB. Made by Alex Harsvik.</p>
        </footer>
      </body>
    </html>
  );
}
