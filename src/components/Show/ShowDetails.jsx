import { formatMinutes } from "../../helpers";
import RatingBadge from "../misc/RatingBadge";

const MovieDetails = ({ show }) => {
  const genres = show ? show.genres.map((genre) => genre.name).join(", ") : "";
  const showDuration = formatMinutes(show.episode_run_time[0]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="font-bold text-4xl ">{show.name}</h1>
            <span className="text-3xl font-semibold text-gray-300">
              ({show.first_air_date.slice(0, 4)})
            </span>
          </div>
          <div className="flex gap-8 text-sm text-gray-300">
            <span>{genres}</span>
            <span>{showDuration}</span>
          </div>
        </div>
      </div>

      <div className="flex h-16 items-center gap-2">
        <RatingBadge rating={show.vote_average} classes="h-12 w-12" />
        <span className="font-semibold">Average score</span>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">Description</h3>
        <p>{show.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
