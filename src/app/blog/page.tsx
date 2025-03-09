import BlogPostList from '@/page/blog/feature/BlogPostList';

export default function Home() {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-900
     flex justify-center items-center
      w-full h-[calc(100vh-64px)] gap-16"
    >
      <BlogPostList />
    </section>
  );
}
