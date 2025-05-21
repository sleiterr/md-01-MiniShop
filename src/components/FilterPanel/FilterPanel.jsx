//FilterPanel.jsx

import React, { useEffect, useState } from "react";
import styles from "./FilterPanel.module.css";

// const { products } = useContext(ProductContext);
const FilterPanel = ({ products, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setsortBy] = useState("");

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();

        console.log("Отримані категорії з API:", data);

        if (Array.isArray(data)) {
          const transformer = data.map((cat) => ({
            value: cat.slug,
            label: cat.name,
          }));
          setCategories(transformer);
        } else {
          console.error("Expected an array of categories, but received:", data);
        }
      } catch (error) {
        console.error("Error while fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (searchTerm.trim() !== "") {
      let search = searchTerm.toLowerCase();

      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
      );
    }

    if (category !== "") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    onFilter(filtered);
  }, [searchTerm, sortBy, products, onFilter, category]);

  return (
    <div>
      <div className={styles.formContainer}>
        <form>
          <div>
            {/* <label htmlFor="searchTherm">Search for Products: </label> */}
            <input
              type="text"
              id="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for Products:"
            />
          </div>

          <div className={styles.selectBox}>
            <label htmlFor="sortBy">Sort By:</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setsortBy(e.target.value)}
            >
              <option value="">None</option>
              <option value="title">Product (A-Z)</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className={styles.selectBox}>
            <label htmlFor="category">Category: </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Alle</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPanel;
