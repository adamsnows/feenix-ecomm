import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`flex min-h-screen flex-col justify-between bg-gray-300/80 ${inter.className}`}
      >
        <Header />
        <div className="p-10 flex flex-col font-satoshi">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
