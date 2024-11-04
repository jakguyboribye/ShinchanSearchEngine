import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load local fonts
const geistSans = localFont({
  src: "/fonts/GeistVF.woff", // Assuming fonts are in the public/fonts directory
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", // Assuming fonts are in the public/fonts directory
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata
export const metadata: Metadata = {
  title: "Shinchan Search Engine",
  description: "Search Shinchan Characters",
};

// Root layout function wrapped with ChakraProvider
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-300`}
      >
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
