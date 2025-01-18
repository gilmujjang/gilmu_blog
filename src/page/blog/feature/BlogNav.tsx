import React from 'react';

const BlogNav = () => {
    return (
        <nav className="bg-gray-800 p-4" style={{position: 'fixed', top: 0, left: 0, right: 0}}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">My Blog</div>
                <div className="space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">About</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default BlogNav;