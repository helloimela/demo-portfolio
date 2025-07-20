import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Welcome to My Shop",
    template: "%s | My Shop",
  },
  description: "Welcome to my shop with delicious food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header title="My shop" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
