import MovieDetails from "./MovieDetails";

const Movie = ({ movie }) => {
  const baseUrl = "https://www.themoviedb.org/t/p/original";

  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${baseUrl + movie.backdrop_path})`,
        backgroundPosition: "right -200px top",
        backgroundSize: "cover",
      }}
    >
      <div className="background py-8">
        <div className="container mx-auto px-8 flex text-white">
          <img
            className="w-80 rounded-xl mr-8"
            src={baseUrl + movie.poster_path}
            alt="movie_poster"
          />
          <MovieDetails movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
