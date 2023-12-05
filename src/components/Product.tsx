import React from "react";
import Link from 'next/link';

export default function Product({LinkTitle} : {LinkTitle:any}) {
    return (
        <Link className="bg-zinc-300 rounded drop-shadow-md p-5 h-56 w-56 hover:opacity-70 hover:drop-shadow-xl duration-500" href={`/`}>
            <h3 className="text-red-800 font-bold text-lg text-center">{LinkTitle}</h3>
        </Link>
    );
  }