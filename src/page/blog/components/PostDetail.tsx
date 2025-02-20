import { TPost } from '@/types/post';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {};

export default function PostDetail({ post }: { post: TPost }) {
  return <MDXRemote source={post.content} components={components} />;
}
