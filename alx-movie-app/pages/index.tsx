import { useState } from "react";
import Layout from '@/components/layout/Layout';
import MovieCard from '@/components/commons/MovieCard';
import Button from '@/components/commons/Button';
import Loading from '@/components/commons/Loading';
import useFetchData from '@/hooks/useFetchData';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

type MovieResponse = {
  results: Movie[];
};

export default function Home() {
  const [, setGenre] = useState("Now Playing");  // 👈 removed unused genre variable

  const { data, loading, error } = useFetchData<MovieResponse>('/movie/now_playing');

  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 py-10">
        <h1 className="text-3xl font-bold">Welcome to ALX Movie App 🎬</h1>

        {loading && <Loading />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {["Now Playing", "Popular", "Upcoming", "Top Rated"].map((g) => (
          <Button
            key={g}                   // ✅ valid inside map
            title={g}
            onClick={() => setGenre(g)}
          />
        ))}
      </div>
    </Layout>
  );
}