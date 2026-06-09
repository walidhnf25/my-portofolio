import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Walid Hanif Ataullah",
  description:
    "Bachelor's graduate in Software Engineering specializing in Information Technology Adoption, Machine Learning, Deep Learning, and Internet of Things. View my research publications, projects, and connect with me.",
  keywords: [
    "Walid Hanif Ataullah",
    "Software Engineer",
    "AI Researcher",
    "Machine Learning",
    "Deep Learning",
    "IoT",
    "Portfolio",
    "Researcher",
    "Telkom University",
  ],
  authors: [{ name: "Walid Hanif Ataullah" }],
  creator: "Walid Hanif Ataullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walidhanif.dev",
    siteName: "Walid Hanif Ataullah Portfolio",
    title: "Walid Hanif Ataullah | Software Engineer & AI Researcher",
    description:
      "Premium portfolio of a Software Engineer and AI Researcher with expertise in ML, DL, and IoT.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Walid Hanif Ataullah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walid Hanif Ataullah | Software Engineer & AI Researcher",
    description:
      "Premium portfolio of a Software Engineer and AI Researcher with expertise in ML, DL, and IoT.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <AppWrapper>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}