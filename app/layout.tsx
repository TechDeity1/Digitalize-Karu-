import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DIGITALIZE NASARAWA - Student E-Facility & Agent Portal",
  description:
    "Digital education platform for Nasarawa State with student e-facility and agent portal. Transform your digital future with world-class courses and certified training programs.",
  keywords: "digital education, Nasarawa State, student portal, agent portal, online learning, digital transformation",
  authors: [{ name: "DIGITALIZE NASARAWA" }],
  creator: "DIGITALIZE NASARAWA",
  publisher: "DIGITALIZE NASARAWA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
