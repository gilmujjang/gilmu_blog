import PostDetail from '@/page/blog/components/PostDetail';
import SandBox from '@/page/blog/components/SandBox';
import { getPost } from '@/utils/post';

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

const PostContent = async ({ params: { category, slug } }: Props) => {
  const post = await getPost({ category, slug });
  if (category === 'playground') return <SandBox slug={slug} />;
  return <PostDetail post={post} />;
};

export default PostContent;
