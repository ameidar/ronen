"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLocale } from '@/lib/use-locale'

const stats = [
  { number: 25, label: 'Years of Experience' },
  { number: 150, label: 'Projects Completed' },
  { number: 100, label: 'Happy Clients' },
]

export default function PhilosophySection() {
  const locale = useLocale()
  const copy = {
    en: {
      title: 'Our Philosophy & Approach',
      p1:
        'We believe in creating spaces that transcend mere functionality, embracing the delicate balance between aesthetic beauty and practical living. Our approach combines innovative design solutions with timeless architectural principles.',
      p2:
        'Each project is a unique journey, where we collaborate closely with our clients to transform their vision into extraordinary spaces that reflect their lifestyle and aspirations.',
      stats: [
        { number: 25, label: 'Years of Experience' },
        { number: 150, label: 'Projects Completed' },
        { number: 100, label: 'Happy Clients' },
      ],
    },
    he: {
      title: 'הפילוסופיה והגישה שלנו',
      p1:
        'אנו מאמינים ביצירת חללים שעוברים את גבול הפונקציונליות בלבד, ומשלבים בין יופי אסתטי לחיי היום־יום. הגישה שלנו מחברת פתרונות עיצוב חדשניים עם עקרונות אדריכליים על־זמניים.',
      p2:
        'כל פרויקט הוא מסע ייחודי בו אנו משתפים פעולה עם הלקוחות כדי להפוך את החזון שלהם לחללים יוצאי דופן המשקפים את סגנון חייהם ושאיפותיהם.',
      stats: [
        { number: 25, label: 'שנות ניסיון' },
        { number: 150, label: 'פרויקטים שהושלמו' },
        { number: 100, label: 'לקוחות מרוצים' },
      ],
    },
  } as const
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-light">{copy[locale].title}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{copy[locale].p1}</p>
                <p>{copy[locale].p2}</p>
              </div>
            </motion.div>

            <div ref={ref} className="grid grid-cols-3 gap-8">
              {copy[locale].stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-light mb-2">{stat.number}+</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/projects/zw-house/image7.jpg"
                alt="Architectural Design Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
