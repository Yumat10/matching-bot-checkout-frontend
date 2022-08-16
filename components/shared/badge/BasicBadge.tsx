import { FC } from 'react';

type BasicBadgeProps = {
    text: string;
};

export const BasicBadge: FC<BasicBadgeProps> = ({ text }) => {
    return (
        <div className="px-3 py-1 bg-floodgateDark h-fit rounded-md text-floodgate border-1 shadow-md">
            {text}
        </div>
    );
};
