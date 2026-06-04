"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { pricingPlans } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#0D0D0D] py-16 md:py-24">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[rgba(201,243,29,0.08)] blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent"
          accent="Packages"
          description="Medium-cost starting points for serious web apps, AI integrations, cloud deployments, and focused improvement sprints."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.article
                key={plan.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className={`relative flex min-h-[560px] flex-col rounded-3xl border p-6 transition hover:-translate-y-2 ${
                  plan.featured
                    ? "border-[rgba(201,243,29,0.46)] bg-[linear-gradient(180deg,rgba(201,243,29,0.08),rgba(17,20,24,0.96))] shadow-[0_26px_90px_rgba(201,243,29,0.12)]"
                    : "border-white/10 bg-[#111418]"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute right-5 top-5 rounded-full bg-[#C9F31D] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#0A0A0A]">
                    Best value
                  </span>
                ) : null}

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(201,243,29,0.09)] text-[#C9F31D]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#C9F31D]">{plan.label}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{plan.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#8F98A8]">{plan.description}</p>

                <div className="mt-7">
                  <span className="align-top text-sm font-bold text-[#8F98A8]">$</span>
                  <span className="text-5xl font-black tracking-tight text-white">{plan.price}</span>
                  <p className="mt-2 text-xs font-bold text-[#697080]">Starting price · {plan.duration}</p>
                </div>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-[#A0A0A0]">
                      <Check className="mt-1 h-4 w-4 flex-none text-[#C9F31D]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C9F31D] px-5 py-3 text-sm font-black text-[#0A0A0A] transition hover:-translate-y-0.5 hover:bg-[#1DB954]"
                >
                  <Zap className="h-4 w-4" />
                  Get Started
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
