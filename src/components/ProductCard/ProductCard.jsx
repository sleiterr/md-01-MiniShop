// ProducCard.jsx
import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div>
      <ul>
        <li>
          <h2>{products.title}</h2>
          <img src={products.images} alt="" />
          <p>{products.description}</p>
          <p>{products.price}</p>
        </li>
      </ul>
    </div>
  );
};
export default ProductCard;
