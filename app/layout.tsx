import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DIGITALIZE NASARAWA - Student E-Facility Platform",
  description:
    "Empowering education through digital transformation in Nasarawa State. Join thousands of students and agents building their digital future.",
  keywords: "digital education, Nasarawa State, student portal, agent network, online learning, Nigeria education",
  authors: [{ name: "DIGITALIZE NASARAWA" }],
  creator: "DIGITALIZE NASARAWA",
  publisher: "DIGITALIZE NASARAWA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://digitalizenasarawa.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIGITALIZE NASARAWA - Student E-Facility Platform",
    description:
      "Empowering education through digital transformation in Nasarawa State. Join thousands of students and agents building their digital future.",
    url: "https://digitalizenasarawa.ng",
    siteName: "DIGITALIZE NASARAWA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGITALIZE NASARAWA - Student E-Facility Platform",
    description:
      "Empowering education through digital transformation in Nasarawa State. Join thousands of students and agents building their digital future.",
    creator: "@digitalizenasarawa",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
