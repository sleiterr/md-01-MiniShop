// ProducCard.jsx
import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ products, showDescription = false }) => {
  if (Array.isArray(products)) {
    return (
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            products={product}
            showDescription={showDescription}
          />
        ))}
      </div>
    );
  }

  if (!products) return <p>No products data</p>;

  return (
    <section>
      <div>
        <div>
          <ul>
            <li className={styles.listItem}>
              <img src={products.images[0]} alt="" />

              <p className={styles.priceCard}>{products.price} DKK</p>
              <p className={ styles.cardTitle}>{products.title}</p>
              {showDescription && <p>{products.description}</p>}
              <div>
                <Link className={ styles.cardLink} to={`/products/${products.id}`}>View Details</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ProductCard;
