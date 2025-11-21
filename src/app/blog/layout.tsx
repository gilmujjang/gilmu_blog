import Header from '@/feature/Header';
import type { Metadata } from 'next';
import Footer from '../../feature/Footer';

export const metadata: Metadata = {
  title: '민무길 블로그',
  description: '민무길의 블로그 입니다',
  openGraph: {
    title: '민무길',
    description: 'blog',
    images: [
      {
        url: '/images/sparrow.webp',
        width: 1200,
        height: 600,
        alt: 'Profile Image',
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-100 dark:bg-gray-950 transition-colors duration-1000 overflow-y-auto">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
