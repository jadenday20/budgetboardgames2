import React from "react";
import ProductCategory from "./ProductCategory";

let Categories = ["Used Games", "Lightly Used Games", "New Games"]

export default function ProductCategories() {
  return (
    <aside className="m-auto lg:mx-5 lg:my-0">
      <h3 className="text-center mb-6 mt-0">Sort by Category</h3>
      <ul>
        {Categories.map(item => {
          return (
            <ProductCategory
              LinkTitle={item}
              key={item} />
          )
        })}
      </ul>
    </aside>
  );
}