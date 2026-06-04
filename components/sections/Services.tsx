"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Popular Services"
          title="Services That"
          accent="Drive Results"
          description="From idea to production, these are the service areas directly supported by my resume experience."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 34 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="group rounded-2xl border border-white/10 bg-[#161616] p-6 transition hover:-translate-y-2 hover:border-[rgba(201,243,29,0.32)] hover:shadow-[0_24px_70px_rgba(201,243,29,0.08)]"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[rgba(201,243,29,0.09)] text-[#C9F31D]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-black text-white">{service.title}</h3>
                <p className="mb-6 text-sm leading-7 text-[#A0A0A0]">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(201,243,29,0.22)] bg-[rgba(201,243,29,0.07)] px-3 py-1 text-xs font-bold text-[#C9F31D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
