import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderForm = () => {
  const [isValid, setIsValid] = useState(true);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const classes = isValid ? " " : "border-red-500 ";
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
    <form onSubmit={submitHandler} className="relative">
      <input
        onClick={() => setIsValid(true)}
        onChange={inputChangeHandler}
        value={input}
        className={`p-2 rounded text-sm focus:outline-none border-2 text-gray-700 ${classes}`}
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
  );
};

export default HeaderForm;
