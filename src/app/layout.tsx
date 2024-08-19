import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import FloatingCart from "@/components/floating-cart";
import "animate.css";
import { CartProvider } from "@/context/cart-context";
import { UserProvider } from "@/context/user-context";

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
        className={`flex min-h-screen flex-col bg-gray-300/80 ${inter.className}`}
      >
        <UserProvider>
          <CartProvider>
            <Toaster position="top-center" />
            <NextTopLoader color="#ff6347" speed={100} />
            <Header />
            <div className="flex flex-1 container mx-auto my-5 font-satoshi">
              {children}
              <FloatingCart />
            </div>
          </CartProvider>
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
