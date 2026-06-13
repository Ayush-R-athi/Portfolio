import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ayush Rathi - AI & Full-Stack Developer",
  description:
    "Portfolio of Ayush Rathi — Final-year B.Tech CSE student at VIT Chennai specializing in AI, Machine Learning, and Full-Stack Development.",
  metadataBase: new URL("https://ayushrathi.netlify.app"),
  openGraph: {
    type: "website",
    url: "https://ayushrathi.netlify.app",
    title: "Ayush Rathi - AI & Full-Stack Developer",
    description:
      "Portfolio of Ayush Rathi — Final-year B.Tech CSE student at VIT Chennai specializing in AI, Machine Learning, and Full-Stack Development.",
    siteName: "Ayush Rathi Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ayush Rathi - AI & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Rathi - AI & Full-Stack Developer",
    description:
      "Portfolio of Ayush Rathi — Final-year B.Tech CSE student at VIT Chennai specializing in AI, Machine Learning, and Full-Stack Development.",
    images: ["/opengraph-image"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
