import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Masum Billah Sifat — Portfolio",
  description: "Personal portfolio built with Next.js 13.5.6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        <ScrollReveal />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}