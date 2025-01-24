import BlogHeader from '@/page/blog/feature/Blogheader';
import BlogNav from '@/page/blog/feature/BlogNav';
import BlogPost from '@/page/blog/feature/BlogPost';

export default function Home() {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-900"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        gap: 32,
        justifyContent: 'center',
        maxWidth: 1024,
      }}
    >
      {/* <BlogHeader /> */}
      <BlogNav />
      {/* <BlogPost /> */}
    </section>
  );
}
