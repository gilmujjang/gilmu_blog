import type { Metadata } from 'next';
import Footer from './feature/Footer';
import Header from '@/feature/header';

export const metadata: Metadata = {
  title: '길무짱의 블로그',
  description: '길무짱의 블로그',
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="bg-gray-100 dark:bg-gray-900 ">{children}</div>
      <Footer />
    </main>
  );
}
