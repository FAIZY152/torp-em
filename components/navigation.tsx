"use client";

import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/use-portfolio-store";

export function Navigation() {
  const { currentSlide, setCurrentSlide } = usePortfolioStore();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex gap-3 rounded-full bg-white/10 backdrop-blur-sm p-3">
        {[1, 2, 3, 4, 5].map((slide) => (
          <button
            key={slide}
            onClick={() => setCurrentSlide(slide)}
            className="relative h-3 w-3">
            <motion.div
              animate={{
                scale: currentSlide === slide ? 1 : 0.5,
                opacity: currentSlide === slide ? 1 : 0.5,
              }}
              className="absolute inset-0 rounded-full bg-cyan-400"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
