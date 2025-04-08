"use client";

import { Layout } from "@/components/layout";
import { Profile } from "@/components/profile";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { usePortfolioStore } from "@/store/use-portfolio-store";
import { Projects } from "@/components/Projects";

export default function Home() {
  const currentSlide = usePortfolioStore((state) => state.currentSlide);

  const slides = {
    1: <Profile />,
    2: <Skills />,
    3: <Projects />,
    4: <Services /> ,
    5: <Contact />,
  };

  return <Layout>{slides[currentSlide as keyof typeof slides]}</Layout>;
}
