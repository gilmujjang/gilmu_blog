import Image from 'next/image';
import React from 'react';
import CategoryTag from './CategoryTag';
import { TPost } from '@/types/post';
import Link from 'next/link';

export default function Post(post: TPost) {
  const {
    url,
    title,
    keywords,
    thumbnail,
    description,
    createdAt,
    readingMinutes,
    category,
    slug,
  } = post;

  return (
    <Link
      href={`/${category}/${slug}`}
      className="flex border border-GRAY dark:border-GRAY rounded-lg hover:scale-[1.08] transition-transform duration-100"
    >
      <Image
        src={`/thumbnail/${thumbnail}`}
        alt="Thumbnail"
        width={200}
        height={200}
        className="rounded-l-lg lg:w-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <CategoryTag type={'develope'} />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{createdAt}</p>
        {category !== 'playground' && (
          <p className="text-sm">{readingMinutes} mins</p>
        )}
      </div>
    </Link>
  );
}
