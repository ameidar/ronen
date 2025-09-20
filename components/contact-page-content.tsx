"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLocale } from '@/lib/use-locale'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import ContactForm from './contact-form'

export default function ContactPageContent() {
  const locale = useLocale()
  const t = locale === 'he' ? {
    hero: 'צרו קשר',
    subtitle: 'בואו ניצור משהו יוצא דופן יחד',
    contactUs: 'צור קשר',
    ourOffices: 'המשרדים שלנו',
    phone: 'טלפון',
    email: 'אימייל',
  } : {
    hero: 'Get in Touch',
    subtitle: "Let's Create Something Extraordinary Together",
    contactUs: 'Contact Us',
    ourOffices: 'Our Offices',
    phone: 'Phone',
    email: 'Email',
  }
  const [activeOffice, setActiveOffice] = useState('gedera')

  const offices = locale === 'he'
    ? {
        gedera: {
          name: 'סניף דרום: משרד גדרה',
          address: 'רח׳ ז׳בוטינסקי 10, גדרה, ישראל',
          mapSrc:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54024.00736894416!2d34.74673534979115!3d31.81492069237704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7cf4a8f5e6f%3A0xd54b992cc6d3b4a2!2sGedera%2C%20Israel!5e0!3m2!1sen!2sus!4v1645518657869!5m2!1sen!2sus',
        },
        ginosar: {
          name: 'סניף צפון: משרד קיבוץ גינוסר',
          address: 'קיבוץ גינוסר, ישראל',
          mapSrc:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13387.825650372727!2d35.57089259005301!3d32.84037321456499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c3e4505b6d641%3A0xf6f4a023d4faf69f!2sGinosar!5e0!3m2!1sen!2sil!4v1645518800000!5m2!1sen!2sil',
        },
      }
    : {
        gedera: {
          name: 'South Branch: Gedera Office',
          address: 'Jabutinski 10, Gedera, Israel',
          mapSrc:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54024.00736894416!2d34.74673534979115!3d31.81492069237704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7cf4a8f5e6f%3A0xd54b992cc6d3b4a2!2sGedera%2C%20Israel!5e0!3m2!1sen!2sus!4v1645518657869!5m2!1sen!2sus',
        },
        ginosar: {
          name: 'North Branch: Kibuts Ginosar Office',
          address: 'Kibuts Ginosar, Israel',
          mapSrc:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13387.825650372727!2d35.57089259005301!3d32.84037321456499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c3e4505b6d641%3A0xf6f4a023d4faf69f!2sGinosar!5e0!3m2!1sen!2sil!4v1645518800000!5m2!1sen!2sil',
        },
      }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/projects/ry-residence/image7.jpg" alt="Contact Us Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4">{t.hero}</h1>
          <p className="text-xl md:text-2xl font-inter">{t.subtitle}</p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12 md:py-24"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl font-playfair mb-6">{t.contactUs}</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-playfair mb-6">{t.ourOffices}</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <p className="font-medium">{t.phone}</p>
                  <a href="tel:+972524093549" className="text-muted-foreground hover:text-primary transition-colors">
                    052-409-3549
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <p className="font-medium">{t.email}</p>
                  <a
                    href="mailto:ronen.meidar@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ronen.meidar@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {Object.entries(offices).map(([key, office]) => (
                <motion.div
                  key={key}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    activeOffice === key ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveOffice(key)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <MapPin className={`w-6 h-6 mt-1 ${activeOffice === key ? 'text-white' : 'text-primary'}`} />
                      <div>
                        <p className="font-medium">{office.name}</p>
                        <p className={activeOffice === key ? 'text-white/80' : 'text-muted-foreground'}>
                          {office.address}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${activeOffice === key ? 'text-white' : 'text-primary'}`} />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="aspect-video w-full mt-8">
              <iframe
                src={offices[activeOffice as keyof typeof offices].mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
