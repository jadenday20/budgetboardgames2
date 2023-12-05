import Link from "next/link"; // Assuming you're using React Router for routing

interface ButtonProps {
    href: string;
    LinkTitle: string;
}

const Button: React.FC<ButtonProps> = ({ href, LinkTitle }) => {
    return (
        <Link href={href} className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-500 duration-500 max-w-fit">
            {LinkTitle}
        </Link>
    );
};

export default Button;