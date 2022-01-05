import RatingBadge from "../misc/RatingBadge";

const MovieDetails = ({ movie }) => {
  const genres = movie
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";

  const movieDuration = movie.runtiime > 60 ? `${Math.floor(movie.runtime / 60)}h ${
    movie.runtime % 60 
  }m` : movie.runtime === 0 ? null : `${movie.runtime % 60}m`
  
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="font-bold text-4xl ">{movie.title}</h1>
            { movie.release_date && <span className="text-3xl font-semibold text-gray-300">
              ({movie.release_date ? movie.release_date.slice(0, 4) : ""})
            </span> }
          </div>
          <div className="flex space-x-4 text-sm text-gray-300">
            { movie.release_date && <span>{movie.release_date}</span> }
            <span onClick={()=>console.log(movie)}>{genres}</span>
            { movieDuration && <span>{movieDuration}</span> }
          </div>
        </div>
      </div>
      <div className="flex h-16 items-center gap-2">
        <RatingBadge rating={movie.vote_average} classes="h-12 w-12" />
        <span className="font-semibold">Average score</span>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">Description</h3>
        {movie.overview ? <p>{movie.overview}</p> : <p>No overview added.</p>}
      </div>
    </div>
  );
};

export default MovieDetails;
