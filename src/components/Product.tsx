import React from "react";
import Link from 'next/link';
import Image from "next/image";
import Button from "./Button";

interface ProductProps {
    href: string;
    LinkTitle: string;
    imageSrc: string;
    Condition: string;
    Price: string;
}

// export default function Product({ LinkTitle }: { LinkTitle: any }) {
//     return (
//         <Link className="bg-zinc-300 rounded drop-shadow-md p-5 h-56 w-full hover:opacity-70 hover:drop-shadow-xl duration-500" href={href}>
//             <h3 className="text-red-800 font-bold text-lg text-center">{LinkTitle}</h3>
//         </Link>
//     );
// }

const Product: React.FC<ProductProps> = ({ href, LinkTitle, imageSrc, Condition, Price }) => {
    return (
        <Link className="bg-zinc-300 rounded drop-shadow-md p-5 min-h-fit w-full hover:opacity-70 hover:drop-shadow-xl duration-500 group" href={href}>
            <h3 className="text-red-800 font-bold text-lg text-center">{LinkTitle}</h3>
            <p className="text-center font-thin -mt-2 mb-2">— {Condition} —</p>
            <p className="text-center text-2xl">{Price}</p>
            <Image src={`/productImages/${imageSrc}`} alt={LinkTitle} height={300} width={300} className="my-3"></Image>
            <Button linkTitle={"Visit"} center></Button>
        </Link>
    );
};

export default Product;