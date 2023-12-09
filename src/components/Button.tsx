import React from "react";

interface ButtonProps {
    href?: string;
    linkTitle: string;
    onClickEvent?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ href, linkTitle, onClickEvent }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onClickEvent) {
            onClickEvent(event);
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className="bg-zinc-800 text-white p-4 pl-6 pr-6 rounded-lg hover:bg-blue-900 duration-500 max-w-fit my-2 block"
        >
            {linkTitle}
        </a>
    );
};

export default Button;