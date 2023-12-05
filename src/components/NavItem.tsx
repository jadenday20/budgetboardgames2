import React from "react";
import Link from 'next/link';

export default function NavItem({LinkTitle} : {LinkTitle:any}) {
    return (
        <Link href={`/${LinkTitle.toLowerCase()}`} className="bg-red-900 text-white font-bold p-4 w-2/3 text-center md:w-auto pl-20 pr-20 md:pl-16 md:pr-16 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16 2xl:pr-20 2xl:pl-20 rounded-lg hover:bg-red-800 duration-500">{LinkTitle}</Link>
    );
  }