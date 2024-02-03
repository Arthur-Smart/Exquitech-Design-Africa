import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ContextWrapper from "@/components/ContextWrapper";
import { AOSInit } from "@/lib/aos";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Exquitech Design Africa",
  description:
    "The next generation software engineers for all your business software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${poppins.className}`}>
        <ContextWrapper>
          <Navbar />
          {children}
          <Footer />
        </ContextWrapper>
      </body>
    </html>
  );
}
