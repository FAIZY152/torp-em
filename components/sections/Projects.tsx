"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Portfolio"
          title="Selected Resume"
          accent="Projects"
          description="Project cards are based only on the projects listed in the resume PDF."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#161616] transition hover:-translate-y-2 hover:border-[rgba(201,243,29,0.3)] hover:shadow-[0_24px_80px_rgba(201,243,29,0.08)]"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[#101214]">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute inset-8 rounded-3xl border border-[rgba(201,243,29,0.18)] bg-gradient-to-br from-[rgba(201,243,29,0.14)] to-[rgba(29,185,84,0.05)] p-6 transition duration-500 group-hover:scale-[1.03]">
                  <div className="mb-5 inline-flex rounded-full bg-[#0A0A0A]/80 px-3 py-1 text-xs font-black text-[#C9F31D]">
                    {project.category}
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-white/20" />
                    <div className="h-3 w-1/2 rounded-full bg-white/12" />
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      <div className="h-16 rounded-2xl bg-[#0A0A0A]/70" />
                      <div className="h-16 rounded-2xl bg-[#0A0A0A]/70" />
                      <div className="h-16 rounded-2xl bg-[#0A0A0A]/70" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#A0A0A0]">{project.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#8F98A8]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#1DB954]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-[#C9F31D]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-[#7F8794]"
                    title="Resume lists GitHub as LINK but does not include the URL"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </button>
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-[#7F8794]"
                    title="Resume lists project links but does not include the URL"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live Link
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
