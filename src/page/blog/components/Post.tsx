import React from 'react';

export default function Post() {
    return (
        <div className="border rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">title</h2>
            {/* <p className="text-gray-600">{excerpt}</p> */}
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Read More</button>
        </div>
    );
}