"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, CheckCircle2, Clock3, Github, LockKeyhole, ShieldCheck, Users } from "lucide-react";
import { architectureHighlights, projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectPreview({ project }: { project: Project }) {
  const rows = project.preview.type === "workflow" ? ["Draft", "Sent", "Submitted", "Recorded"] : ["API", "Auth", "Data", "Deploy"];
  const cards =
    project.preview.type === "commerce"
      ? ["Orders", "Menu", "Delivery"]
      : project.preview.type === "ai"
        ? ["Chat", "Code", "Image"]
        : project.preview.type === "legacy"
          ? ["Goals", "Docs", "Stories"]
          : ["Team", "Activity", "Reports"];

  return (
    <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#090B0D] sm:h-72">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute -right-16 -top-24 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${project.preview.accent}26` }}
      />
      <div className="absolute left-5 top-5 z-20 inline-flex rounded-full border border-white/10 bg-[#0A0A0A]/80 px-3 py-1.5 text-xs font-black text-white backdrop-blur">
        {project.category}
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 w-[92%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-white/10 bg-[#111418]/95 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.5)] sm:w-[82%] sm:p-4"
        whileHover={{ rotateX: 3, rotateY: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 170, damping: 18 }}
      >
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#8F98A8]">
            Live build
          </span>
        </div>

        <div className="grid grid-cols-[0.9fr_1.2fr] gap-2 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-3 sm:p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#8F98A8]">{project.preview.eyebrow}</p>
            <h4 className="mt-2 text-base font-black text-white sm:text-xl">{project.preview.metric}</h4>
            <div className="mt-4 space-y-2 sm:mt-5">
              {rows.map((row, index) => (
                <div key={row} className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2">
                  <span className="grid h-6 w-6 place-items-center rounded-lg" style={{ backgroundColor: `${project.preview.accent}1F` }}>
                    <CheckCircle2 className="h-3.5 w-3.5" style={{ color: project.preview.accent }} />
                  </span>
                  <span className="truncate text-xs font-bold text-[#D8DEE9]">{row}</span>
                  <span className="ml-auto text-[10px] text-[#697080]">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {cards.map((card, index) => (
                <div key={card} className="rounded-2xl border border-white/10 bg-white/[0.035] p-2 sm:p-3">
                  <div className="mb-3 grid h-8 w-8 place-items-center rounded-xl" style={{ backgroundColor: `${project.preview.accent}1A` }}>
                    {index === 0 ? (
                      <Users className="h-4 w-4" style={{ color: project.preview.accent }} />
                    ) : index === 1 ? (
                      <Clock3 className="h-4 w-4" style={{ color: project.preview.accent }} />
                    ) : (
                      <Bot className="h-4 w-4" style={{ color: project.preview.accent }} />
                    )}
                  </div>
                  <p className="truncate text-[11px] font-black text-white">{card}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full" style={{ width: `${58 + index * 14}%`, backgroundColor: project.preview.accent }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-white">{project.title}</p>
                  <p className="text-[10px] text-[#697080]">System overview</p>
                </div>
                <ShieldCheck className="h-5 w-5" style={{ color: project.preview.accent }} />
              </div>
              <div className="grid grid-cols-5 items-end gap-2">
                {[42, 68, 50, 82, 74].map((height, index) => (
                  <span
                    key={height}
                    className="rounded-t-lg bg-white/10"
                    style={{
                      height: `${height}px`,
                      background: index === 3 ? project.preview.accent : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
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
                <div className="mt-7 flex gap-3">
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
