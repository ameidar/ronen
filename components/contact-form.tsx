'use client'

import type React from 'react'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'
import { useLocale } from '@/lib/use-locale'

export default function ContactForm() {
  const locale = useLocale()
  const t = locale === 'he' ? {
    name: 'שם',
    email: 'אימייל',
    message: 'הודעה',
    namePh: 'השם שלך',
    emailPh: 'your@email.com',
    messagePh: 'ההודעה שלך...',
    submit: 'שליחת הודעה',
    sending: 'שולח...'
  } : {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePh: 'Your name',
    emailPh: 'your@email.com',
    messagePh: 'Your message here...',
    submit: 'Submit Message',
    sending: 'Sending...'
  }
  const [isLoading, setIsLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setFormStatus('idle')

    const formData = new FormData(event.currentTarget)

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setFormStatus('success')
        formRef.current?.reset() // Reset the form using the ref
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Error in form submission:', error)
      setFormStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`space-y-6 ${locale === 'he' ? 'text-right' : ''}`}
      dir={locale === 'he' ? 'rtl' : 'ltr'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          {t.name}
        </label>
        <Input id="name" name="name" required className="bg-background" placeholder={t.namePh} />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          {t.email}
        </label>
        <Input id="email" name="email" type="email" required className="bg-background" placeholder={t.emailPh} />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {t.message}
        </label>
        <Textarea id="message" name="message" required className="bg-background min-h-[120px]" placeholder={t.messagePh} />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t.sending : t.submit}
      </Button>
      {formStatus === 'success' && (
        <p className="text-green-600 mt-2">Message sent successfully! We'll get back to you soon.</p>
      )}
      {formStatus === 'error' && (
        <p className="text-red-600 mt-2">Failed to send message. Please try again or contact us directly.</p>
      )}
    </motion.form>
  )
}
