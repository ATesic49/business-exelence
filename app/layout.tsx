import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import LangWrapper from "@/components/LangWrapper";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Learning Excellence Club",
  description:
    "Learning Excellence Club | Pearl Islands - Fun and Learning through an Incredible Adventure ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      <LangWrapper>
        <body className={`${inter.className} bg-gray-50`}>{children}</body>
      </LangWrapper>
    </html>
  );
}
