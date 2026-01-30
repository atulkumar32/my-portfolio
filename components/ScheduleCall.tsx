'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Mail, MessageCircle, CheckCircle, ExternalLink, X } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

interface ScheduleCallProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleCall({ isOpen, onClose }: ScheduleCallProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isScheduled, setIsScheduled] = useState(false)

  const { personal } = portfolioData

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ]

  const projectTypes = [
    'Full Stack Development',
    'eCommerce Platform',
    'B2B/B2C Application',
    'Education Platform',
    'API Development',
    'Consultation',
    'Other'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Generate WhatsApp message
      const whatsappMessage = `Hi Atul! I'd like to schedule a consultation call.

📅 Preferred Date: ${formData.preferredDate}
⏰ Preferred Time: ${formData.preferredTime}
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🚀 Project: ${formData.projectType}

Message: ${formData.message}

Please confirm the meeting and share the Google Calendar link. Looking forward to our discussion!`
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/919084997180?text=${encodeURIComponent(whatsappMessage)}`, '_blank')

      setIsScheduled(true)
      setStep(3)
    } catch (error) {
      console.error('Scheduling failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const openCalendly = () => {
    window.open('https://calendly.com/atulanace2015', '_blank')
  }

  const openGoogleCalendar = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6aZkgAGgAVAR4A4A', '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Schedule a Call
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Let's discuss your project requirements and how I can help you achieve your goals.
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Choose Your Preferred Method
                  </h3>
                  
                  {/* Quick Scheduling Options */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={openCalendly}
                      className="p-6 border-2 border-primary-200 dark:border-primary-800 rounded-xl hover:border-primary-400 dark:hover:border-primary-600 transition-colors text-left"
                    >
                      <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Calendly (Recommended)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Quick and easy scheduling with automatic calendar integration
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-primary-600 dark:text-primary-400">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Open Calendly</span>
                      </div>
                    </button>

                    <button
                      onClick={openGoogleCalendar}
                      className="p-6 border-2 border-green-200 dark:border-green-800 rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors text-left"
                    >
                      <Calendar className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Google Calendar
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Schedule directly through Google Calendar appointments
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-green-600 dark:text-green-400">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Open Google Calendar</span>
                      </div>
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
                      <span className="text-gray-500 dark:text-gray-400">or</span>
                      <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    
                    <button
                      onClick={() => setStep(2)}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send WhatsApp Request
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Schedule Details
                  </h3>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 9084997180"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Brief description of your project requirements..."
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex-1 inline-flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4" />
                          Send WhatsApp Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && isScheduled && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Request Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your scheduling request has been sent via WhatsApp. I'll respond with a Google Calendar link shortly.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      What happens next?
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 text-left">
                      <li>• WhatsApp message sent with your details</li>
                      <li>• I'll confirm availability and send Google Calendar link</li>
                      <li>• You'll receive meeting confirmation via email</li>
                      <li>• Meeting link will be shared before the call</li>
                    </ul>
                  </div>

                  <button
                    onClick={onClose}
                    className="btn-primary"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}