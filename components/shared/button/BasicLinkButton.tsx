import Link from 'next/link';
import { FC } from 'react';

type BasicLinkButtonProps = {
    text: string;
    href: string;
};

export const BasicLinkButton: FC<BasicLinkButtonProps> = ({ text, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row px-3 md:px-10 py-2 md:py-4 w-fit bg-black text-white text-lg md:text-2xl rounded-md shadow-xl hover:shadow-2xl hover:scale-105 transition"
        >
            {text}
        </a>
    );
};
