import { useLocation } from "react-router";
import Loading from "../components/loading/Loading";
import Pagination from "../components/Pagination/Pagination";
import SearchFilter from "../components/Search/SearchFilter";
import SearchItem from "../components/Search/SearchItem";
import useSearch from "../hooks/useSearch";

const SearchPage = () => {
  const location = useLocation();

  const URLParams = new URLSearchParams(location.search)
  let query = URLParams.get("query")
  let page = URLParams.get("page")

  let type = location.pathname.slice(8);
  const [data, loading, error] = useSearch(type, query, page);
  const { total_pages  } = data
  // onClick={()=>console.log(URLParams.toString())}
  return (
    <div className="site-container py-4" >
      <div className="flex gap-8">
        <SearchFilter query={query} />
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
          <Pagination totalPages={total_pages}/>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
