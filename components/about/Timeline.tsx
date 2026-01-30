'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineEvents = [
    {
      year: '2019',
      title: 'Graduated B.Tech',
      company: 'AKTU University',
      location: 'Uttar Pradesh, India',
      description: 'Completed Bachelor of Technology with focus on computer science and software engineering.',
      type: 'education',
      icon: Calendar
    },
    {
      year: '2019',
      title: 'Started Freelancing',
      company: 'Self-Employed',
      location: 'Remote',
      description: 'Began freelance web development journey, focusing on modern JavaScript frameworks.',
      type: 'work',
      icon: Briefcase
    },
    {
      year: '2020',
      title: 'First Major Project',
      company: 'EduTech Startup',
      location: 'Remote',
      description: 'Developed a comprehensive learning management system using React and Node.js.',
      type: 'project',
      icon: Briefcase
    },
    {
      year: '2021',
      title: 'Expanded Skill Set',
      company: 'Continuous Learning',
      location: 'Online',
      description: 'Mastered Next.js, TypeScript, and cloud deployment. Started working with larger clients.',
      type: 'skill',
      icon: Calendar
    },
    {
      year: '2022',
      title: 'B2B Solutions Focus',
      company: 'Multiple Clients',
      location: 'Remote',
      description: 'Specialized in B2B applications and enterprise-level solutions with complex requirements.',
      type: 'work',
      icon: Briefcase
    },
    {
      year: '2023',
      title: 'Full Stack Mastery',
      company: 'Freelance Developer',
      location: 'Remote',
      description: 'Achieved expertise in full-stack development with 25+ completed projects across various domains.',
      type: 'achievement',
      icon: Briefcase
    },
    {
      year: '2024',
      title: 'Current Focus',
      company: 'Available for Projects',
      location: 'Remote Worldwide',
      description: 'Currently taking on new projects and helping businesses build scalable web applications.',
      type: 'current',
      icon: MapPin
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
      case 'work':
        return 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
      case 'project':
        return 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
      case 'skill':
        return 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
      case 'achievement':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
      case 'current':
        return 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
    }
  }

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
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From graduation to becoming a full-stack developer - here's my professional timeline
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={`${event.year}-${event.title}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:pr-8 ml-16 md:ml-0' : 'md:pl-8 ml-16 md:ml-0'}`}>
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        {/* Year Badge */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-primary-600 text-white text-sm font-bold rounded-full">
                            {event.year}
                          </span>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(event.type)}`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>

                        {/* Event Details */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{event.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Icon */}
                        <div className={`mt-4 inline-flex items-center justify-center w-10 h-10 rounded-lg ${getTypeColor(event.type)}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block flex-1"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}