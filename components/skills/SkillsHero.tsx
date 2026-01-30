'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Palette } from 'lucide-react'

export default function SkillsHero() {
  const skillAreas = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern UI/UX with React & Next.js'
    },
    {
      icon: Server,
      title: 'Backend Development', 
      description: 'Scalable APIs with Node.js & Express'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'MongoDB, PostgreSQL & Redis'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Responsive & accessible interfaces'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Comprehensive full-stack development expertise with modern technologies 
            and frameworks to bring your ideas to life.
          </p>

          {/* Skill Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}