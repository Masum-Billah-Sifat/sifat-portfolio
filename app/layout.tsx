import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Website",
  description: "Next.js 13.5.6 starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">
              MySite
            </a>

            <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="container main">{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}