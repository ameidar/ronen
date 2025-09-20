"use client"

import Image from 'next/image'
import Link from 'next/link'
import ProjectsGrid from '@/components/projects-grid'
import { projects } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/use-locale'

export default function ProjectsClientPage() {
  const locale = useLocale()
  const t = locale === 'he' ? {
    heroTitle: 'הפרויקטים שלנו',
    heroSubtitle: 'יוצרים חללי יוקרה ברחבי הארץ',
    introTitle: 'גלו את הפורטפוליו שלנו',
    introText: 'אסופה של מיטב הפרויקטים שלנו — מהעירוני בן־זמננו ועד הווילות המפוארות מול הים — כל פרויקט הוא איזון בין צורה לפונקציה ותשומת לב לפרטים.',
    ctaTitle: 'מוכנים להתחיל פרויקט?',
    ctaSubtitle: 'בואו נהפוך את החזון האדריכלי שלכם למציאות.',
    contact: 'צרו קשר',
  } : {
    heroTitle: 'Our Projects',
    heroSubtitle: 'Crafting Luxury Spaces Across Israel',
    introTitle: 'Explore Our Portfolio',
    introText: 'Discover a collection of our finest architectural projects, each embodying the perfect blend of form and function.',
    ctaTitle: 'Ready to Start Your Project?',
    ctaSubtitle: "Let's bring your architectural vision to life.",
    contact: 'Contact Us',
  }
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/projects/ry-residence/image5.jpg" alt="Projects Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl font-inter">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">{t.introTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.introText}</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-tr from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">{t.ctaTitle}</h2>
          <p className="text-xl mb-8">{t.ctaSubtitle}</p>
          <Link href="/contact" passHref>
            <Button variant="secondary" size="lg">{t.contact}</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
