import type { Metadata } from "next";
import './globals.css'
import Header from "@/components/Header";
import { Noto_Sans_KR } from 'next/font/google';
import { SideBar } from "@/components/SideBar/SideBar";

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "길무짱의 블로그",
  description: "길무짱의 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <Header />
        <div style={{ display: 'flex' }}>
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
