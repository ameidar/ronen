'use client'

import type React from 'react'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

export default function ContactForm() {
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
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" name="name" required className="bg-background" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" name="email" type="email" required className="bg-background" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="message" name="message" required className="bg-background min-h-[120px]" />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit Message'}
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
