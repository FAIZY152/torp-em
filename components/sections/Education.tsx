"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="bg-[#0D0D0D] py-16 md:py-24">
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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-[#161616] p-6 sm:flex sm:items-start sm:gap-6"
              >
                <div className="mb-5 grid h-14 w-14 flex-none place-items-center rounded-2xl bg-[rgba(201,243,29,0.09)] text-[#C9F31D] sm:mb-0">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="mb-2 inline-flex rounded-full border border-[rgba(201,243,29,0.22)] bg-[rgba(201,243,29,0.07)] px-3 py-1 text-xs font-black text-[#C9F31D]">
                    {item.range}
                  </div>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-1 font-bold text-[#1DB954]">{item.institution}</p>
                  <p className="mt-4 leading-7 text-[#A0A0A0]">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
