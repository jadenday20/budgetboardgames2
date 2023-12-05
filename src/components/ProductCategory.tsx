import React from "react";
import Link from 'next/link';

export default function ProductCategory({LinkTitle} : {LinkTitle:any}) {
    return (
        <Link className="block bg-zinc-300 rounded drop-shadow-md p-5 h-12 w-60 mb-5 hover:opacity-70 hover:drop-shadow-xl duration-500  flex justify-center items-center" href={`/`}>
            <h3 className="text-red-800 font-bold text-md text-center">{LinkTitle}</h3>
        </Link>
    );
  }