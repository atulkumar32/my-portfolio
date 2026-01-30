'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, ShoppingCart, Building, GraduationCap, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import portfolioData from '@/data/portfolio.json'

const iconMap = {
  code: Code,
  'shopping-cart': ShoppingCart,
  building: Building,
  'graduation-cap': GraduationCap,
}

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { services } = portfolioData

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
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive development services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              >
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing and CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Custom quote available
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Every project is unique. I offer custom development solutions tailored 
              to your specific requirements and business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 border-white inline-flex items-center gap-2"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/projects"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center gap-2"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}