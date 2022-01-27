import { useCallback, useState } from "react";
import { useLocation } from "react-router";

import LoadingSpiner from "../components/loading/LoadingSpinner";
import Pagination from "../components/pagination/Pagination";
import SearchFilter from "../components/search/SearchFilter";
import SearchItem from "../components/search/SearchItem";

import useFetch from "../hooks/useFetch";
import { serviceGetSearch } from "../services";

const SearchPage = () => {
  const location = useLocation();

  const URLParams = new URLSearchParams(location.search);

  const page = URLParams.get("page");
  const mediaType = location.pathname.slice(8);

  const query = URLParams.get("query");
  const [searchValue, setSearchValue] = useState(query);

  const searchFn = useCallback(
    () => serviceGetSearch(mediaType, query, page),
    [mediaType, query, page]
  );

  const { data, error, loading } = useFetch(searchFn);
  const total_pages = data?.total_pages;

  return (
    <div className="site-container py-4">
      <div className="flex gap-8">
        <div className="w-52">
          <div className="mb-4 border dark:border-none">
            <label className="flex dark:bg-gray-700 rounded items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="input"
                className="w-full rounded py-2 pl-2 text-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </label>
          </div>
          <SearchFilter query={query} />
        </div>
        <div className="flex flex-col space-y-4 w-4/5 ">
          {loading && <LoadingSpiner />}
          {error && <h1>Error</h1>}
          {data?.results?.length === 0 && <h1>No results found</h1>}
          {data?.results?.map((searchItem) => (
            <SearchItem
              key={searchItem.id}
              searchItem={searchItem}
              mediaType={mediaType}
            />
          ))}
          <Pagination totalPages={total_pages} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
