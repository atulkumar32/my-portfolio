'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  MessageCircle, 
  FileText, 
  GitBranch, 
  Monitor 
} from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function WorkProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { workProcess } = portfolioData

  const processIcons = {
    '01': Lightbulb,
    '02': Code,
    '03': TestTube,
    '04': Rocket
  }

  const processDetails = [
    {
      step: '01',
      title: 'Plan',
      description: 'Understanding requirements, creating wireframes, and planning the architecture.',
      details: [
        'Requirements gathering and analysis',
        'User experience design and wireframing',
        'Technical architecture planning',
        'Project timeline and milestone setup'
      ],
      tools: ['Figma', 'Miro', 'Notion', 'Slack']
    },
    {
      step: '02',
      title: 'Build',
      description: 'Developing the application with clean code, best practices, and regular updates.',
      details: [
        'Frontend development with React/Next.js',
        'Backend API development with Node.js',
        'Database design and implementation',
        'Regular progress updates and demos'
      ],
      tools: ['VS Code', 'React', 'Node.js', 'MongoDB']
    },
    {
      step: '03',
      title: 'Test',
      description: 'Thorough testing across devices, browsers, and performance optimization.',
      details: [
        'Cross-browser compatibility testing',
        'Mobile responsiveness verification',
        'Performance optimization and monitoring',
        'Security testing and validation'
      ],
      tools: ['Jest', 'Cypress', 'Lighthouse', 'BrowserStack']
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'Deployment to production with monitoring, maintenance, and support.',
      details: [
        'Production deployment setup',
        'Domain and SSL configuration',
        'Performance monitoring setup',
        'Ongoing maintenance and support'
      ],
      tools: ['Vercel', 'AWS', 'Cloudflare', 'GitHub Actions']
    }
  ]

  const additionalServices = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Free initial consultation to understand your needs'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive project documentation and handover'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Professional Git workflow with regular commits'
    },
    {
      icon: Monitor,
      title: 'Maintenance',
      description: 'Post-launch support and maintenance services'
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
            How I Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My proven 4-step process ensures quality delivery and client satisfaction
          </p>
        </motion.div>

        {/* Main Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processDetails.map((process, index) => {
            const Icon = processIcons[process.step as keyof typeof processIcons]
            
            return (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processDetails.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 z-0"></div>
                )}

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow relative z-10">
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {process.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {process.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mb-4">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1">
                    {process.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What's Included
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and see how my proven process can bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 border-white inline-flex items-center gap-2"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}