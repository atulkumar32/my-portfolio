import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atul Maurya - Full Stack Developer Portfolio',
  description: 'Freelance Full Stack Developer with 2+ years experience in B2B, B2C, Education platforms, and eCommerce websites. B.Tech graduate specializing in React, Next.js, Node.js development.',
  keywords: 'Full Stack Developer, React Developer, Next.js, Node.js, Freelancer, B2B, B2C, eCommerce, Education Platform',
  authors: [{ name: 'Atul Maurya' }],
  openGraph: {
    title: 'Atul Maurya - Full Stack Developer',
    description: 'Professional Full Stack Developer Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}