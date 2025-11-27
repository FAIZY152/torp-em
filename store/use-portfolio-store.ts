import { create } from 'zustand'

type Section = 'home' | 'experience' | 'education' | 'skills' | 'contact'
//  PortfolioState updated
interface PortfolioState {
  currentSection: Section
  setCurrentSection: (section: Section) => void
  currentSlide: number
  setCurrentSlide: (slide: number) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  currentSection: 'home',
  setCurrentSection: (section) => set({ currentSection: section }),
  currentSlide: 1,
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
}))

