import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "길무짱의 블로그",
  description: "길무짱의 블로그",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main style={{ display: 'flex', flex: 1, width: '100%',
     justifyContent: 'center', backgroundColor: 'lightgray' }}>
       {children}
    </main>
  );
}
