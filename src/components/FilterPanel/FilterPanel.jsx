import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";

import ProductList from "../ProductList/ProductList";
import { ProductContext } from "../../ProductsContext/ProductsContext";

export const FilterPanel = () => {
  const { products } = useContext(ProductContext);
  return (
    <Formik
      initialValues={{ searchTerm: "", sortBy: "", category: "all" }}
      onSubmit={() => {}}
    >
      {({ values }) => {
        let filtered = [...products];

        if (values.searchTerm.trim() !== "") {
          let search = values.searchTerm.toLowerCase();

          filtered = filtered.filter(
            (p) =>
              p.title.toLowerCase().includes(search) ||
              p.description.toLowerCase().includes(search)
          );
        }

        if (values.sortBy === "title") {
          filtered.sort((a, b) => a.title.localeCopare(b.title));
        } else if (values.sortBy === "price") {
          filtered.sort((a, b) => a.price - b.price);
        } else if (values.sortBy === "rating") {
          filtered.sort((a, b) => b.rating - a.rating);
        }
      }}
    </Formik>
  );
};
