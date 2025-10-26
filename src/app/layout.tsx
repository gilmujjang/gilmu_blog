import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '길무짱의 블로그',
  description: '길무짱의 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body>{children}</body>
    </html>
  );
}
