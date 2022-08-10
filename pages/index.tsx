import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import { Home } from '../components/pages/home/Home';

const HomePage: NextPage = () => {
    const { data } = useAccount();
    const { isConnected } = useConnect();

    const DisplayNameComp = () => {
        if (isConnected && data) {
            return <div>Your address is: {data.address}</div>;
        } else {
            return <></>;
        }
    };

    return (
        <div className="flex-grow flex flex-col">
            <Head>
                <title>Philotes | Discord bot for serendipitous chats</title>
                {/* <meta property="og:url" content="" /> */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Philotes" />
                <meta
                    property="og:description"
                    content="Discord bot for serendipitous chats"
                />
            </Head>
            <main className="flex-grow flex flex-col">
                <Home />
            </main>
        </div>
    );
};

export default HomePage;
