import { useSearchParams } from "react-router-dom";

const PaginationItem = ({ pageNum }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const curPage = +searchParams.get("page") || 1;
  const activeStyles =
    curPage === pageNum ? "hover:bg-indigo-600 bg-indigo-600 text-white " : "";
  const clickHandler = () => {
    let params = new URLSearchParams(window.location.search);
    params.set("page", pageNum);
    setSearchParams(params);
  };
  return (
    <div
      onClick={clickHandler}
      className={`${activeStyles} flex items-center justify-center rounded-full w-8 h-8 hover:bg-gray-100 dark:hover:text-gray-700 transition-colors`}
    >
      {pageNum}
    </div>
  );
};

export default PaginationItem;
