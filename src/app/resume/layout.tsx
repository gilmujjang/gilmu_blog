import type { Metadata } from 'next';
import Footer from '../../feature/Footer';
import Header from '@/feature/Header';

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
    <main className="bg-gray-100 dark:bg-gray-950 transition-colors duration-1000 overflow-y-auto">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
