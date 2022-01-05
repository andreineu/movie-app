import { Link } from "react-router-dom";
import useFetching from "../../hooks/useFetching";
import CardLoading from "../loading/CardLoading";

const Card = ({ imgUrl, title, releaseDate, rating, id, mediaType }) => {
  let cardUrl = `/movie/${id}-${title.toLowerCase().split(" ").join("-")}`;
  if (mediaType === "tv") {
    cardUrl = `/tv/${id}-${title.toLowerCase().split(" ").join("-")}`;
  }

  const baseUrl = "https://www.themoviedb.org/t/p";
  const imgSmall = baseUrl + `/w300${imgUrl}`;
  return (
    <Link to={cardUrl} className="w-full relative group">
      <img
        className="rounded-lg shadow-lg "
        src={imgSmall}
        alt="movie"
        loading="lazy"
      />
      {/* <RatingBadge rating={rating} classes="relative bottom-4 left-2" /> */}
      <div className="p-2 relative">
        <p className="font-semibold text-sm hover:text-indigo-500 transition-colors">
          {title}
        </p>
        {/* <p className="text-gray-500">{releaseDate}</p> */}
      </div>
      <div className="group-hover:block group-hover:opacity-100 opacity-5 group-hover:transition-opacity hidden w-[150%] h-32 dark:bg-gray-900 bg-gray-100 shadow px-6 py-4 rounded-xl absolute left-full top-0 ml-4 mt-4 z-50 text-white">
        <p className="text-lg dark:text-gray-400 text-gray-800">{releaseDate}</p>
        <p className="text-sm mt-1 dark:text-gray-400 text-gray-700">{mediaType}</p>
        <ul className="flex gap-3 mt-4">
          <li className="px-3 py-1 bg-indigo-700 rounded-full text-xs">
            Action
          </li>
          <li className="px-3 py-1 bg-indigo-700 rounded-full text-xs">
            Comedy
          </li>
        </ul>
      </div>
    </Link>
  );
};

const BrowseRow = ({ fetchUrl, title }) => {
  const response = useFetching(fetchUrl);
  const { data: fetchedData, loading: isLoading } = response;
  const movies = fetchedData.results;
  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h5 className="font-semibold text-gray-600 text-2xl  mb-4">{title}</h5>
        <button className="font-semibold text-sm text-gray-500">
          View all
        </button>
      </div>
      {/* grid xl:grid-cols-6 2xl:grid-cols-7 md:grid-cols-5 gap-8 */}
      <div className="w-full grid gap-8 2xl:grid-cols-6 xl:grid-cols-5 grid-cols-4">
        {isLoading ? (
          [...Array(5)].map((e, i) => <CardLoading key={i} />)
        ) : movies ? (
          movies.map((movie, i) => (
            <Card
              key={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title || movie.name}
              releaseDate={movie.release_date || movie.first_air_date}
              rating={movie.vote_average}
              id={movie.id}
              mediaType={movie.media_type}
            />
          ))
        ) : (
          <h3>Error fetching data</h3>
        )}
      </div>
    </div>
  );
};

export default BrowseRow;
