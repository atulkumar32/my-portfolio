import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Skills from '@/components/home/Skills'
import Testimonials from '@/components/home/Testimonials'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  )
}