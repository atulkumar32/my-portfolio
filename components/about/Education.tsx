'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { personal } = portfolioData

  const educationDetails = [
    {
      icon: GraduationCap,
      title: 'Bachelor of Technology',
      institution: 'AKTU (Dr. A.P.J. Abdul Kalam Technical University)',
      year: personal.graduationYear,
      description: 'Completed B.Tech with focus on computer science and software engineering principles.',
      highlights: ['Data Structures & Algorithms', 'Database Management', 'Software Engineering', 'Web Technologies']
    },
    {
      icon: Code,
      title: 'Self-Learning & Certifications',
      institution: 'Online Platforms & Bootcamps',
      year: '2019 - Present',
      description: 'Continuous learning through various online platforms and practical projects.',
      highlights: ['React & Next.js Mastery', 'Node.js Backend Development', 'MongoDB & PostgreSQL', 'Cloud Deployment']
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: '25+ Projects Completed',
      description: 'Successfully delivered diverse web applications across multiple domains'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always staying updated with latest technologies and best practices'
    },
    {
      icon: Code,
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend development technologies'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background and continuous learning journey in technology
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {educationDetails.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h3>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.year}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      {edu.institution}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < educationDetails.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-gray-300 dark:bg-gray-600"></div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
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