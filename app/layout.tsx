import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "KM Professional Solutions",
  description: "Professional development and career preparation services for college students and young professionals. Offering resume reviews, mock interviews, career coaching, and more.",
  keywords: [
    "career development",
    "professional development",
    "resume review",
    "mock interview",
    "career coaching",
    "college students",
    "career preparation"
  ],
  authors: [{ name: "KM Professional Solutions" }],
  openGraph: {
    title: "KM Professional Solutions",
    description: "Professional development and career preparation services for college students and young professionals.",
    url: "https://kmprofsol.com",
    siteName: "KM Professional Solutions",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "KM Professional Solutions"
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Professional Solutions",
    description: "Professional development and career preparation services for college students and young professionals.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-icon.png"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}