"use client";

import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa6";
import { SiReduxsaga, SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs, FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandLaravel } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { GiReactor } from "react-icons/gi";
import { FaDocker } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const skillCategories = {
  "Front-End": [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: IoLogoCss3 },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind", icon: RiTailwindCssFill },
    { name: "JS", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Redux toolkit", icon: SiReduxsaga },
    { name: "Zustand", icon: GiReactor },
    { name: "Next js", icon: SiNextdotjs },
  ],
  "Back-End": [
    { name: "Express", icon: SiExpress },
    { name: "PHP Laravel(Starter)", icon: TbBrandLaravel },
    { name: "Next js", icon: SiNextdotjs },
    { name: "Docker CI/CD AWS (Starter)", icon: VscAzureDevops },
    { name: "SQL & No SQL", icon: FaDatabase },
  ],
  Other: [
    { name: "Figma", icon: IoLogoFigma },
    { name: "Git & Git Hub", icon: FaGithub },
    { name: "Jest & Vitest", icon: GrTest },
    { name: "Postman", icon: SiPostman },
  ],
};

export function Skills() {
  return (
    <div className="grid gap-8 px-4 py-8 md:py-5 bg-gray-900 text-gray-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center text-gray-100">
        My Skills
      </motion.h2>
      <div className="grid gap-12">
        {Object.entries(skillCategories).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-100">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-cyan-400 p-2 bg-gray-800 text-cyan-400 text-center font-medium text-sm sm:text-base space-y-1">
                    <skill.icon className="h-5 w-5" /> {/* Skill Icon */}
                    <span>{skill.name}</span> {/* Skill Name */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
