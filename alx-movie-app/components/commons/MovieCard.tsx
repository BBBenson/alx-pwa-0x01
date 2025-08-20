import Image from 'next/image';

type MovieCardProps = {
  movie?: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date?: string;
  };
  // Support for individual props (for backward compatibility)
  title?: string;
  posterImage?: string;
  releaseYear?: string;
};

const MovieCard = ({ movie, title, posterImage, releaseYear }: MovieCardProps) => {
  // Use movie prop if provided, otherwise use individual props
  const movieTitle = movie?.title || title;
  const posterPath = movie?.poster_path || posterImage;
  const releaseDate = movie?.release_date || releaseYear;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {posterPath ? (
        <Image 
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={movieTitle || 'Movie poster'}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movieTitle}</h3>
        <p className="text-gray-600 text-sm">
          {releaseDate && `Released: ${releaseDate}`}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;