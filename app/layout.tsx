import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import WhatsAppButton from "./components/wp";
import SiteFooter from "./SiteFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Classic Bridal Studio",
  description: "Frontend header mockup for Classic Bridal Studio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Header />
        {children}
        <WhatsAppButton/>
        <SiteFooter/>
      </body>
    </html>
  );
}