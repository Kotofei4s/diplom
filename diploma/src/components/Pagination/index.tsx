import React from "react";
import "./style.scss";

interface Props {
  onClick: (page: number) => void;
  currentPage: number; // Add currentPage prop
}

function Pagination({ onClick, currentPage }: Props) {
  const pages = [1, 2, 3, 4];

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onClick(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pages.length) {
      onClick(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className="pagination__arrow"
      >
        ←
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onClick(page)}
          className={`pagination__button ${
            currentPage === page ? "active" : ""
          }`}
        >
          <p className="button__text">{page}</p>
        </button>
      ))}

      <button
        onClick={goToNextPage}
        disabled={currentPage === pages.length}
        className="pagination__arrow"
      >
        →
      </button>
    </div>
  );
}

export default Pagination;
