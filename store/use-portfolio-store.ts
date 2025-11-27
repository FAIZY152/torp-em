import { create } from 'zustand'

type Section = 'home' | 'experience' | 'education' | 'skills' | 'contact'
interface PortfolioState {
  currentSection: Section
  setCurrentSection: (section: Section) => void
  currentSlide: number
  setCurrentSlide: (slide: number) => void
}
// make zustand store
export const usePortfolioStore = create<PortfolioState>((set) => ({
  currentSection: 'home',
  setCurrentSection: (section) => set({ currentSection: section }),
  currentSlide: 1,
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
}))

