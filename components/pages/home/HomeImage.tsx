import Image from 'next/image';
import { FC } from 'react';

export const HomeImage: FC = () => {
    return (
        <div className="flex flex-row items-center h-full">
            <div className="relative w-[550px] h-[550px] animate-shadowSlideOut cursor-pointer hover:scale-105 hover:animate-shadowSlideIn transition">
                {/* <div className="absolute -right-5 -bottom-5 w-[550px] h-[550px] bg-offBlack delay-75 transition" /> */}
                <Image
                    src="/OutliersNft.png"
                    alt=""
                    objectFit="contain"
                    layout="fill"
                />
            </div>
        </div>
    );
};
