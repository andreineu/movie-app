import requests from "../../API/requests";
import useFetching from "../../hooks/useFetching";

const Filters = () => {
  const { data: movieGenres} = useFetching(requests.fetchGenreList("movie"))
  const { data: tvGenres} = useFetching(requests.fetchGenreList("tv"))

  return (
    <div className="flex gap-10 mt-4" onClick={()=>console.log(movieGenres,tvGenres)}>
      <div className="flex flex-col"><div className="font-semibold dark:text-gray-400 text-gray-600 py-3">Search</div> <input className="outline-none border-indigo-500 dark:bg-gray-700 dark:text-gray-300 text-gray-500 py-3 px-4 rounded-md shadow-lg  " type="input"/></div>
      <div className="flex flex-col"><div className="font-semibold dark:text-gray-400 text-gray-600 py-3">Genres</div> <input className="outline-none border-indigo-500 dark:bg-gray-700 dark:text-gray-300 text-gray-500 py-3 px-4 rounded-md shadow-lg  " type="input"/></div>
      <div className="flex flex-col"><div className="font-semibold dark:text-gray-400 text-gray-600 py-3">Search</div> <input className="outline-none border-indigo-500 dark:bg-gray-700 dark:text-gray-300 text-gray-500 py-3 px-4 rounded-md shadow-lg  " type="input"/></div>
      <div className="flex flex-col"><div className="font-semibold dark:text-gray-400 text-gray-600 py-3">Search</div> <input className="outline-none border-indigo-500 dark:bg-gray-700 dark:text-gray-300 text-gray-500 py-3 px-4 rounded-md shadow-lg  " type="input"/></div>
    </div>
  );
};

export default Filters;
