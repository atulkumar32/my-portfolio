'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'
import ScheduleCall from '@/components/ScheduleCall'

export default function ContactHero() {
  const { personal } = portfolioData
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Send me a detailed message',
      action: personal.email,
      onClick: () => window.open(`mailto:${personal.email}`, '_blank')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick response guaranteed',
      action: 'Chat Now',
      onClick: () => window.open(`https://wa.me/919084997180?text=Hi Atul! I'm interested in discussing a project with you.`, '_blank')
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation',
      action: 'Available Mon-Fri',
      onClick: () => setIsScheduleOpen(true)
    }
  ]

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Ready to bring your ideas to life? I'm currently {personal.availability.toLowerCase()} 
              and excited to discuss your next project.
            </p>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 dark:text-green-400 font-medium">
                {personal.availability}
              </span>
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer transform hover:scale-105"
                  onClick={method.onClick}
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {method.description}
                  </p>
                  <div className="text-primary-600 dark:text-primary-400 font-medium">
                    {method.action}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Schedule Call Modal */}
      <ScheduleCall 
        isOpen={isScheduleOpen} 
        onClose={() => setIsScheduleOpen(false)} 
      />
    </>
  )
}