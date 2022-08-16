import Image from 'next/image';
import { FC } from 'react';

export const HomeImage: FC = () => {
    return (
        <div className="flex flex-row items-center h-full">
            <div className="w-[100%] lg:w-[400px] xl:w-[500px] 2xl:w-[525px]  lg:animate-shadowSlideOut cursor-pointer hover:scale-105 lg:hover:animate-shadowSlideIn transition">
                <video
                    src="/MatchingDemo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </div>
    );
};
