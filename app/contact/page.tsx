import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact - Atul Maurya | Full Stack Developer',
  description: 'Get in touch with Atul Maurya for your next web development project. Available for freelance work and consultations.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}