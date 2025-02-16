import BlogPost from '@/page/blog/feature/BlogPost';
import { getPost, parsePostAbstract, parsePostContent } from '@/utils/post';

export default function Home() {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-900
     flex justify-center items-center
      w-full h-[calc(100vh-64px)] gap-16"
    >
      <BlogPost />
    </section>
  );
}
