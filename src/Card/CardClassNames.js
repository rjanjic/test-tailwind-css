import React from 'react';
import cn from 'classnames';

const isTestActive = true;
const isTestTwoActive = true;

export default ({ headline, text, image }) => (
    <div className={cn(
        'w-full',
        'mx-auto',
        'mt-4',
        'flex',
        'flex-grow-0',
        'p-6',
        'bg-white',
        'rounded-lg',
        'shadow-xl',
    )}>
        <div className="flex-shrink-0">
            <img
                src={image}
                alt=""
                className={cn(
                    'h-12',
                    'w-12',
                    'rounded-full',
                )}/>
        </div>
        <div className={cn(
            'ml-6',
            'pt-1',
        )}>
            <h4 className={cn(
              'text-xl',
                {
                    'text-gray-700': isTestActive,
                    'xxl:text-gray-600': !isTestTwoActive,
                }
            )}>
                {headline}
            </h4>
            <p className="text-base text-gray-600">{text}</p>
        </div>
    </div>
);
