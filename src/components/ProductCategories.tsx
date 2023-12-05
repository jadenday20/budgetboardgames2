import React from "react";
import ProductCategory from "./ProductCategory";

let Categories = ["Used Games", "Lightly Used Games", "New Games"]

export default function ProductCategories() {
    return (
        <aside className="m-5 flex-none">
            <h3 className="font-bold text-lg text-center mb-6">Sort by Category</h3>
        {Categories.map(item => {
      return (
        <ProductCategory 
        LinkTitle={item}
        key={item}/>
      )
    })}
      </aside>
    );
  }