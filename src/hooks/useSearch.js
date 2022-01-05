import requests from "../API/requests";
import useFetching from "../hooks/useFetching";

const useSearch = (mediaType, searchQuery, page) => { 
  const query = encodeURI(searchQuery)
  const {data, loading, error} = useFetching(requests.fetchSearchResults(mediaType, query, page))
  return [data, loading, error] 
}

export default useSearch