import React from 'react';
import Post from '@/page/blog/components/Post';
import { getPostList, getPostPathList } from '@/utils/post';

export default async function BlogPost() {
  const postList = await getPostList();
  postList.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return (
    <div className="flex flex-col gap-8">
      {postList.map((post) => (
        <Post key={post.url} {...post} />
      ))}
    </div>
  );
}
