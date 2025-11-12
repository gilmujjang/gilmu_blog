import BlogPostList from '@/page/blog/feature/BlogPostList';

export default function Home() {
  return (
    <section className="flex justify-center items-center gap-16 overflow-y-auto py-16">
      <BlogPostList />
    </section>
  );
}
