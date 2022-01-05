import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ themeHandlerOn, themeHandlerOff }) => {
  const [isValid, setIsValid] = useState(true);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const classes = isValid ? " " : "border-2 border-red-500";
  useEffect(() => {
    if (input.length > 0) {
      setIsValid(true);
    }
  }, [input]);
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input === "") {
      setIsValid(false);
      return;
    }
    const encoded = encodeURI(input);
    navigate(`/search/movie?query=${encoded}`);
    setInput("");
  };
  return (
    <header className=" fixed inset-x-0 top-0 bg-indigo-900 dark:bg-gray-800 text-white z-50 shadow-2xl ">
      <div className="site-container flex justify-between h-16 items-center">
        <div className="flex items-center gap-10">
          <NavLink to="/" className="logo text-2xl font-bold">
            Movie-app
          </NavLink>
          <ul className="flex gap-10 font-semibold">
            <li>
              <NavLink to="/browse">Browse</NavLink>
            </li>
            <li>
              <NavLink to="/">Tv Shows</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <p className="text-sm">Site Theme</p>
          <button
            className="bg-zinc-200 h-5 w-5 m-1  font-sm rounded  text-zinc-900"
            onClick={themeHandlerOff}
          ></button>
          <button
            className="bg-zinc-600 h-5 w-5 m-1 font-sm rounded text-zinc-300"
            onClick={themeHandlerOn}
          ></button>
        </div>
        <form onSubmit={submitHandler} className="relative">
          <input
            onClick={() => setIsValid(true)}
            onChange={inputChangeHandler}
            value={input}
            className={`p-2 rounded text-sm focus:outline-none box-content text-gray-700 ${classes}`}
            type="text"
            placeholder="Search for... "
          />
          <button
            type="submit"
            className="absolute right-2 text-gray-500 top-1/2 -translate-y-1/2"
          >
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
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
