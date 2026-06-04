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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={cn("mb-12", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}
    >
      {eyebrow ? (
        <div className="mb-4 inline-flex rounded-full border border-[rgba(201,243,29,0.22)] bg-[rgba(201,243,29,0.08)] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#C9F31D]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-4xl font-black leading-tight text-[#F5F5F5] md:text-5xl">
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-8 text-[#A0A0A0] md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
