"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, LockKeyhole, Puzzle } from "lucide-react";
import { architectureHighlights, projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative h-72 overflow-hidden border-b border-border bg-muted/30 sm:h-96">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="absolute -right-16 -top-28 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: `${project.preview.accent}24` }}
      />
      <div
        className="absolute -bottom-32 left-8 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${project.preview.accent}14` }}
      />

      <motion.div
        className="absolute inset-x-4 bottom-5 top-5 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_28px_90px_rgba(10,15,10,0.18)] ring-1 ring-white/50 dark:shadow-[0_28px_90px_rgba(0,0,0,0.55)] dark:ring-white/5 sm:inset-x-8"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 170, damping: 18 }}
      >
        <div className="flex items-center justify-between border-b border-border bg-foreground px-4 py-3 text-background dark:bg-[#10130F] dark:text-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
            <ExternalLink className="h-3 w-3" />
            Product shot
          </span>
        </div>

        <div className="relative h-[calc(100%-49px)] overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="absolute inset-3 overflow-hidden rounded-xl border border-border bg-background shadow-[0_18px_60px_rgba(10,15,10,0.14)] dark:bg-[#080A08] dark:shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_42%,rgba(255,255,255,0.28)_50%,transparent_58%,transparent_100%)] opacity-50 mix-blend-soft-light" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent dark:from-[#090B0D] dark:via-[#090B0D]/80" />
          <div className="absolute left-4 top-4 rounded-full border border-background/70 bg-background/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-foreground shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#10130F]/90 dark:text-primary">
            {project.preview.type}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-foreground/68">{project.preview.eyebrow}</p>
              <p className="mt-1 text-lg font-black text-foreground">{project.preview.metric}</p>
            </div>
            <span
              className="portfolio-badge px-3 py-1.5 text-xs font-black backdrop-blur"
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
    <section id="projects" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Portfolio"
          title="Real Product"
          accent="Case Studies"
          description="Live SaaS products, architecture decisions, and private company work pulled from your resume and email summary."
        />

        <motion.div
          initial={false}
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
                className="rounded-2xl border border-[rgba(201,243,29,0.14)] bg-card p-5"
              >
                <div className="portfolio-icon-badge mb-4 h-11 w-11 rounded-2xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-black text-foreground">{item.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-2 hover:border-[rgba(201,243,29,0.3)] hover:shadow-[0_24px_80px_rgba(201,243,29,0.08)]"
            >
              <ProjectPreview project={project} />
              <div className="p-6">
                <h3 className="text-2xl font-black text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#1DB954]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="portfolio-badge px-3 py-1 text-xs font-bold">
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
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-black text-primary-foreground transition hover:-translate-y-0.5 hover:bg-accent"
                    >
                      Live Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-bold text-muted-foreground"
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
                    className={`inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-bold transition ${
                      project.sourceLabel
                        ? "cursor-default text-muted-foreground"
                        : "text-foreground hover:border-[rgba(201,243,29,0.35)] hover:text-primary"
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
