//FilterPanel.jsx

import React, { useEffect, useState } from "react";

// const { products } = useContext(ProductContext);
const FilterPanel = ({ products, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setsortBy] = useState("");
  const [category, setcategory] = useState("all");

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

    if (category !== "all") {
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
  }, [searchTerm, sortBy, category, products, onFilter]);

  return (
    <div>
      <div>
        <form>
          <div>
            <label htmlFor="searchTherm">Search for Products: </label>
            <input
              type="text"
              id="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
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
          <div className="">
            <label htmlFor="category">Category: </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="beauty">Иeauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPanel;
