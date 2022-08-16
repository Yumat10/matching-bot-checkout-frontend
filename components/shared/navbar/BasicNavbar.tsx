import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BasicBadge } from '../badge/BasicBadge';

export const BasicNavbar: FC = () => {
    return (
        <nav className="border-b-2 border-b-offBlack animate-fadeIn">
            <div className="flex flex-row items-center h-navbar mx-xSmallXOffset md:mx-smallXOffset 2xl:mx-xOffset">
                <div className="flex flex-row items-center gap-x-5">
                    <Link href="/">
                        <a className="text-xl md:text-2xl font-semibold">
                            Philotes
                        </a>
                    </Link>
                    <a
                        href="https://twitter.com/outlierdao"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-105 transition"
                    >
                        <BasicBadge text="Outliers" />
                    </a>
                </div>
            </div>
        </nav>
    );
};
