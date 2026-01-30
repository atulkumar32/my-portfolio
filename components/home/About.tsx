'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Download } from 'lucide-react'
import { forceDownloadResume } from '@/utils/downloadUtils'
import portfolioData from '@/data/portfolio.json'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { personal, workProcess } = portfolioData

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
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with {personal.experience} years of experience 
                in building scalable web applications. I specialize in modern technologies like React, 
                Next.js, and Node.js, with a focus on creating exceptional user experiences.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development started during my B.Tech studies, and since then, 
                I've worked on diverse projects ranging from eCommerce platforms to educational 
                systems, always striving to deliver high-quality solutions that exceed client expectations.
              </p>
            </div>

            {/* Education & Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{personal.qualification}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Graduated {personal.graduationYear}</p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Experience</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{personal.experience} Years</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Freelance Developer</p>
              </div>
            </div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={forceDownloadResume}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Work Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              My Work Process
            </h3>
            
            <div className="space-y-6">
              {workProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}