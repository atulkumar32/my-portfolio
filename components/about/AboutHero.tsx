'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, GraduationCap } from 'lucide-react'
import { forceDownloadResume } from '@/utils/downloadUtils'
import portfolioData from '@/data/portfolio.json'

export default function AboutHero() {
  const { personal } = portfolioData

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
              >
                About Me
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-primary-600 dark:text-primary-400 font-medium"
              >
                {personal.title} & {personal.subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg dark:prose-invert"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with {personal.experience} years of experience 
                in building scalable web applications. My journey in web development started during 
                my B.Tech studies at AKTU, where I discovered my love for creating digital solutions 
                that make a real impact.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As a freelance developer, I've had the privilege of working with diverse clients 
                across various industries including B2B, B2C, Education platforms, and eCommerce. 
                I believe in writing clean, maintainable code and creating user experiences that 
                are both beautiful and functional.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community. 
                I'm always excited to take on new challenges and help bring innovative ideas to life.
              </p>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Education</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {personal.qualification} ({personal.graduationYear})
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Experience</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {personal.experience} Years Professional
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Location</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Status</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Available for work</div>
                </div>
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold gradient-text">AK</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {personal.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {personal.title}
                  </p>
                  <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    {personal.experience} Years Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}