import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

import { useParams, Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch product.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found</p>;

  return (
    <section>
      <div className={`${styles.detailsContainer} container`}>
        <div className={styles.linkContainer}>
          <Link className={styles.linkDetails} to="/product-list">
            Back to shop <IoChevronBackOutline className={styles.chevron} />
          </Link>
        </div>
        <div className={styles.detailsCard}>
          <img
            className={styles.detailImg}
            src={product.images?.[0]}
            alt={product.title}
            width={200}
          />
          <div className="">
            <h2 className={styles.titleDetails}>{product.title}</h2>
            <p className={styles.detSubtitle}>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
