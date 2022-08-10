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
            className="flex flex-row px-10 py-4 w-fit bg-black text-white text-2xl rounded-md"
        >
            {text}
        </a>
    );
};
