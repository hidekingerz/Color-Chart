import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamiya Colors",
  description: "タミヤカラーの検索インターフェイス",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-gray-900 antialiased">{children}</body>
    </html>
  );
}
