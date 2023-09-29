import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Mohamed Portfolio",
  description:
    "Mohamed is a web designer with experience in field. Their portfolio showcases their skills in HTML, CSS, JavaScript, React, Node, etc... They are passionate about creating user-friendly and visually appealing websites. He have experience with SEO. Mohamed is looking for a challenging web design role where they can use their skills and experience to create innovative and effective websites.",
  keywords: [
    "developer",
    "software developer",
    "web developer",
    "mobile developer",
    "full-stack developer",
    "front-end developer",
    "back-end developer",
    "technologies",
    "industries",
  ],
  authors: {
    name: "Mohamed Ali",
  },
  publisher: "Mohamed Ali",
  openGraph: {
    title: "Mohamed Portfolio",
    description:
      "Mohamed is a web designer with experience in field. Their portfolio showcases their skills in HTML, CSS, JavaScript, React, Node, etc... ",
    images: [
      "https://imgs.search.brave.com/kcMBoPfE6uDaGrWJAlE1f4DMnnZjpQ_XAb28PWvYStY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Portfolio",
    description:
      "Mohamed is a web designer with experience in field. Their portfolio showcases their skills in HTML, CSS, JavaScript, React, Node, etc... They are passionate about creating user-friendly and visually appealing websites. He have experience with SEO. Mohamed is looking for a challenging web design role where they can use their skills and experience to create innovative and effective websites.",
    images: [
      "https://imgs.search.brave.com/kcMBoPfE6uDaGrWJAlE1f4DMnnZjpQ_XAb28PWvYStY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} max-h-screen w-full bg-light font-mont dark:bg-dark dark:text-light`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
