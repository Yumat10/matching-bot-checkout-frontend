import { FC } from 'react';
import { HomeImage } from './HomeImage';
import { HomeText } from './HomeText';

export const Home: FC = () => {
    return (
        <div className=" flex-grow flex flex-row gap-x-32 w-screen-2xl mx-xOffset">
            <div className="flex-grow">
                <HomeText />
            </div>
            <div>
                <HomeImage />
            </div>
        </div>
    );
};
