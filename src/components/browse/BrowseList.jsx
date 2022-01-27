import { Link } from "react-router-dom";
import CardLoading from "../loading/CardLoading";
import BrowseCard from "./BrowseCard";

const BrowseList = ({ data, loading, error, title }) => {
  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h5 className="font-semibold text-gray-600 text-2xl  mb-4">{title}</h5>
        <Link to="/" className="font-semibold text-sm text-gray-500">
          View all
        </Link>
      </div>
      <div className="w-full grid gap-8 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-4">
        {loading && [...Array(10)].map((e, i) => <CardLoading key={i} />)}
        {data &&
          data.map((movie, i) => (
            <BrowseCard
              genreIDs={movie.genre_ids}
              key={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title || movie.name}
              releaseDate={movie.release_date || movie.first_air_date}
              rating={movie.vote_average}
              id={movie.id}
              mediaType={movie.media_type || "movie"}
            />
          ))}

        {error && <h3>Error fetching data</h3>}
      </div>
    </div>
  );
};

export default BrowseList;
