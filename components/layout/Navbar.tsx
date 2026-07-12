"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

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
  const [firstName, ...restName] = profile.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <header
        className={`transition-all duration-500 ${
          scrolled ? "border-b border-border/70 bg-background/80 shadow-2xl shadow-black/30 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="#home" className="group flex min-w-0 items-center gap-3" aria-label={`${profile.name} home`} onClick={close}>
            <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full">
              <span className="absolute inset-0 rounded-full bg-primary/25 blur-md transition-opacity group-hover:opacity-90" />
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/45 bg-black shadow-[0_0_28px_rgba(201,243,29,0.18)] transition duration-300 group-hover:scale-105 group-hover:border-primary">
                <Image src="/favicon.jpeg" alt={`${profile.name} logo`} fill priority sizes="40px" className="object-cover" />
              </span>
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate text-[13px] font-black uppercase tracking-[0.16em] text-foreground transition-colors group-hover:text-foreground">
                {firstName}
              </span>
              <span className="mt-1 block truncate text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                {lastName}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  active === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active === item.href ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-primary-foreground shadow-[0_12px_36px_rgba(201,243,29,0.22)] transition hover:-translate-y-0.5 hover:bg-accent md:inline-flex"
            >
              Hire Me
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border/70 bg-muted text-foreground lg:hidden"
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
            className="mx-4 mt-2 rounded-2xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex rounded-xl px-4 py-3 text-sm font-bold text-foreground hover:bg-primary/10 hover:text-primary"
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
