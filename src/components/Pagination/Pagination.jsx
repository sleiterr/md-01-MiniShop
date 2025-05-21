// Pagination.jsx

import React from "react";
import styles from "./Pagination.module.css"

export const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className={ styles.btnContainer}>
      <button className={styles.btnPagination} onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button
        className={styles.btnPagination} onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};
