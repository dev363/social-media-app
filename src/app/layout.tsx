import "@/styles/globals.css";
import "@/styles/vendor/boxicons/css/boxicons.min.css";
import "@/styles/vendor/glightbox/css/glightbox.min.css";
import "@/styles/vendor/remixicon/remixicon.css";
import "@/styles/vendor/swiper/swiper-bundle.min.css";
import "@/styles/style.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME, APP_DESC } from "@/contants";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESC,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
