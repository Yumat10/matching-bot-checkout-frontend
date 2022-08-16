import { FC } from 'react';
import { BasicLinkButton } from '../../shared/button/BasicLinkButton';

/**
 * Personal bonds make all the difference
 * Great communities require strong bonds
 * Personal bonds are the essence of a strong community
 * So how well do you know @yumat10?
 * People are more than just a user handle
 * A community graph is only as strong as its edges
 */

/**
 * Tap into the more human parts of the community
 * Communities require personal connections, add this to your server with this Discord bot
 * Personal bonds are the secret ingredient to a strong community
 * There's just something about meeting someone 1-on-1
 * You only really get to know a person when you talk with them 1-on-1
 * Get to know people beyond their user handle and profile pic
 * Add back the serendipitous talks with more intention
 * Keep the magic of seredipitously finding a new friend but without the uncertainty
 * Increase the weights of the edges in your community graph
 * When people know one another in the community, there is infinitely greater alignment
 * There can be no strong community when no one knows one another
 * Strong communities are built on personal bonds
 * Strong communities are an abstraction of strong personal bonds
 *
 * Why do you need 1-1 chats => personal connections?
 * Personal connections are the most important aspect of a community
 * Cool people are in your community, let them get to meet one another
 * The value of your community lies within the new personal bonds created
 * The first step towards a great community is facilitating 1-on-1 conversations
 * Personal bonds are created when people meet 1-on-1
 */

export const HomeText: FC = () => {
    return (
        <div className="flex flex-col align-middle justify-center h-full ">
            <div>
                <h1 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold lg:font-normal font-inter">
                    How well do you know @user_5109?
                </h1>
            </div>
            <div className="mt-7 mb-16">
                <p className="text-lg md:text-xl 2xl:text-3xl">
                    Strong{' '}
                    <span className="text-floodgate">personal bonds</span> are
                    the most important aspect of a community. Help facilitate
                    1-on-1 chats in your Discord server with a bot that{' '}
                    <i>does this for you.</i>
                </p>
            </div>
            <BasicLinkButton
                href="https://discord.com/api/oauth2/authorize?client_id=1005563817444519956&permissions=8&scope=bot"
                text="Add Bot to Server"
            />
        </div>
    );
};
