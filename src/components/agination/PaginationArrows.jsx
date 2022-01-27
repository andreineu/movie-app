import { useSearchParams } from "react-router-dom";

export const ArrowLeft = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const curPage = +searchParams.get("page") || 1

  const clickHandler = () => {
    if (curPage === 1) return

    let params = new URLSearchParams(window.location.search)
    params.set("page", curPage - 1)
    setSearchParams( params )   
  }

  return (<div
      onClick={clickHandler}
      href="#"
      className="flex items-center justify-center rounded-full w-8 h-8 hover:bg-gray-100 transition-colors"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>)
};

export const ArrowRight = ({totalPages}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const curPage = +searchParams.get("page") || 1

  const clickHandler = () => {
    if (curPage === totalPages) return

    let params = new URLSearchParams(window.location.search)
    params.set("page", curPage + 1)
    setSearchParams( params )   
  }
  return( <div
      onClick={clickHandler}
      href="#"
      className="flex items-center justify-center rounded-full w-8 h-8 hover:bg-gray-100 transition-colors"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>)
};