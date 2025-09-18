import type React from 'react'
import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import ScrollToTopButton from '@/components/scroll-to-top-button'
import PageTransition from '@/components/page-transition'
import SplashScreen from '@/components/splash-screen'
import { Onest } from 'next/font/google'

export const metadata: Metadata = {
  metadataBase: new URL('https://ronenmeidar.co.il'),
  title: 'MEIDAR ARCHITECTS | Luxury Architecture & Interior Design',
  description:
    'Luxury architectural studio led by Ronen Meidar - Creating timeless and elegant spaces in Israel.',
  icons: {
    icon: '/favicon.ico',
  },
}

const font = Onest({ subsets: ['latin'], display: 'swap', variable: '--orbitron-font' })

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: 'en' | 'he' }
}) {
  const dir = params.locale === 'he' ? 'rtl' : 'ltr'
  return (
    <html lang={params.locale} dir={dir} className={`scroll-smooth ${font.variable}`}>
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


