"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactItems, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0D0D0D] py-16 md:py-24">
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[rgba(201,243,29,0.06)] blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact Me"
          title="Let’s Build"
          accent="Your Next Product"
          description="For work, collaboration, SaaS platforms, AI integrations, or deployment help, reach out directly."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#161616] p-6"
          >
            <h3 className="mb-4 text-2xl font-black text-white">Contact Details</h3>
            <p className="mb-8 leading-8 text-[#A0A0A0]">{profile.detailedBio}</p>
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101214] p-4 transition hover:border-[rgba(201,243,29,0.28)]">
                    <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-[rgba(201,243,29,0.09)] text-[#C9F31D]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-black uppercase tracking-[0.14em] text-[#7F8794]">{item.label}</div>
                      <div className="truncate text-sm font-bold text-white">{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label} title="Resume says LINK but does not include the actual URL">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#161616] p-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-bold text-white">Name</span>
                <input
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#0A0A0A] px-4 text-white outline-none transition placeholder:text-[#555555] focus:border-[#C9F31D]"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-white">Email</span>
                <input
                  type="email"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#0A0A0A] px-4 text-white outline-none transition placeholder:text-[#555555] focus:border-[#C9F31D]"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block space-y-2">
              <span className="text-sm font-bold text-white">Message</span>
              <textarea
                className="min-h-44 w-full resize-none rounded-2xl border border-white/10 bg-[#0A0A0A] p-4 text-white outline-none transition placeholder:text-[#555555] focus:border-[#C9F31D]"
                placeholder="Tell me about the product, workflow, or AI feature you want to build..."
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C9F31D] px-6 py-3.5 text-sm font-black text-[#0A0A0A] shadow-[0_16px_44px_rgba(201,243,29,0.2)] transition hover:-translate-y-0.5 hover:bg-[#1DB954]"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
            <p className="mt-4 text-xs leading-6 text-[#7F8794]">
              This visual form is ready for a backend or form provider integration. Direct email is available on the left.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
