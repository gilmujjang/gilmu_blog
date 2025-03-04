export type TPost = TPostAbstract & TPostContent;
export interface TPostAbstract {
  url: string;
  category: TCategory;
  slug: string;
}

export interface TPostContent {
  content: string;
  title: string;
  keywords: string[];
  createdAt: string;
  description: string;
  thumbnail: string;
  readingMinutes?: number;
}

export type TCategory = 'post' | 'playground';
