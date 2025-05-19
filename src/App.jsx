import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

const PRODUCTS_PER_PAGE = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const skip = (page - 1) * PRODUCTS_PER_PAGE;

      const res = await fetch(
        `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
      );
      const data = await res.json();
      setProducts(data.products);
      setTotal(data.total);
    };
    fetchProducts();
  }, [page]);

  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  return (
    <>
      <h1>Products</h1>
      <ProductList products={products} />

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
}

export default App;
