"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Certified"
          accent="Full Stack"
          description="Certification badges use the resume as the only source of truth."
        />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-accent/5 p-6"
            >
              <span className="portfolio-icon-badge mb-5 h-12 w-12 rounded-2xl">
                <Award className="h-6 w-6" />
              </span>
              <div className="portfolio-badge mb-2 px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">{cert.range}</div>
              <h3 className="text-2xl font-black text-foreground">{cert.title}</h3>
              <p className="mt-1 font-bold text-primary">{cert.issuer}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{cert.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
