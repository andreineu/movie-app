import { Link } from "react-router-dom";

import { capitalizeFirstLetter, getGenres, makeUrl } from "../../helpers";

const BrowseCard = (props) => {
  const { imgUrl, title, releaseDate, rating, id, mediaType, genreIDs } = props;
  let url = makeUrl(mediaType, id, title);

  const baseUrl = "https://www.themoviedb.org/t/p";
  const imgSmall = baseUrl + `/w300${imgUrl}`;
  let genreList = getGenres(genreIDs, mediaType);

  return (
    <Link to={url} className="w-full relative group">
      <img
        className="rounded-lg shadow-lg"
        src={imgSmall}
        alt="movie"
        loading="lazy"
      />
      <div className="p-2 relative">
        <p className="font-semibold text-sm hover:text-indigo-500 transition-colors">
          {title}
        </p>
      </div>
      <div className="hover:opacity-100 transition-opacity opacity-0 bg-black/60 absolute inset-x-0 top-0 rounded-lg p-4">
        <p className="text-lg dark:text-gray-400 text-gray-800">
          {releaseDate}
        </p>
        <p className="text-sm mt-1 dark:text-gray-400 text-gray-700">
          {capitalizeFirstLetter(mediaType)}
        </p>
        <p className="dark:text-gray-400 text-gray-700">Rating: {rating}</p>
        <ul className="flex gap-3 mt-4 flex-wrap">
          {genreList.map((genre) => (
            <li
              className="px-3 py-1 bg-indigo-700 rounded-full text-xs"
              key={genre}
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default BrowseCard;
