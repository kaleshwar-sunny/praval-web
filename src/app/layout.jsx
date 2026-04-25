import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap"
});

export const metadata = {
  title: "PRAVAL TECH",
  description:
    "PRAVAL TECH provides trusted and professional business services worldwide.",
  keywords: ["PRAVAL TECH", "Business Services", "Consulting"],
  openGraph: {
    title: "PRAVAL TECH",
    description: "Professional services you can trust",
    url: "https://abccompany.com",
    siteName: "PRAVAL TECH",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
