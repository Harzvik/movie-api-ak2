import SearchBar from "@/components/SearchBar/SearchBar";
import { getTrendingMovies } from "@/api/tmdb";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import Link from "next/link";


export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <>
      <section>
        <h1>Find your next favourite movie</h1>

        <p>
          Search for movies, explore different genres, and discover
          what’s trending.
        </p>

        <SearchBar label="Find a movie from the homepage" />

        <Link href="/browse">Browse movies →</Link>
      </section>

      <MovieCarousel title="Trending this week" movies={movies} />
    </>
  );
}
