import type { Metadata } from "next";
import './globals.css'
import Header from "@/src/components/Header/Header";

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
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
