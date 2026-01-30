'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import portfolioData from '@/data/portfolio.json'

export default function SkillsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { skills } = portfolioData

  const skillCategories = [
    { 
      title: 'Frontend Development', 
      skills: skills.frontend, 
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10'
    },
    { 
      title: 'Backend Development', 
      skills: skills.backend, 
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-900/10'
    },
    { 
      title: 'Database Management', 
      skills: skills.database, 
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/10'
    },
    { 
      title: 'Tools & DevOps', 
      skills: skills.tools, 
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10'
    },
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
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proficiency levels in various technologies and frameworks I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className={`${category.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, 
                            duration: 1.2,
                            ease: "easeOut"
                          }}
                          className={`h-3 rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                      
                      {/* Skill level indicator */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.5, 
                          duration: 0.3 
                        }}
                        className="absolute -top-8 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded text-xs font-medium"
                        style={{ left: `${Math.max(0, Math.min(skill.level - 5, 90))}%` }}
                      >
                        {skill.level}%
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-800 dark:border-t-gray-200"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 + 1, duration: 0.5 }}
                className="mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Average Proficiency
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}