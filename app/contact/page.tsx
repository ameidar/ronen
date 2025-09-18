import type { Metadata } from 'next'
import ContactPageContent from '@/components/contact-page-content'

export const metadata: Metadata = {
  title: 'Contact Us | MEIDAR ARCHITECTS',
  description: 'Get in touch with MEIDAR ARCHITECTS for your luxury architectural needs in Israel.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
