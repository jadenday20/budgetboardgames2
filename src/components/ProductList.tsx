import React from "react";
import SingleProduct from "./Product";

const productTitles = ["Ticket to Ride", "Uno", "Scrabble", "Dominion", "Apples to Apples", "Star Wars Chess"];

export default function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5">
    {/* <div className="flex flex-wrap items-center justify-evenly gap-5 gap-y-11 flex-col md:flex-row m-5"> */}
      {productTitles.map((title, index) => (
        <SingleProduct 
          LinkTitle={title}
          key={index}
        />
      ))}
    </div>
  );
}