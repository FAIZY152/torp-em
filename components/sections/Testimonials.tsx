"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-[#0A0A0A] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Proof"
          title="Real Work"
          accent="Outcomes"
          description="Credible proof cards based on your actual company experience, project summaries, and live production work."
        />
      </div>

      <div className="testimonial-marquee mt-4">
        <div className="testimonial-marquee-track">
          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.05 }}
              className="testimonial-card"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl text-sm font-black text-[#0A0A0A]"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-white">{item.name}</h3>
                    <p className="mt-1 text-xs text-[#7F8794]">{item.role}</p>
                  </div>
                </div>
                <Quote className="h-5 w-5 flex-none text-[#C9F31D]" />
              </div>

              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex text-[#FACC15]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#697080]">{item.year}</span>
              </div>

              <p className="text-sm font-black text-[#C9F31D]">{item.project}</p>
              <p className="mt-4 line-clamp-5 text-sm leading-7 text-[#A0A0A0]">"{item.quote}"</p>

              <div className="mt-6 inline-flex rounded-full border border-[rgba(201,243,29,0.18)] bg-[rgba(201,243,29,0.07)] px-3 py-1 text-xs font-black text-[#C9F31D]">
                {item.source}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
