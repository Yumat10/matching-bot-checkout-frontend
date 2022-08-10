import Image from 'next/image';
import { FC } from 'react';

export const HomeImage: FC = () => {
    return (
        <div className="relative w-[500px]  h-full">
            <div />
            <Image
                src="/OutliersNft.png"
                alt=""
                objectFit="contain"
                layout="fill"
            />
        </div>
    );
};
