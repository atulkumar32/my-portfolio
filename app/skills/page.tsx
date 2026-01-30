import type { Metadata } from 'next'
import SkillsHero from '@/components/skills/SkillsHero'
import SkillsGrid from '@/components/skills/SkillsGrid'
import ServicesSection from '@/components/skills/ServicesSection'

export const metadata: Metadata = {
  title: 'Skills & Services - Atul Maurya | Full Stack Developer',
  description: 'Explore my technical skills in React, Next.js, Node.js, and more. Discover the services I offer including full stack development, eCommerce solutions, and B2B applications.',
}

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <SkillsHero />
      <SkillsGrid />
      <ServicesSection />
    </div>
  )
}