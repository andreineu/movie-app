import PaginationItem from "./PaginationItem";
import { useSearchParams } from "react-router-dom";

import { ArrowLeft, ArrowRight } from "./PaginationArrows";

const Pagination = ({ totalPages }) => {
  let [searchParams] = useSearchParams();
  const currentPage = +searchParams.get("page") || 1;
  // let totalPages = 10

  let paginateItems = (
    <>
      {currentPage < 5 ? (
        <PaginationItem pageNum={2} />
      ) : (
        <span className="flex items-end py-1">...</span>
      )}
      {currentPage > 3 && totalPages - currentPage > 3 ? (
        <>
          <PaginationItem pageNum={currentPage - 1} />
          <PaginationItem pageNum={currentPage} />
          <PaginationItem pageNum={currentPage + 1} />
        </>
      ) : totalPages - currentPage > 3 ? (
        <>
          <PaginationItem pageNum={3} />
          <PaginationItem pageNum={4} />
          <PaginationItem pageNum={5} />
        </>
      ) : (
        <>
          <PaginationItem pageNum={totalPages - 4} />
          <PaginationItem pageNum={totalPages - 3} />
          <PaginationItem pageNum={totalPages - 2} />
        </>
      )}
      {totalPages - currentPage < 4 ? (
        <PaginationItem pageNum={totalPages - 1} />
      ) : (
        <span className="flex items-end py-1">...</span>
      )}
      <PaginationItem pageNum={totalPages} />{" "}
    </>
  );
  return (
    <div className="flex gap-1 mx-auto my-4">
      <ArrowLeft />
      <PaginationItem pageNum={1} />

      {totalPages ? totalPages > 7
        ? paginateItems
        : [...Array(totalPages - 1)].map((n, i) => (
            <PaginationItem key={i} pageNum={i + 2} />
          )) : ''}

      <ArrowRight totalPages={totalPages} />
    </div>
  );
};

export default Pagination;
