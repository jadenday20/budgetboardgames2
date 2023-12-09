import React from "react";

interface ButtonProps {
    href?: string;
    linkTitle: string;
    onClickEvent?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    center?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, linkTitle, onClickEvent, center }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onClickEvent) {
            onClickEvent(event);
        }
    };

    const buttonClasses = `bg-zinc-800 text-white p-4 pl-6 pr-6 rounded-lg hover:bg-blue-900 duration-500 max-w-fit my-2 block group-hover:bg-blue-900 ${center ? 'm-auto' : ''}`;

    return (
        <a
            href={href}
            onClick={handleClick}
            className={buttonClasses}
        >
            {linkTitle}
        </a>
    );
};

export default Button;