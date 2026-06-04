"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 },
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <header
        className={`transition-all duration-500 ${
          scrolled ? "border-b border-white/5 bg-[#0A0A0A]/80 shadow-2xl shadow-black/30 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="#home" className="group flex items-center gap-3" onClick={close}>
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#C9F31D] to-[#1DB954] font-black text-[#0A0A0A] shadow-[0_0_28px_rgba(201,243,29,0.22)] transition-transform group-hover:scale-105 group-hover:rotate-3">
              {profile.logo}
            </span>
            <span className="text-sm font-bold tracking-tight text-white">
              muhammad<span className="text-[#C9F31D]">fayaz</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  active === item.href ? "text-white" : "text-[#A0A0A0] hover:text-white"
                }`}
              >
                {item.label}
                {active === item.href ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#C9F31D]"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Theme accent"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/5 bg-white/[0.04] text-[#C9F31D]"
            >
              <Moon className="h-5 w-5" />
            </button>
            <Link
              href="#contact"
              className="hidden rounded-xl bg-[#C9F31D] px-5 py-2.5 text-sm font-black text-[#0A0A0A] shadow-[0_12px_36px_rgba(201,243,29,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1DB954] md:inline-flex"
            >
              Hire Me
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/5 bg-white/[0.04] text-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mt-2 rounded-2xl border border-white/10 bg-[#111111]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex rounded-xl px-4 py-3 text-sm font-bold text-[#F5F5F5] hover:bg-[rgba(201,243,29,0.08)] hover:text-[#C9F31D]"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
