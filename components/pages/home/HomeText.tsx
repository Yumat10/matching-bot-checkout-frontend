import { FC } from 'react';
import { BasicLinkButton } from '../../shared/button/BasicLinkButton';

export const HomeText: FC = () => {
    return (
        <div className="flex flex-col align-middle justify-center h-full bg-green-200">
            <div>
                <h1 className="text-8xl font-inter">
                    Personal Bonds Make <br /> The Difference
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
