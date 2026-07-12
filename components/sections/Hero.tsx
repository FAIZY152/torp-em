"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CalendarDays, Star } from "lucide-react";
import { floatingSkills, profile, stats } from "@/data/portfolio";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingBadge } from "@/components/ui/FloatingBadge";
import { StatCounter } from "@/components/ui/StatCounter";

const badgePositions = [
  "-right-3 top-10",
  "-left-10 top-24",
  "-right-8 bottom-28",
  "bottom-4 left-8",
  "right-20 -top-7",
  "-left-4 bottom-32",
  "left-24 -bottom-8",
  "right-4 top-1/2",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background pt-24">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute left-[5%] top-10 h-80 w-80 rounded-full bg-[rgba(201,243,29,0.07)] blur-[100px]" />
      <div className="absolute bottom-[15%] right-[10%] h-[500px] w-[500px] rounded-full bg-[rgba(29,185,84,0.06)] blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_48%,var(--hero-vignette)_100%)] opacity-75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,transparent_50%,var(--hero-vignette)_100%)] opacity-75" />

      <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] items-center gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-2">
        <motion.div variants={container} initial={false} animate="show" className="space-y-7">
          <motion.div
            variants={item}
            className="portfolio-badge max-w-full gap-2 px-4 py-2 text-sm font-bold"
          >
            <Star className="h-4 w-4 flex-none" />
            <span className="min-w-0 text-balance">{profile.eyebrow}</span>
          </motion.div>

          <div>
            <h1 className="font-display text-[2.15rem] font-black leading-[1.28] tracking-normal text-foreground sm:text-5xl sm:leading-[1.08] lg:text-6xl">
              <AnimatedText text={profile.headlineLead} />
              <span className="mt-2 block">
                <AnimatedText text={profile.headlineAccent} delay={0.15} className="text-gradient" />
              </span>
              <span className="mt-2 block text-muted-foreground">
                <AnimatedText text={profile.headlineTail} delay={0.28} />
              </span>
            </h1>
          </div>

          <motion.p variants={item} className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href={profile.meetingHref}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-black text-primary-foreground shadow-[0_16px_44px_rgba(201,243,29,0.25)] transition hover:-translate-y-0.5 hover:bg-accent sm:px-8 sm:text-base"
            >
              Schedule Meeting
              <CalendarDays className="h-4 w-4 transition group-hover:scale-110" />
            </a>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-border px-5 py-3.5 text-sm font-black text-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 sm:px-8 sm:text-base"
            >
              Contact Me
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/72 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[rgba(201,243,29,0.28)] hover:shadow-[0_0_28px_rgba(201,243,29,0.08)]"
                >
                  <span className="portfolio-icon-badge mx-auto mb-2 h-9 w-9 rounded-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-2xl font-black text-foreground">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="relative mx-auto hidden h-[520px] w-full max-w-[560px] items-center justify-center lg:flex">
          <div className="absolute h-[410px] w-[410px] rounded-full border border-[rgba(201,243,29,0.25)] shadow-[0_0_80px_rgba(201,243,29,0.12)]" />
          <div className="absolute h-[475px] w-[475px] rounded-full border border-[rgba(29,185,84,0.18)]" />
          <div className="relative h-96 w-96 overflow-hidden rounded-full border-4 border-[rgba(201,243,29,0.38)] bg-card shadow-[0_0_60px_rgba(201,243,29,0.18)]">
            <Image src={profile.imagePath} alt={`${profile.name} profile photo`} fill priority sizes="384px" className="object-cover" />
          </div>
          {floatingSkills.map((skill, index) => (
            <FloatingBadge
              key={skill.name}
              label={skill.name}
              icon={skill.icon}
              delay={index * 0.18}
              className={badgePositions[index]}
            />
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative mx-auto flex w-full max-w-sm justify-center overflow-hidden lg:hidden"
        >
          <div className="absolute top-12 h-64 w-64 rounded-full bg-[rgba(201,243,29,0.12)] blur-[80px]" />
          <div className="relative h-[430px] w-full">
            <Image src={profile.imagePath} alt={`${profile.name} profile photo`} fill priority sizes="360px" className="object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />
          </div>
        </motion.div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-border p-3 text-primary md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </Link>
    </section>
  );
}
