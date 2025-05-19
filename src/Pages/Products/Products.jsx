// Products.jsx

import React, { useContext } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { ProductContext } from "../../ProductsContext/ProductsContext";

const Products = () => {
  const { products, page, totalPages, setPage } =
    useContext(ProductContext);

  return (
    <div>
      <ProductList
        products={products}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Products;
