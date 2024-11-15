import type { Metadata } from "next";
import "./globals.css";
import Header from "./(header)/Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "iX Platform",
  description: "iX Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
