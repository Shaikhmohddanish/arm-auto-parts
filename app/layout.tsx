import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arm Auto Parts - Used Auto Parts & Salvage Yard',
  description: 'Find quality used auto parts at Arm Auto Parts. We offer engines, transmissions, headlights and more with nationwide shipping. Call (888) 929-0045.',
  generator: 'Arm Auto Parts',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden`}>
        <div className="min-h-screen overflow-x-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
