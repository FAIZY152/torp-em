"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, LockKeyhole, Puzzle } from "lucide-react";
import { architectureHighlights, projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#090B0D] sm:h-80">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute -right-20 -top-28 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${project.preview.accent}26` }}
      />

      <motion.div
        className="absolute inset-x-4 bottom-5 top-5 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#111418] shadow-[0_28px_90px_rgba(0,0,0,0.55)] sm:inset-x-8"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 170, damping: 18 }}
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0A0A0A]/88 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#8F98A8]">
            <ExternalLink className="h-3 w-3" />
            Product shot
          </span>
        </div>

        <div className="relative h-[calc(100%-49px)] overflow-hidden bg-[#0D0F12] p-2">
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            sizes="(min-width: 1024px) 560px, 92vw"
            className="object-contain object-top transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090B0D]/55 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/68">{project.preview.eyebrow}</p>
              <p className="mt-1 text-lg font-black text-white">{project.preview.metric}</p>
            </div>
            <span
              className="rounded-full border border-white/10 bg-[#0A0A0A]/80 px-3 py-1.5 text-xs font-black text-white backdrop-blur"
              style={{ boxShadow: `0 0 28px ${project.preview.accent}24` }}
            >
              {project.category}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Portfolio"
          title="Real Product"
          accent="Case Studies"
          description="Live SaaS products, architecture decisions, and private company work pulled from your resume and email summary."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {architectureHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="rounded-2xl border border-[rgba(201,243,29,0.14)] bg-[#101214] p-5"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[rgba(201,243,29,0.09)] text-[#C9F31D]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-black text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-[#8F98A8]">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>

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
              <ProjectPreview project={project} />
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
<div className="mt-7 flex flex-wrap gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#C9F31D] px-4 py-2 text-sm font-black text-[#0A0A0A] transition hover:-translate-y-0.5 hover:bg-[#1DB954]"
                    >
                      Live Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-[#7F8794]"
                      title="Resume lists project links but does not include the URL"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Live Link
                    </button>
                  )}
                  {project.extensionUrl ? (
                    <a
                      href={project.extensionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-4 py-2 text-sm font-bold text-[#38BDF8] transition hover:-translate-y-0.5 hover:bg-[#38BDF8]/20"
                    >
                      Chrome Extension
                      <Puzzle className="h-4 w-4" />
                    </a>
                  ) : null}
                  <a
                    href="https://github.com/FAIZY152"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold transition ${
                      project.sourceLabel
                        ? "cursor-default text-[#7F8794]"
                        : "text-white hover:border-[rgba(201,243,29,0.35)] hover:text-[#C9F31D]"
                    }`}
                    title={project.sourceLabel ?? "GitHub profile shared in email"}
                    onClick={(event) => {
                      if (project.sourceLabel) event.preventDefault();
                    }}
                  >
                    {project.sourceLabel ? <LockKeyhole className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                    {project.sourceLabel ?? "GitHub"}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
