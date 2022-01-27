import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBanner = () => {
  const [validated, setValidated] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const classes = validated ? "" : "border-red-500 dark:border-red-800";

  useEffect(() => {
    if (searchInput.length > 0) {
      setValidated(true);
    }
  }, [searchInput]);

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchInput === "") {
      setValidated(false);
      return;
    }
    const encoded = encodeURI(searchInput);
    navigate(`/search/movie?query=${encoded}`);
  };

  return (
    <div className="mb-4 -mx-8 bg-gray-700 h-[400px] relative">
      <div className="px-10 absolute bottom-20 w-full">
        <h2 className="text-white text-5xl font-bold">Welcome</h2>
        <p className="text-white text-3xl font-semibold">
          Explore millions of movies and tv shows
        </p>
        <form className="my-10 relative" onSubmit={submitHandler}>
          <input
            onClick={() => setValidated(true)}
            onChange={inputChangeHandler}
            value={searchInput}
            className={`${classes} dark:bg-gray-800 dark:border-gray-800 border-2 w-full px-6 h-12 rounded-full focus:outline-none shadow-xl`}
            type="text"
            placeholder="Search..."
          />
          <input
            className="shadow-rose-600 shadow absolute -right-1 bg-rose-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-rose-800 hover:shadow-rose-800 transition-colors"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBanner;
