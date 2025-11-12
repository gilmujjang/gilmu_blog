import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import { sync } from 'glob';
import readingTime from 'reading-time';
import { TCategory, TPost, TPostAbstract, TPostContent } from '@/types/post';

const BASE_PATH = 'src/blog';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const parsePostAbstract = (postPath: string): TPostAbstract => {
  const normalizedPath = postPath.replace(/\\/g, '/');
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('/content.mdx', '');

  const [category, slug] = filePath.split('/');
  const url = `/blog/${category}/${slug}`;

  return { url, category: category as TCategory, slug };
};

export const parsePostContent = async (
  postPath: string,
): Promise<TPostContent> => {
  const file = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(file);

  const title = data['title'];
  const keywords = data['keywords']?.map((keyword: string) => keyword.trim());
  const createdAt = data['createdAt'];
  const description = data['description'];
  const thumbnail = data['thumbnail'];
  const readingMinutes = Math.ceil(readingTime(content).minutes);

  return {
    ...data,
    title,
    keywords,
    createdAt,
    description,
    thumbnail,
    readingMinutes,
    content,
  };
};

const parsePost = async (postPath: string): Promise<TPost> => {
  const postAbstract = parsePostAbstract(postPath);
  const postContent = await parsePostContent(postPath);
  return { ...postAbstract, ...postContent };
};

export const getPost = async ({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) => {
  const postPath = `${POSTS_PATH}/${category}/${slug}/content.mdx`;
  const post = await parsePost(postPath);
  return post;
};

export const getCategoryList = () => {
  const categoryPathList: string[] = sync(`${POSTS_PATH}/*`);
  const categoryList = categoryPathList.map((categoryPath) => {
    return categoryPath.split('/').slice(-1)?.[0];
  });
  return categoryList;
};

export const getPostPathList = (category?: string) => {
  const categoryPath = category || '**';
  const postPathList: string[] = sync(`${POSTS_PATH}/${categoryPath}/**/*.mdx`);
  return postPathList;
};

export const getPostList = async (category?: string) => {
  const pathList: string[] = getPostPathList(category);
  const postList = await Promise.all(
    pathList.map((postPath) => parsePost(postPath)),
  );
  return postList;
};
