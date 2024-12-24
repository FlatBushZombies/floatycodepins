import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Floaty Code Pins",
  description: "Your ultimate software solutions company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <hr  className=" border-t-3 border-gray-300"/>
        <Footer />
      </body>
    </html>
  );
}
