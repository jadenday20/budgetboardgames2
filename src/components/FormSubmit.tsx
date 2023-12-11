import React from "react";

interface ButtonProps {
    linkTitle: string;
    center?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ linkTitle, center, className }) => {

    const buttonClasses = `bg-zinc-800 text-white p-4 pl-6 pr-6 rounded-lg hover:bg-blue-900 duration-500 max-w-fit my-2 block group-hover:bg-blue-900 hover:cursor-pointer ${center ? 'm-auto' : ''} ${className || ''}`;

    return (
        <input type="submit"
            className={buttonClasses.trim()}
            value={linkTitle}
        >
        </input>
    );
};

export default Button;