import React from "react";

const Pagination = ({ page, totalPage, onPageChange }) => {
  return (
    <div>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
