import React from 'react';
import Post from '@/page/blog/components/Post';

export default function BlogPost() {
  const posts = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <Post key={post} />
      ))}
    </div>
  );
}
