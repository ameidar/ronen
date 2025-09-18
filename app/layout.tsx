import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import ScrollToTopButton from '@/components/scroll-to-top-button'
import PageTransition from '@/components/page-transition'
import SplashScreen from '@/components/splash-screen'
import { Inter, Onest, Orbitron, Roboto_Condensed } from 'next/font/google'

// Import Neue Haas Grotesk font

export const metadata: Metadata = {
  metadataBase: new URL('https://ronenmeidar.co.il'),
  title: 'MEIDAR ARCHITECTS | Luxury Architecture & Interior Design',
  description: 'Luxury architectural studio led by Ronen Meidar - Creating timeless and elegant spaces in Israel.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'MEIDAR ARCHITECTS | Luxury Architecture & Interior Design',
    description: 'Architectural studio led by Ronen Meidar - Specializing in luxury residential design.',
    url: 'https://ronenmeidar.co.il',
    images: [
      {
        url: '/bg.png',
        width: 1200,
        height: 630,
        alt: 'MEIDAR ARCHITECTS - Luxury Architecture',
      },
    ],
    siteName: 'MEIDAR ARCHITECTS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEIDAR ARCHITECTS | Luxury Architecture & Interior Design',
    description: 'Architectural studio led by Ronen Meidar - Creating elegant spaces for modern living.',
    images: [
      {
        url: '/bg.png',
        alt: 'MEIDAR ARCHITECTS - Luxury Architecture',
      },
    ],
  },
}

const font = Onest({
  subsets: ['latin'],
  display: 'swap',
  variable: '--orbitron-font',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${font.variable}`}>
      <body className={font.className}>
        <SplashScreen />
        <ScrollToTop />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
