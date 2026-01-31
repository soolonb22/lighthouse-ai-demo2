import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lighthouse AI - Intelligent Customer Support Platform',
  description: 'Automate customer support, intake, follow-ups, and staff assistance with AI-powered conversations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
