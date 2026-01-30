'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Mail, MessageCircle, CheckCircle, ExternalLink, X, Video } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'
import { generateGoogleMeetLink, sendMeetingNotifications, MeetingDetails } from '@/utils/meetingUtils'

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
    message: '',
    meetingType: 'google-meet'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isScheduled, setIsScheduled] = useState(false)
  const [meetingLink, setMeetingLink] = useState('')

  const { personal } = portfolioData

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ]

  const projectTypes = [
    'Full Stack Development',
    'eCommerce Platform',
    'B2B/B2C Application',
    'Education Platform',
    'API Development',
    'Website Redesign',
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
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Generate Google Meet link
      const generatedMeetLink = generateGoogleMeetLink()
      setMeetingLink(generatedMeetLink)
      
      // Create meeting details
      const startDateTime = new Date(`${formData.preferredDate}T${formData.preferredTime}:00`)
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000) // 1 hour later

      const meetingDetails: MeetingDetails = {
        title: `Consultation Call with ${formData.name}`,
        description: `Project Discussion: ${formData.projectType}

Client Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Project Requirements:
${formData.message}

This is an automated calendar event. Please confirm your attendance.`,
        startTime: startDateTime,
        endTime: endDateTime,
        attendeeEmail: formData.email,
        organizerEmail: personal.email,
        meetingLink: generatedMeetLink
      }

      // Send notifications
      await sendMeetingNotifications(meetingDetails, formData.phone)

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

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
      meetingType: 'google-meet'
    })
    setStep(1)
    setIsScheduled(false)
    setMeetingLink('')
    setIsSubmitting(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Schedule a Consultation Call
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                    Let's discuss your project requirements and how I can help bring your ideas to life.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Choose Your Preferred Scheduling Method
                  </h3>
                  
                  {/* Quick Scheduling Options */}
                  <div className="grid gap-4">
                    <button
                      onClick={openCalendly}
                      className="p-6 border-2 border-primary-200 dark:border-primary-800 rounded-xl hover:border-primary-400 dark:hover:border-primary-600 transition-colors text-left group"
                    >
                      <div className="flex items-start gap-4">
                        <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                            Calendly - Instant Booking (Recommended)
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Quick and easy scheduling with automatic calendar integration and Google Meet links
                          </p>
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Book Now on Calendly</span>
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setStep(2)}
                      className="p-6 border-2 border-green-200 dark:border-green-800 rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors text-left group"
                    >
                      <div className="flex items-start gap-4">
                        <Video className="w-8 h-8 text-green-600 dark:text-green-400 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400">
                            Custom Scheduling with Google Meet
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Fill out a form and get a Google Meet link with calendar invites and WhatsApp notifications
                          </p>
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Schedule Custom Meeting</span>
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setStep(4)}
                      className="p-6 border-2 border-green-200 dark:border-green-800 rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors text-left group"
                    >
                      <div className="flex items-start gap-4">
                        <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400">
                            WhatsApp Scheduling
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Quick form to send your details via WhatsApp for immediate response and flexible scheduling
                          </p>
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Schedule via WhatsApp</span>
                          </div>
                        </div>
                      </div>
                    </button>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        💡 Recommendation
                      </h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        For fastest scheduling, use Calendly. For custom requirements or specific times, use the custom form. For immediate response, use WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Schedule Your Consultation
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
                        Phone Number (with country code)
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
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
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
                        Preferred Time (IST) *
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
                          <option key={time} value={time}>
                            {new Date(`2000-01-01T${time}:00`).toLocaleTimeString('en-IN', {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true
                            })}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Please describe your project requirements, timeline, budget range, and any specific questions you'd like to discuss..."
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1 py-3 touch-manipulation"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex-1 inline-flex items-center justify-center gap-2 disabled:opacity-50 py-3 touch-manipulation"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Creating Meeting...
                        </>
                      ) : (
                        <>
                          <Video className="w-4 h-4" />
                          Schedule Meeting
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const whatsappMessage = `Hi Atul! I'd like to schedule a consultation call.

📋 My Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Project Type: ${formData.projectType}

📅 Preferred Schedule:
• Date: ${formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Flexible'}
• Time: ${formData.preferredTime ? new Date(`2000-01-01T${formData.preferredTime}:00`).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }) : 'Flexible'} IST

💼 Project Details:
${formData.message}

Please let me know your available times and we can schedule our consultation call. Looking forward to discussing my project with you!`

                  window.open(`https://wa.me/919084997180?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
                  setStep(5)
                }} className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Schedule via WhatsApp
                  </h3>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      📱 How it works
                    </h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• Fill out your details below</li>
                      <li>• Click "Send WhatsApp Message"</li>
                      <li>• Your details will be sent to Atul via WhatsApp</li>
                      <li>• Get immediate response and flexible scheduling</li>
                    </ul>
                  </div>

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
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number (with country code) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+91 9084997180"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Date and Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Time (Optional)
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Flexible timing</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {new Date(`2000-01-01T${time}:00`).toLocaleTimeString('en-IN', {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true
                            })}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Please describe your project requirements, timeline, budget range, and any specific questions you'd like to discuss..."
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1 py-3 touch-manipulation"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-3 touch-manipulation"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send WhatsApp Message
                    </button>
                  </div>
                </form>
              )}

              {step === 5 && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      WhatsApp Message Sent! 📱
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your consultation request has been sent to Atul via WhatsApp.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      ✅ What happens next?
                    </h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 text-left">
                      <li>• Atul will receive your message immediately</li>
                      <li>• You'll get a response within 2-4 hours</li>
                      <li>• Schedule will be confirmed via WhatsApp</li>
                      <li>• Meeting link will be shared before the call</li>
                      <li>• Flexible timing based on mutual availability</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      📞 Direct Contact
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                      For immediate assistance, you can also call or message directly:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="tel:+919084997180"
                        className="btn-secondary text-sm inline-flex items-center justify-center gap-2 py-2.5 touch-manipulation"
                      >
                        📞 Call Now
                      </a>
                      <a
                        href="https://wa.me/919084997180"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm inline-flex items-center justify-center gap-2 py-2.5 touch-manipulation"
                      >
                        💬 Open WhatsApp
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="btn-primary w-full py-3 touch-manipulation"
                  >
                    Close
                  </button>
                </div>
              )}

              {step === 3 && isScheduled && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Meeting Scheduled Successfully! 🎉
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your consultation has been scheduled and meeting details have been sent.
                    </p>
                  </div>

                  {meetingLink && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                        📅 Meeting Details
                      </h4>
                      <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                        <p><strong>Date:</strong> {new Date(`${formData.preferredDate}T${formData.preferredTime}:00`).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <p><strong>Time:</strong> {new Date(`${formData.preferredDate}T${formData.preferredTime}:00`).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })} IST</p>
                        <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border">
                          <p className="font-medium mb-1">Google Meet Link:</p>
                          <a 
                            href={meetingLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline break-all"
                          >
                            {meetingLink}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      ✅ What happens next?
                    </h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 text-left">
                      <li>• Google Calendar event created and opened</li>
                      <li>• WhatsApp notifications sent to both parties</li>
                      <li>• Meeting link shared with you and Atul</li>
                      <li>• Calendar invites will be sent to your email</li>
                      <li>• Join the meeting 5 minutes early</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={() => window.open(meetingLink, '_blank')}
                      className="btn-primary flex-1 inline-flex items-center justify-center gap-2 py-3 touch-manipulation"
                    >
                      <Video className="w-4 h-4" />
                      Test Meeting Link
                    </button>
                    <button
                      onClick={handleClose}
                      className="btn-secondary flex-1 py-3 touch-manipulation"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}