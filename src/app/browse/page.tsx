import { getTrendingMovies } from "../../api/tmdb";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";


export default async function Browse() {
  const movies = await getTrendingMovies();
  return (
    <>
      <h1>Browse Movies</h1>
      <MovieCarousel title="Trending" movies={movies} />
    </>
  );
}
