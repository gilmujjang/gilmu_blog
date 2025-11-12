import { TPost } from '@/types/post';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXImage from '../components/MDXImage';
import Title from '../components/Title';
import Description from '../components/Description';
import Keyword from '../components/Keyword';

const components = { MDXImage };

export default function PostDetail({ post }: { post: TPost }) {
  const { title, content, description, keywords, readingMinutes, createdAt } =
    post;
  return (
    <article className="flex flex-col max-w-4xl mx-auto gap-4 my-16">
      <header className="mb-8">
        <Title>{title}</Title>
        <Description>{description}</Description>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {keywords.map((keyword) => (
              <Keyword key={keyword}>{keyword}</Keyword>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span>{readingMinutes}분</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </header>
      <MDXRemote source={content} components={components} />
    </article>
  );
}
