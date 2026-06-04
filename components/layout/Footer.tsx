import Link from "next/link";
import { contactItems, navItems, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="container mx-auto grid gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#C9F31D] to-[#1DB954] font-black text-[#0A0A0A]">
              {profile.logo}
            </span>
            <span className="text-lg font-black text-white">{profile.name}</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#A0A0A0]">{profile.summary}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#C9F31D]">Useful Links</h3>
          <div className="grid grid-cols-2 gap-2">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-[#A0A0A0] transition hover:text-[#C9F31D]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#C9F31D]">Contact</h3>
          <div className="space-y-3">
            {contactItems.slice(0, 2).map((item) => (
              <a key={item.label} href={item.href} className="block text-sm text-[#A0A0A0] transition hover:text-[#C9F31D]">
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-5 text-center text-xs text-[#555555]">
        Copyright © 2026. Built for {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
