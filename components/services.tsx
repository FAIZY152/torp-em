"use client";

import { motion } from "framer-motion";
import {
  Code,
  Paintbrush,
  Webhook,
  Computer,
  Database,
  GitBranch,
  Box,
  Server,
  Globe,
  Layers,
  Cpu,
  Bot,
  BrainCircuit,
  Workflow,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaLaravel,
  FaVuejs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiPrisma,
  SiTailwindcss,
  SiGithubactions,
} from "react-icons/si";

// Map skills to icons
const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-cyan-400" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-cyan-400" />,
  TypeScript: <SiTypescript className="text-cyan-400" />,
  Node: <FaNodeJs className="text-green-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  GraphQL: <SiGraphql className="text-pink-500" />,
  Prisma: <SiPrisma className="text-sky-400" />,
  Docker: <FaDocker className="text-blue-500" />,
  GitHub: <FaGithub className="text-gray-300" />,
  Git: <GitBranch className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  AWS: <FaAws className="text-yellow-400" />,
  Laravel: <FaLaravel className="text-red-500" />,
  Vue: <FaVuejs className="text-green-500" />,
  "Vue.js": <FaVuejs className="text-green-500" />,
  "GitHub Actions": <SiGithubactions className="text-blue-400" />,
  CICD: <Workflow className="text-purple-400" />,
  Server: <Server className="text-gray-400" />,
  DB: <Database className="text-gray-400" />,
  CPU: <Cpu className="text-gray-400" />,
  Box: <Box className="text-gray-400" />,
  Layers: <Layers className="text-gray-400" />,
  Web: <Globe className="text-gray-400" />,
  LLM: <BrainCircuit className="text-pink-400" />,
  "Agentic AI": <Cpu className="text-indigo-400" />,
  RAG: <Layers className="text-orange-400" />,
  "Vector DB": <Database className="text-teal-400" />,
  "Chatbot Integration": <Bot className="text-green-400" />,
};

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    skills: [
      "MERN Stack",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Prisma",
      "Docker",
      "GitHub",
    ],
  },
  {
    icon: Computer,
    title: "Front End Development",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind", "Vue.js"],
  },
  {
    icon: Webhook,
    title: "Back End Development",
    skills: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Laravel",
    ],
  },
  {
    icon: Paintbrush,
    title: "Other Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "AWS", "GitHub Actions", "CICD"],
  },
  {
    icon: BrainCircuit,
    title: "Gen AI",
    skills: ["LLM", "Agentic AI", "RAG", "Vector DB", "Chatbot Integration"],
  },
];

export function Services() {
  return (
    <div className="grid gap-8 px-4 py-8 bg-gray-900 text-gray-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-gray-100">
        My Services
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border border-cyan-400 p-6 bg-gray-800 text-gray-100">
            <service.icon className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-xl tracking-wider font-semibold mb-4">
              {service.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-700 rounded-xl px-3 py-1 text-sm font-medium">
                  {techIcons[skill] || (
                    <span className="text-gray-400">⚙️</span>
                  )}
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
