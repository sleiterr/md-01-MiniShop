import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  return (
    <section>
      <div>
        {products.map((p) => (
          <ProductCard key={p.id} products={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
