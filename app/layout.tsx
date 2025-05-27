import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Krishna Somani - Photography Portfolio",
  description:
    "Capture moments, Forever. Professional photography services including street photography, events, nature, portraits, and more.",
  keywords:
    "photography, photographer, Krishna Somani, portfolio, street photography, event photography, nature photography, portraits",
  authors: [{ name: "Krishna Somani" }],
  openGraph: {
    title: "Krishna Somani - Photography Portfolio",
    description: "Capture moments, Forever. Professional photography services.",
    type: "website",
    locale: "en_US",
    siteName: "Krishna Somani Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Somani - Photography Portfolio",
    description: "Capture moments, Forever. Professional photography services.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
