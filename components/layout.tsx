'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePortfolioStore } from '../store/use-portfolio-store'
import { Navigation } from './navigation'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const currentSection = usePortfolioStore((state) => state.currentSection)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-white/10 backdrop-blur-sm p-8"
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Navigation />
      </div>
    </div>
  )
}

