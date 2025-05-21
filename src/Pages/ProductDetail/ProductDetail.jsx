import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div>
      <h2>{product.title}</h2>
      <img src={product.images?.[0]} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default ProductDetail;
