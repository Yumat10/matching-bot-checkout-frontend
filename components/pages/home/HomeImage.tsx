import Image from 'next/image';
import { FC } from 'react';

export const HomeImage: FC = () => {
    return (
        <div className="flex flex-row items-center h-full">
            <div className="relative w-32 md:w-72 xl:w-[500px] 2xl:w-[550px] h-32 md:h-72 xl:h-[500px] 2xl:h-[550px] animate-shadowSlideOut cursor-pointer hover:scale-105 hover:animate-shadowSlideIn transition">
                <Image
                    src="/OutliersNFT.png"
                    alt=""
                    objectFit="contain"
                    layout="fill"
                />
            </div>
        </div>
    );
};
