import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/nav/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel.com/musa-sukumani-s-projects/lume'),
  title: 'Lumé — Natural Skincare',
  description: 'Skin that glows, naturally. Premium skincare formulated for every skin type.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lumé — Natural Skincare',
    description: 'Skin that glows, naturally.',
    url: '/',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
