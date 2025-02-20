import React from 'react';
import Post from '@/page/blog/components/Post';
import { getPostList, getPostPathList } from '@/utils/post';

export default async function BlogPost() {
  const postList = await getPostList();
  postList.map((post) => console.log(post));
  return (
    <div className="flex flex-col gap-8">
      {postList.map((post) => (
        <Post key={post.url} />
      ))}
    </div>
  );
}
