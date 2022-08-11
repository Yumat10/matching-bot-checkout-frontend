import { FC } from 'react';
import { HomeImage } from './HomeImage';
import { HomeText } from './HomeText';

export const Home: FC = () => {
    return (
        <div className="flex-grow flex flex-col-reverse lg:flex-row gap-x-32 w-screen-2xl mx-xSmallXOffset md:mx-smallXOffset 2xl:mx-xOffset animate-delayedFadeIn">
            <div className="flex-grow flex flex-grow items-center">
                <HomeText />
            </div>
            <div className="hidden lg:block">
                <HomeImage />
            </div>
        </div>
    );
};
