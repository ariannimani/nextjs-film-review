import React, { FC, useState } from "react";

interface PaginationProps {
  page: number;
  title: string;
  total_pages: number;
  perPageNumber: number;
  setPerPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const options = [5, 10, 20];

const Pagination: FC<PaginationProps> = ({
  page,
  title,
  total_pages,
  perPageNumber,
  setPerPageNumber,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = Array.from({ length: total_pages }, (_, i) => i + 1);
  const lastPage = pageNumbers.length;

  return (
    <div className="topbar-filter">
      <label>{title} per page:</label>
      <select
        value={perPageNumber}
        onChange={(e) => setPerPageNumber(Number(e.target.value))}
      >
        {options.map((number) => (
          <option key={number} value={number}>
            {number} Reviews
          </option>
        ))}
      </select>
      <div className="pagination2 ">
        <span>
          Page {page} of {total_pages}:
        </span>
        {pageNumbers.slice(0, 4).map((page) => (
          <a
            key={page}
            className={`cursor-class ${currentPage === page ? "active" : ""}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </a>
        ))}
        {lastPage > 4 && (
          <div style={{ color: "#ffffff" }}>
            ... <a className="cursor-class">{lastPage}</a>
          </div>
        )}

        <a href="#">
          <i className="ion-arrow-right-b"></i>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
