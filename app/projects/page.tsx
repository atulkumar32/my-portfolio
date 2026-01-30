import type { Metadata } from 'next'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsGrid from '@/components/projects/ProjectsGrid'

export const metadata: Metadata = {
  title: 'Projects - Atul Maurya | Full Stack Developer Portfolio',
  description: 'Explore my portfolio of web development projects including eCommerce platforms, education systems, B2B applications, and more.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  )
}