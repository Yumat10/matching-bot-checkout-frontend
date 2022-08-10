import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BasicBadge } from '../badge/BasicBadge';

export const BasicNavbar: FC = () => {
    return (
        <nav className="bg-blue-600 flex flex-row items-center h-navbar px-24">
            <div className="flex flex-row items-center gap-x-5">
                <Link href="/">
                    <a className=" text-2xl font-semibold">Philotes</a>
                </Link>
                <BasicBadge text="Outliers" />
            </div>
        </nav>
    );
};
