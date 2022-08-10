import { FC } from 'react';

type BasicBadgeProps = {
    text: string;
};

export const BasicBadge: FC<BasicBadgeProps> = ({ text }) => {
    return (
        <div className="px-3 py-1 bg-floodgate h-fit rounded-md text-floodgateDark border-1 shadow-md">
            {text}
        </div>
    );
};
