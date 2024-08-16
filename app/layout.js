import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mangesh Bhosale",
  description:
    "Portfolio of Mangesh Bhosale, Full-stack Designer and Full-stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen bg-yellow-100">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
