// Pagination.jsx

import React from "react";

export const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};
