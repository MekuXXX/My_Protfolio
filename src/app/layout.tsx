import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-mont bg-light w-full min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
