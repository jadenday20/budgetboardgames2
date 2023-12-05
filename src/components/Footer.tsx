import React from "react";
import Logo from "./Logo";

export default function Header() {
    return (
        <footer className="flex bg-zinc-800 text-white p-8 gap-5 justify-center items-center relative bottom-0">
            <Logo />
            <div className=""></div>
            <span>©2023 | Jaden Day</span>

        </footer>
    );
}