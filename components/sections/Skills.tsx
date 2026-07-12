"use client";

import { motion } from "framer-motion";
import type { SkillMarqueeItem } from "@/data/portfolio";
import { skillMarqueeRows } from "@/data/portfolio";

type SkillTileProps = {
  skill: SkillMarqueeItem;
};

function SkillTile({ skill }: SkillTileProps) {
  const Icon = skill.icon;

  return (
    <div className="skill-tile group">
      <div className="skill-tile-icon">
        {Icon ? <Icon className="h-8 w-8" /> : <span className="font-display text-base font-black">{skill.short ?? skill.name.slice(0, 2)}</span>}
      </div>
      <span className="mt-3 block max-w-[8rem] truncate text-center text-sm font-bold text-muted-foreground transition group-hover:text-foreground">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  reverse = false,
  duration = 34,
}: {
  skills: SkillMarqueeItem[];
  reverse?: boolean;
  duration?: number;
}) {
  const repeated = [...skills, ...skills, ...skills];

  return (
    <div className="skill-marquee group/row">
      <div
        className={`skill-marquee-track ${reverse ? "skill-marquee-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {repeated.map((skill, index) => (
          <SkillTile key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,243,29,0.24)] to-transparent" />
      <div className="absolute left-1/2 top-28 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1920px]">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-4xl px-4 text-center sm:px-6"
        >
          <h2 className="font-display text-4xl font-black leading-tight text-foreground md:text-5xl">
            Built With <span className="text-gradient">Modern Tools</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            A complete production stack across frontend, backend, databases, cloud, DevOps, AI integration, testing, and tooling.
          </p>
        </motion.div>

        <div className="relative py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent md:w-48" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent md:w-48" />

          <div className="space-y-5">
            {skillMarqueeRows.map((row, index) => (
              <MarqueeRow
                key={index}
                skills={row}
                reverse={index % 2 === 1}
                duration={index === 0 ? 30 : index === 1 ? 36 : index === 2 ? 42 : 34}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
