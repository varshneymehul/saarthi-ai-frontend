import { GeistSans } from "geist/font/sans";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Saarthi Tech - Revolutionizing local commerce in India | Saarthi Sewa",
  description: "Next gen local commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
