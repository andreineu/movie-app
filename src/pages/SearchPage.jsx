import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../components/loading/Loading";
import Pagination from "../components/Pagination/Pagination";
import SearchFilter from "../components/Search/SearchFilter";
import SearchItem from "../components/Search/SearchItem";
import useSearch from "../hooks/useSearch";

const SearchPage = () => {
  const location = useLocation();

  const URLParams = new URLSearchParams(location.search);
  // let query = URLParams.get("query");
  let page = URLParams.get("page");
  let type = location.pathname.slice(8);
  let [query, setQuery] = useState(URLParams.get("query"));
  let [searchValue, setSearchValue] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue) {
        setQuery(searchValue);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchValue]);
  const [data, loading, error] = useSearch(type, query, page);
  const { total_pages } = data;
  // onClick={()=>console.log(URLParams.toString())}
  return (
    <div className="site-container py-4">
      <div className="flex gap-8">
        <div className="w-1/5">
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
          {loading ? (
            <Loading />
          ) : error ? (
            <h1>Error</h1>
          ) : data.results.length === 0 ? (
            <h1>No results found</h1>
          ) : (
            data.results.map((searchItem) => (
              <SearchItem
                key={searchItem.id}
                searchItem={searchItem}
                mediaType={type}
              />
            ))
          )}
          <Pagination totalPages={total_pages} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
