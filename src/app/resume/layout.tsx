import Header from '@/feature/header';
import type { Metadata } from 'next';
import Footer from './feature/Footer';

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
      <div className="bg-gradient-to-r from-GRADIENT_FROM via-PRIMARY to-GRADIENT_TO h-2 sticky top-0 md:static md:h-20 flex justify-center items-center">
        <span className="text-2xl hidden md:block font-semibold text-white">
          민무길
        </span>
      </div>
      <div className="max-w-4xl mx-auto p-8 flex flex-col gap-28 md:gap-32 md:my-20 my-4 mb-20">
        {children}
      </div>
      <Footer />
    </main>
  );
}
