import React from 'react';
import useFetchData from '@/hooks/useFetchData';
import Image from 'next/image';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

const MoviesList: React.FC = () => {
  // Fetch popular movies from TMDB API
  const { data, loading, error } = useFetchData<{ results: Movie[] }>('/movie/popular');

  if (loading) return <p className="text-white text-center mt-10">Loading movies...</p>;

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
      {data?.results.map((movie) => (
        <div key={movie.id} className="bg-gray-800 rounded shadow overflow-hidden">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-[450px] flex items-center justify-center bg-gray-600 text-gray-300">
              No Image
            </div>
          )}
          <h3 className="p-2 text-white font-semibold text-center">{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;