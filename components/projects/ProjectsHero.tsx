'use client'

import { motion } from 'framer-motion'
import { Code, Layers, Zap } from 'lucide-react'
import projectsData from '@/data/projects.json'

export default function ProjectsHero() {
  const totalProjects = projectsData.projects.length
  const completedProjects = projectsData.projects.filter(p => p.status === 'Completed').length
  const domains = [...new Set(projectsData.projects.map(p => p.domain))].length

  const stats = [
    { icon: Code, label: 'Total Projects', value: totalProjects },
    { icon: Layers, label: 'Completed', value: completedProjects },
    { icon: Zap, label: 'Domains', value: domains },
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
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            A showcase of my work across various domains including eCommerce, education platforms, 
            B2B applications, and more. Each project represents a unique challenge and solution.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}