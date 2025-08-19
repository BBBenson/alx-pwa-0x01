import React from 'react';

// Reuse the Movie type
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
