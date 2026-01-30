import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import Education from '@/components/about/Education'
import Timeline from '@/components/about/Timeline'
import WorkProcess from '@/components/about/WorkProcess'

export const metadata: Metadata = {
  title: 'About - Atul Maurya | Full Stack Developer',
  description: 'Learn more about Atul Maurya, a passionate Full Stack Developer with B.Tech degree and 2+ years of experience in web development.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <Education />
      <Timeline />
      <WorkProcess />
    </div>
  )
}