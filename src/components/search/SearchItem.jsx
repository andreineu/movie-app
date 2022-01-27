import { useNavigate } from "react-router";
import { makeUrl } from "../../helpers";

const SearchItem = ({ searchItem, mediaType }) => {
  const baseUrl = "https://www.themoviedb.org/t/p/w154";

  const title = searchItem.title || searchItem.name;
  const releaseDate = searchItem.release_date || searchItem.first_air_date;
  const overview = searchItem.overview;

  const url = makeUrl(mediaType, searchItem.id, title);

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(url);
  };
  return (
    <div
      key={searchItem.id}
      className="flex w-full h-[231px] shadow border border-gray-300 dark:border-gray-900 dark:bg-gray-900 rounded-lg overflow-hidden"
    >
      {searchItem.poster_path ? (
        <img
          onClick={navigateHandler}
          className="cursor-pointer"
          src={`${baseUrl}${searchItem.poster_path}`}
          alt={searchItem.title ? searchItem.item : searchItem.name}
        />
      ) : (
        <div className="w-[154px] bg-gray-400 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className="p-4 ">
        <h4
          className="font-bold text-xl hover:text-gray-500 cursor-pointer transition-colors"
          onClick={navigateHandler}
        >
          {title}
        </h4>
        <span className="text-gray-500 text-sm">{releaseDate}</span>
        <p className="mt-6 text-clip overflow-hidden h-[120px] ">{overview}</p>
      </div>
    </div>
  );
};

export default SearchItem;
