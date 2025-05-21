// ProductList.jsx

import React, { useContext, useState, useEffect } from "react";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProductCard from "../ProductCard/ProductCard";
import { Pagination } from "../Pagination/Pagination";
import styles from "./ProductList.module.css";
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
      <div className="container">
        <h2>Products</h2>
        <FilterPanel products={products} onFilter={setFilteredProducts} />
        <div className={styles.productList}>
          {(filteredProducts.length ? filteredProducts : products).map((p) => (
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
