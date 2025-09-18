'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const fullName = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ronen.meidar@gmail.com', // Your email address
      subject: 'New Lead Submission',
      text: `
        Name: ${fullName}
        Email: ${email}
        Message: ${message}
      `,
    })

    if (error) {
      console.error('Error sending email:', error)
      return { success: false }
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false }
  }
}
