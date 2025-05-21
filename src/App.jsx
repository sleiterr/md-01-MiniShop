import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductContext } from "./ProductsContext/ProductsContext";

import ProductList from "./components/ProductList/ProductList";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Header from "./components/Header/Header";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
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
      <ProductContext.Provider
        value={{ products, page, totalPages, setPage, onPageChange: setPage }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
}

export default App;
