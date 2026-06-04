"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Advantage"
          title="Skill Stack"
          accent="Built For SaaS"
          description="All skills are grouped from the uploaded resume and shaped into a premium dashboard-style grid."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[#161616] p-6"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[rgba(201,243,29,0.09)] text-[#C9F31D]">
                    <GroupIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-black text-white">{group.title}</h3>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, y: 18 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
                        }}
                        className="group rounded-2xl border border-white/10 bg-[#101214] p-4 transition hover:-translate-y-1 hover:border-[rgba(201,243,29,0.3)] hover:shadow-[0_18px_50px_rgba(201,243,29,0.06)]"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[rgba(201,243,29,0.08)] text-[#C9F31D]">
                              {Icon ? <Icon className="h-5 w-5" /> : <span className="text-xs font-black">{skill.name.slice(0, 2)}</span>}
                            </div>
                            <span className="truncate text-sm font-black text-white">{skill.name}</span>
                          </div>
                          <span className="text-xs font-black text-[#C9F31D]">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-[#C9F31D] to-[#1DB954]"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
