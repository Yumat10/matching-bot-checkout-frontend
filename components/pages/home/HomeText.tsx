import { FC } from 'react';
import { BasicLinkButton } from '../../shared/button/BasicLinkButton';

export const HomeText: FC = () => {
    return (
        <div className="flex flex-col align-middle justify-center h-full ">
            <div>
                <h1 className="text-8xl font-inter">
                    <span className="hover:text-floodgate transition">
                        Personal Bonds
                    </span>{' '}
                    Make All
                    <br /> The{' '}
                    <span className="hover:text-floodgate transition">
                        Difference
                    </span>
                </h1>
            </div>
            <div className="mt-7 mb-16">
                <p className="text-3xl">
                    Automatically generate 1-1 chats in Discord
                </p>
            </div>
            <BasicLinkButton
                href="https://discord.com/api/oauth2/authorize?client_id=1005563817444519956&permissions=8&scope=bot"
                text="Connect"
            />
        </div>
    );
};
