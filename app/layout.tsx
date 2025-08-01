import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DIGITALIZE NASARAWA - Digital Education Platform",
  description: "Empowering education through digital transformation in Nasarawa State",
  keywords: "education, digital learning, Nasarawa, students, agents, online education",
  authors: [{ name: "DIGITALIZE NASARAWA" }],
  openGraph: {
    title: "DIGITALIZE NASARAWA - Digital Education Platform",
    description: "Empowering education through digital transformation in Nasarawa State",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGITALIZE NASARAWA - Digital Education Platform",
    description: "Empowering education through digital transformation in Nasarawa State",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
