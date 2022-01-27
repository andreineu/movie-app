import { Link } from "react-router-dom";
import { makeUrl } from "../../helpers";

import CardLoading from "../loading/CardLoading";
import RatingBadge from "./RatingBadge";

const CardSmall = ({ imgUrl, title, releaseDate, rating, id, mediaType }) => {
  const url = makeUrl(mediaType, id, title);

  const baseUrl = "https://www.themoviedb.org/t/p";
  const imgSmall = baseUrl + `/w200${imgUrl}`;
  return (
    <Link to={url} className="w-40 flex-shrink-0 relative ">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img className="h-60" src={imgSmall} alt="movie" loading="lazy" />
      </div>

      <RatingBadge rating={rating} classes="relative bottom-4 left-2" />
      <div className="px-2 relative bottom-2">
        <p className="font-semibold text-sm hover:text-indigo-500 transition-colors">
          {title}
        </p>
        <p className="text-gray-500">{releaseDate}</p>
      </div>
    </Link>
  );
};

const MediaRow = ({ data, loading, error, title }) => {
  return (
    <div className="py-2">
      <h5 className="font-semibold text-3xl mb-4">{title}</h5>

      <div className="flex gap-4 flex-nowrap overflow-x-scroll scroller">
        {loading && [...Array(10)].map((e, i) => <CardLoading key={i} />)}
        {data &&
          data.map((movie) => (
            <CardSmall
              key={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title || movie.name}
              releaseDate={movie.release_date || movie.first_air_date}
              rating={movie.vote_average}
              id={movie.id}
              mediaType={movie.media_type}
            />
          ))}
        {error && <h3>Error fetching data</h3>}
      </div>
    </div>
  );
};

export default MediaRow;
