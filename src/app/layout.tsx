import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "applaa — The ultimate kid-safe social network",
  description: "The ultimate kid-safe social network: Learn AI, build games, and express creativity in a parent-approved space.",
  keywords: ["applaa", "kids", "AI", "games", "education", "social", "parent-approved"],
  authors: [{ name: "applaa Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "applaa — Learn AI & Build Games",
    description: "The ultimate kid-safe social network: Learn AI, build games, and express creativity in a parent-approved space.",
    url: "https://applaa.local",
    siteName: "applaa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "applaa — Learn AI & Build Games",
    description: "The ultimate kid-safe social network: Learn AI, build games, and express creativity in a parent-approved space.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
