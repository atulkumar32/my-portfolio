'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Github } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { personal, social } = portfolioData

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      description: 'Best for detailed project discussions'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      description: 'Available Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
      description: 'Available for remote work worldwide'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      description: 'Usually respond within a few hours'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: social.github,
      description: 'View my code and projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: social.linkedin,
      description: 'Professional network and updates'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: social.whatsapp,
      description: 'Quick chat and instant responses'
    }
  ]

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM IST' },
    { day: 'Sunday', hours: 'Emergency only' }
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>
        
        <div className="space-y-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {detail.label}
                  </h3>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <div className="text-gray-900 dark:text-white font-medium">
                      {detail.value}
                    </div>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Connect With Me
        </h3>
        
        <div className="grid gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/30 transition-colors">
                  <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {social.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {social.description}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* Working Hours */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Working Hours
        </h3>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <div className="space-y-3">
            {workingHours.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex justify-between items-center"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {schedule.day}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {schedule.hours}
                </span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Currently available for new projects
            </div>
          </div>
        </div>
      </div>

      {/* Quick Response Promise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg p-6 text-white"
      >
        <h3 className="text-lg font-bold mb-2">
          Quick Response Guarantee
        </h3>
        <p className="text-primary-100 mb-4">
          I understand that time is valuable. I commit to responding to all inquiries 
          within 24 hours, often much sooner.
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span>Average response time: 2-4 hours</span>
        </div>
      </motion.div>
    </motion.div>
  )
}