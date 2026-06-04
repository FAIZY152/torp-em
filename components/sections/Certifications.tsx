"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="bg-[#0A0A0A] py-16 md:py-24">
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-[rgba(201,243,29,0.18)] bg-gradient-to-br from-[#161616] to-[rgba(29,185,84,0.04)] p-6"
            >
              <Award className="mb-5 h-9 w-9 text-[#C9F31D]" />
              <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#1DB954]">{cert.range}</div>
              <h3 className="text-2xl font-black text-white">{cert.title}</h3>
              <p className="mt-1 font-bold text-[#C9F31D]">{cert.issuer}</p>
              <p className="mt-4 text-sm leading-7 text-[#A0A0A0]">{cert.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
