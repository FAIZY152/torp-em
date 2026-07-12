"use client";

import { motion } from "framer-motion";
import { advantages, profile, skillGroups, stats } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";

export function About() {
  const coreSkills = skillGroups.flatMap((group) => group.skills).slice(0, 6);

  return (
    <section id="about" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[rgba(201,243,29,0.05)] blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Me"
          title="Why Clients"
          accent="Choose Me"
          description="I don't just build screens. I build complete products with architecture, cloud deployment, AI workflows, testing, and production polish."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <motion.article
                  key={advantage.title}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                  }}
                  className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-[rgba(201,243,29,0.3)] hover:shadow-[0_20px_60px_rgba(201,243,29,0.06)]"
                >
                  <div className="portfolio-icon-badge mb-5 h-12 w-12 rounded-2xl transition group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-black text-foreground">{advantage.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{advantage.description}</p>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="space-y-7">
            <div>
              <h3 className="mb-4 text-2xl font-black text-foreground">Core Expertise</h3>
              <p className="mb-7 text-base leading-8 text-muted-foreground">{profile.detailedBio}</p>
              <div className="space-y-5">
                {coreSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={false}
                        whileInView={{ width: `${skill.level}%` }}
                        style={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[#C9F31D] to-[#1DB954]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(201,243,29,0.18)] bg-gradient-to-br from-[rgba(201,243,29,0.08)] to-[rgba(29,185,84,0.04)] p-7">
              <div className="grid gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl font-black text-primary">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
