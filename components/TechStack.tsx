'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TechStackProps {
  technologies: string[]
}

export default function TechStack({ technologies }: TechStackProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
        Technologies I Work With
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all duration-300 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}