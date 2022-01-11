import { useState } from "react";
import { useNavigate } from "react-router";

const FilterSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchInput === "") return;
    const encoded = encodeURI(searchInput);
    navigate(`/search/movie?query=${encoded}`);
  };
  return (
    <label className="flex flex-col">
      <div className="font-semibold dark:text-gray-400 text-gray-600 py-3">
        Search
      </div>
      <div className="flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-md shadow-lg">
        <input
          className="outline-none dark:bg-gray-700 dark:text-gray-300 text-gray-500 py-3 pl-3 rounded-md"
          type="input"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit" onClick={submitHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </label>
  );
};

export default FilterSearch;
