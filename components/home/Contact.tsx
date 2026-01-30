'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { personal } = portfolioData

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm currently {personal.availability.toLowerCase()} and would love to hear about your project. 
                Whether you need a complete web application or want to improve an existing one, 
                I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Email</div>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Location</div>
                  <div className="text-gray-600 dark:text-gray-400">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 dark:text-green-400 font-medium">
                  {personal.availability}
                </span>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="mb-6 opacity-90">
                Let's discuss your requirements and create a solution that exceeds your expectations.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/contact" 
                  className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 border-white inline-flex items-center gap-2 w-full justify-center"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </Link>
                
                <a
                  href={portfolioData.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center gap-2 w-full justify-center"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}