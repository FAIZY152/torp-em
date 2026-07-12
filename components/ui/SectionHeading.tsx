"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={cn("mb-12", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}
    >
      {eyebrow ? (
        <div className="portfolio-badge mb-4 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-4xl font-black leading-tight text-foreground md:text-5xl">
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-8 text-muted-foreground md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
