
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 

  if (!movies || movies.length === 0) {
    return <div>No movies found</div>;
  }


  return (
    <div className="px-4 mt-20">
      <h1 className="text-xl font-bold text-white mb-2 mt-3">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex gap-4 ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

