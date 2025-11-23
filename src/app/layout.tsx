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
  title: "Applaa — The ultimate kid-safe gaming hub",
  description: "The ultimate kid-safe gaming hub: Use AI to build games, apps and express creativity in a safe space.",
  keywords: ["Applaa", "kids", "AI", "games", "education", "social", "safe"],
  authors: [{ name: "Applaa Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Applaa — Learn AI & Build Games",
    description: "The ultimate kid-safe gaming hub: Use AI to build games, apps and express creativity in a safe space.",
    url: "https://Applaa.local",
    siteName: "Applaa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applaa — Learn AI & Build Games",
    description: "The ultimate kid-safe gaming hub: Use AI to build games, apps and express creativity in a safe space.",
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
