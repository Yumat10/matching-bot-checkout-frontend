import { FC, ReactNode, useEffect, useState } from 'react';

type LoadingPageProps = {
    children: ReactNode;
};

export const LoadingPage = ({ children }: LoadingPageProps): JSX.Element => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stopLoadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(stopLoadingTimeout);
    }, []);

    if (loading)
        return (
            <div className="flex-grow flex flex-row items-center justify-center mx-xSmallXOffset md:mx-smallXOffset 2xl:mx-xOffset">
                <p className="text-xl md:text-4xl animate-pulse">
                    <span className="text-floodgate">Outliers</span> are putting
                    the finishing touches on Philotes...
                </p>
            </div>
        );

    return <>{children}</>;
};
