import React from 'react';

export default ({ headline, text, image }) => (
    <div className="w-full mx-auto mt-4 flex flex-grow-0 p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
            <img
                src={image}
                alt=""
                className="h-12 w-12 rounded-full"
            />
        </div>
        <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-700 xxl:text-gray-600">
                {headline}
            </h4>
            <p className="text-base text-gray-600">{text}</p>
        </div>
    </div>
);
