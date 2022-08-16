import Image from 'next/image';
import { FC } from 'react';

export const HomeImage: FC = () => {
    return (
        <div className="flex flex-row items-center h-full">
            <div className="w-32 md:w-[400px] xl:w-[500px] 2xl:w-[525px]  animate-shadowSlideOut cursor-pointer hover:scale-105 hover:animate-shadowSlideIn transition">
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
