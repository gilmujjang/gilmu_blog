import React from 'react';
import Post from "@/page/blog/components/Post";

export default function BlogPost() {
  const posts = [1,2,3,4,5];
  return (
    <div>
      {posts.map((post) => (
        <div key={post} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Post Title</h1>
          <div className="text-gray-700 mb-4">
            <Post />
          </div>
        </div>
      ))}
    </div>
  );
}