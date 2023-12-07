import Link from "next/link"; // Assuming you're using React Router for routing

interface ButtonProps {
    href: string;
    LinkTitle: string;
}

const Button: React.FC<ButtonProps> = ({ href, LinkTitle }) => {
    return (
        <Link href={href} className="bg-zinc-800 text-white p-4 pl-6 pr-6 rounded-lg hover:bg-blue-900 duration-500 max-w-fit mt-4 mb-4">
            {LinkTitle}
        </Link>
    );
};

export default Button;