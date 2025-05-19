// ProductList.jsx

import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Pagination } from "../Pagination/Pagination";

const ProductList = ({ products, page, totalPages, onPageChange }) => {
  return (
    <section>
      <div>
        <h2>Products</h2>
        <div>
          {products.map((p) => (
            <ProductCard key={p.id} products={p} />
          ))}
        </div>
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default ProductList;
