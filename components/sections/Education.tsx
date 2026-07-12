"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Learning With"
          accent="Practical Work"
          description="Education and certification details are taken from the resume PDF."
        />

        <div className="mx-auto grid max-w-4xl gap-5">
          {education.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-border bg-card p-6 sm:flex sm:items-start sm:gap-6"
              >
                <div className="portfolio-icon-badge mb-5 h-14 w-14 flex-none rounded-2xl sm:mb-0">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="portfolio-badge mb-2 px-3 py-1 text-xs font-black">
                    {item.range}
                  </div>
                  <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                  <p className="mt-1 font-bold text-accent">{item.institution}</p>
                  <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
