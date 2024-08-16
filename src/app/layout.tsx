import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feenix | e-Commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <link rel="icon" href="/favicon.png" />
      </header>
      <body
        className={`flex min-h-screen flex-col items-center justify-between bg-gray-300/80 ${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
