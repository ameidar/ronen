"use client"

import Image from 'next/image'
import { useLocale } from '@/lib/use-locale'

export default function About() {
  const locale = useLocale()
  const t = {
    en: {
      title: 'About Us',
      p1:
        'Ronen Meidar Architecture & Interior Design, a full service Architectural studio, located in Israel for over 25 years, Developing top-quality private residential, our clients can feel the unparalleled experience of enjoying a unique, sustainable, balanced spaces that are also a high value financial real estate asset.',
      p2:
        'With a portfolio that includes a range of private commissions that are characterized by their innovation, elegance, and attention to details. As a practice, we are wholly interested in the realization of contemporary architecture.',
      p3:
        'As a designer, it is the aspire to a simplicity distilled from a core concept, itself a product of both brief and site. In order to develop these concepts with an honesty and transparency and through the careful arrangement and detailing of materials, this process culminates in the creation of specifically detailed structures with a clear relationship to their context.',
    },
    he: {
      title: 'עלינו',
      p1:
        'רונן מידר אדריכלות ועיצוב פנים הוא סטודיו אדריכלי מלא, הפועל בישראל יותר מ־25 שנה. אנו מתמחים בפיתוח בתים פרטיים ברמה הגבוהה ביותר, כך שהלקוחות שלנו נהנים מחוויה ייחודית של חללים מאוזנים, בני־קיימא ובעלי ערך נדל״ני גבוה.',
      p2:
        'לסטודיו פורטפוליו רחב של פרויקטים פרטיים המאופיינים בחדשנות, אלגנטיות ותשומת לב לפרטים. כחלק מהעיסוק שלנו, אנו מחויבים למימוש עקרונות האדריכלות העכשווית.',
      p3:
        'כאדריכלים, אנו שואפים לפשטות הנובעת מרעיון מרכזי ברור, המתפתח מתוך התכנית והסביבה. באמצעות תכנון מוקפד ודיוק בפרטים, אנו יוצרים מבנים המחוברים להקשרם באופן טבעי ובהיר.',
    },
  } as const

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${locale === 'he' ? 'text-right md:order-2' : ''}`}> 
            <h2 className="text-3xl md:text-4xl font-light">{t[locale].title}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t[locale].p1}</p>
              <p>{t[locale].p2}</p>
              <p>{t[locale].p3}</p>
            </div>
          </div>
          <div className={`relative w-full max-w-[300px] mx-auto ${locale === 'he' ? 'md:order-1' : ''}`}>
            <Image
              src="/ronen.png"
              alt="MEIDAR ARCHITECTS Studio"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
