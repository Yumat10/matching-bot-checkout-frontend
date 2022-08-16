import { FC } from 'react';
import { HomeImage } from './HomeImage';
import { HomeText } from './HomeText';

export const Home: FC = () => {
    return (
        <div className="flex-grow flex flex-col lg:flex-row gap-x-10 2xl:gap-x-32 w-screen-2xl mx-xSmallXOffset md:mx-smallXOffset 2xl:mx-xOffset animate-delayedFadeIn">
            <div className="flex lg:flex-grow lg:items-center mt-12 lg:mt-0">
                <HomeText />
            </div>
            <div className="mt-10 lg:mt-0 mb-10">
                <HomeImage />
            </div>
        </div>
    );
};
