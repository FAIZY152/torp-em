"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaRobot,
  FaSocks,
} from "react-icons/fa6";
import {
  SiAdobephotoshop,
  SiAntdesign,
  SiChainlink,
  SiGithubactions,
  SiGraphql,
  SiMongodb,
  SiNetlify,
  SiOpenai,
  SiPrisma,
  SiRabbitmq,
  SiRailway,
  SiReduxsaga,
  SiTypeorm,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs, FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiLockPasswordLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandLaravel, TbBrandPython } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { GiReactor } from "react-icons/gi";
import { FaDocker } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrMysql, GrTest } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { SiSocketdotio } from "react-icons/si";
import { DiRedis } from "react-icons/di";

const skillCategories = {
  "Front-End": [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: IoLogoCss3 },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: FaReact },
    { name: "Redux Toolkit", icon: SiReduxsaga },
    { name: "Zustand", icon: GiReactor },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Ant Design", icon: SiAntdesign },
  ],
  "Back-End": [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Next.js (API Routes)", icon: SiNextdotjs },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Python (FastAPI)", icon: TbBrandPython },
    { name: "Laravel (Beginner)", icon: FaPhp },
    { name: "Docker", icon: VscAzureDevops },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: FaDatabase },
    { name: "MySQL", icon: GrMysql },
    { name: "Redis", icon: DiRedis },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: "Prisma ORM", icon: SiPrisma },
    { name: "TypeORM", icon: SiTypeorm },
    { name: "Socket.io", icon: SiSocketdotio },
    { name: "JWT & Passport.js", icon: RiLockPasswordLine },
  ],
  "AI & Tools": [
    { name: "OpenAI / GPT-4", icon: SiOpenai },
    { name: "LangChain.js", icon: SiChainlink },
    { name: "Chatbot Integration", icon: FaRobot },
  ],
  DevOps: [
    { name: "Git & GitHub", icon: FaGithub },
    { name: "CI/CD", icon: SiGithubactions },
    { name: "Docker", icon: VscAzureDevops },
    { name: "AWS (Beginner)", icon: FaAws },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "Railway", icon: SiRailway },
  ],
  "Other Tools": [
    { name: "Figma", icon: IoLogoFigma },
    { name: "Photoshop", icon: SiAdobephotoshop },
    { name: "Jest & Vitest", icon: GrTest },
    { name: "Postman", icon: SiPostman },
  ],
};
// hello bro
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
