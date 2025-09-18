'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/contact', label: 'CONTACT' },
  ]

  const currentLocale = pathname?.split('/').filter(Boolean)[0] === 'he' ? 'he' : 'en'
  const oppositeLocale = currentLocale === 'he' ? 'en' : 'he'
  const switchLocalePath = `/${oppositeLocale}` + (pathname ? pathname.replace(/^\/(en|he)/, '') : '')

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/80 backdrop-blur-md shadow-sm text-black' : 'bg-transparent text-white'
        }`}
      >
        <div className="md:container mx-auto h-20 flex items-center justify-between">
          <Link href="/" className="contents">
            <div className=" pl-2 flex items-center justify-center">
              <img
                src={isScrolled ? '/logo-white.png' : '/logo-white.png'}
                alt="Logo"
                width={300}
                height={300}
                className="w-14 h-14 object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex  items-center space-x-12 pr-4 md:pr-0">
            {navItems.map((item) => {
              const href = `/${currentLocale}${item.href === '/' ? '' : item.href}`
              return (
                <Link
                  key={item.href}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === href ? 'text-primary' : 'hover:text-primary'
                  } ${isScrolled ? 'text-white' : 'text-white'}`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link href={switchLocalePath} className="text-sm font-medium opacity-80 hover:opacity-100">
              {currentLocale === 'he' ? 'EN' : 'HE'}
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden z-50 mr-4 md:mr-0 ${isScrolled ? 'text-white' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col"
          >
            <div className="flex-1 gap-12 flex flex-col justify-center items-center">
              {navItems.map((item, i) => (
                <motion.div key={item.href} custom={i} variants={menuItemVariants}>
                  <Link
                    href={`/${currentLocale}${item.href === '/' ? '' : item.href}`}
                    className={`text-3xl font-light mb-12 transition-colors ${
                      pathname === `/${currentLocale}${item.href === '/' ? '' : item.href}` ? 'text-primary' : 'hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link href={switchLocalePath} className="text-xl font-light mt-4">
                {currentLocale === 'he' ? 'EN' : 'HE'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
