export interface TPost {
  url: string;
  content: string;
  title: string;
  keywords: string[];
  createdAt: string;
  readingMinutes?: number;
}

export interface TPostAbstract {
  url: string;
  category: string;
  slug: string;
}

export interface TPostContent {
  content: string;
  title: string;
  keywords: string[];
  createdAt: string;
  readingMinutes?: number;
}
