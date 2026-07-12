"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            end: "bottom 35%",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={rootRef} className="experience-section bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Work Experience"
          title="Experience Built"
          accent="In Production"
          description="Real roles, platforms, and architecture work pulled from the uploaded resume."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-muted md:left-1/2" />
          <div className="timeline-line absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-[#C9F31D] to-[#1DB954]  md:left-1/2" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                  index % 2 === 0 ? "md:text-right" : "md:[&>div]:col-start-2"
                }`}
              >
                <span className="absolute left-[9px] top-7 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_24px_rgba(201,243,29,0.4)] md:left-[calc(50%-7px)]" />
                <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition hover:border-[rgba(201,243,29,0.28)] hover:shadow-[0_24px_70px_rgba(201,243,29,0.07)]">
                  <div className="portfolio-badge mb-3 px-3 py-1 text-xs font-black">
                    {experience.range}
                  </div>
                  <h3 className="text-2xl font-black text-foreground ">
                    {experience.role}
                  </h3>
                  <p className=" mt-1 font-bold text-primary portfolio-icon-badge w-full rounded-2xl">
                    {experience.company} · {experience.location}
                  </p>
                  {experience.highlights ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="portfolio-badge px-3 py-1 text-xs font-black"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
