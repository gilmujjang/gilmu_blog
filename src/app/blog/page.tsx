import BlogHeader from "@/page/blog/feature/Blogheader"
import BlogNav from "@/page/blog/feature/BlogNav";
import BlogPost from "@/page/blog/feature/BlogPost";

export default function Home() {
  return (
    <section style={{ display: 'flex', flexDirection: 'row', flex: 1,width: '100%',
      alignItems: 'center', gap: 32, backgroundColor: 'white', justifyContent: 'center', maxWidth: 1024 }}>
           {/* <BlogHeader/> */}
      <BlogNav/>
      <BlogPost/>
      </section>
  );
}
