import { baseURL } from "../../api";
import MovieDetails from "./MovieDetails";

const Movie = ({ movie }) => {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${baseURL + " original" + movie.backdrop_path})`,
        backgroundPosition: "right -200px top",
        backgroundSize: "cover",
      }}
    >
      <div className="background py-8">
        <div className="container mx-auto px-8 flex text-white">
          <img
            className="w-80 rounded-xl mr-8"
            src={baseURL + "original" + movie.poster_path}
            alt="movie_poster"
          />
          <MovieDetails movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
