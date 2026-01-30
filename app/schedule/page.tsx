import type { Metadata } from 'next'
import CalendlyWidget from '@/components/CalendlyWidget'

export const metadata: Metadata = {
  title: 'Schedule a Call - Atul Maurya | Full Stack Developer',
  description: 'Book a consultation call with Atul Maurya to discuss your web development project. Available for freelance work and consultations.',
}

export default function SchedulePage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Schedule a Consultation Call
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project requirements and how I can help bring your ideas to life. 
            Choose a time that works best for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <CalendlyWidget 
            url="https://calendly.com/atulanace2015/30min"
            height={700}
          />
        </div>

        <div className="mt-8 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              📋 Before the Call
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2 text-left">
              <li>• Prepare a brief description of your project</li>
              <li>• Have your requirements and timeline ready</li>
              <li>• Consider your budget range</li>
              <li>• Prepare any specific questions you'd like to discuss</li>
              <li>• You'll receive a Google Meet link via email</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}