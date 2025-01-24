import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '길무짱의 블로그',
  description: '길무짱의 블로그',
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="bg-gray-100 dark:bg-gray-900 flex justify-center"
      style={{ flex: 1, width: '100%' }}
    >
      {children}
    </main>
  );
}
