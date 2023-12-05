import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
<Link href="/" className="flex">
<Image
          className="self-center"
          src="/bbg-logo.jpeg"
          alt="Budget Board Games Logo"
          width={50}
          height={50}
          priority
        />
</Link>
    )
}