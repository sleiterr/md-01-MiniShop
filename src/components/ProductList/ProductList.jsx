// ProductList.jsx

import React, { useContext, useState, useEffect } from "react";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProductCard from "../ProductCard/ProductCard";
import { Pagination } from "../Pagination/Pagination";
import { ProductContext } from "../../ProductsContext/ProductsContext";

const ProductList = () => {
  const { products, page, totalPages, onPageChange } =
    useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <section>
      <h2>Products</h2>
      <FilterPanel products={products} onFilter={setFilteredProducts} />
      <div>
        {(filteredProducts.length ? filteredProducts : products).map((p) => (
          <ProductCard key={p.id} products={p} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
};

export default ProductList;
