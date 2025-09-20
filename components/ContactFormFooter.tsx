'use client'

import type React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'
import { useLocale } from '@/lib/use-locale'

export default function ContactFormFooter() {
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
        <label htmlFor="name" className="text-sm font-medium text-primary-foreground">
          {t.name}
        </label>
        <Input
          id="name"
          name="name"
          required
          className="bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border-primary-foreground/20 focus:border-primary-foreground"
          placeholder={t.namePh}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-primary-foreground">
          {t.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border-primary-foreground/20 focus:border-primary-foreground"
          placeholder={t.emailPh}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-primary-foreground">
          {t.message}
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border-primary-foreground/20 focus:border-primary-foreground min-h-[120px]"
          placeholder={t.messagePh}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        disabled={isLoading}
      >
        {isLoading ? t.sending : t.submit}
      </Button>
      {formStatus === 'success' && (
        <p className="text-green-300 mt-2">Message sent successfully! We'll get back to you soon.</p>
      )}
      {formStatus === 'error' && (
        <p className="text-red-300 mt-2">Failed to send message. Please try again or contact us directly.</p>
      )}
    </motion.form>
  )
}
