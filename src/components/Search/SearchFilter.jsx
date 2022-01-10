import { NavLink } from "react-router-dom";

const SearchFilter = ({ query }) => {
  const navLink = (type) => `/search/${type}?query=${query}`;

  return (
    <div className="flex flex-col rounded-lg border dark:border-gray-900 dark:bg-gray-900 border-gray-300 h-80 overflow-hidden sticky top-20">
      <p className="p-4 h-14 bg-indigo-700 text-white font-bold text-lg ">
        Search results
      </p>
      <div className="flex flex-col justify-center h-full">
        <NavLink
          className="hover:bg-gray-200 dark:hover:bg-gray-800 py-3 px-4 transition-colors relative group"
          to={navLink("movie")}
        >
          Movies
        </NavLink>

        <NavLink
          className="hover:bg-gray-200 dark:hover:bg-gray-800 py-3 px-4 transition-colors relative group"
          to={navLink("tv")}
        >
          TV Shows
        </NavLink>

        <NavLink
          className="hover:bg-gray-200 dark:hover:bg-gray-800 py-3 px-4 transition-colors relative group"
          to={navLink("person")}
        >
          People
        </NavLink>

        <NavLink
          className="hover:bg-gray-200 dark:hover:bg-gray-800 py-3 px-4 transition-colors relative group"
          to={navLink("company")}
        >
          Companies
        </NavLink>

        <NavLink
          className="hover:bg-gray-200 dark:hover:bg-gray-800 py-3 px-4 transition-colors relative group"
          to={navLink("collection")}
        >
          Collections
        </NavLink>
      </div>
    </div>
  );
};

export default SearchFilter;
