import { FC } from 'react';

type BasicBadgeProps = {
    text: string;
};

export const BasicBadge: FC<BasicBadgeProps> = ({ text }) => {
    return (
        <div className="px-3 py-2 bg-blue-300 h-fit rounded-md  text-sm ">
            {text}
        </div>
    );
};
