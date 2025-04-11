"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLa7DbCvPDiKVFhnqn98ewPRxPivzgJPzDg&s",
    title: "Food Panda",
    description:
      "A Food Panda web app with CRUD functionality for restaurants, menus, and orders. Includes advanced search by country, city, and restaurant name, making it practical for real-world use.",
    techStack: [
      "MERN Stack",
      "TypeScript",
      "Zustand for state management",
      "TailwindCSS",
      "Zod for form validation",
      "Testing with Vitest",
    ],
    features: [
      "User & Admin authentication",
      "Real-time order tracking",
      "Restaurant dashboard ",
      "Food panda like features",
    ],
    liveLink: "https://foodpandalike.vercel.app",
    githubLink: "https://github.com/FAIZY152/my-app-1",
  },
  {
    image:
      "https://ideausher.com/wp-content/uploads/2023/05/Integrating-AI-with-Existing-SaaS-1024x576.webp",
    title: "Ai Saas App",
    description:
      "An AI-powered SaaS app Using open-source APIs like Google Gemini, Pollination AI, and background remover APIs. It includes an AI chatbot, image generation, code generation, automated code review, and background removal for enhanced productivity and creativity.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "Zustand",
      "OpenAI APIs",
      "Gemini APIs",
    ],
    features: [
      "Real-time Ai Assistant",
      "Image Generation",
      "Code Generation",
      "Automated Code Review",
      "Background Removal",
    ],
    liveLink: "https://assass.vercel.app",
    githubLink: "https://github.com/FAIZY152/my-app-2",
  },
];

export function Projects() {
  return (
    <div className="grid gap-8 px-4 py-8 bg-gray-900 text-gray-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-gray-100">
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}>
            <Card className="h-full border border-cyan-400 bg-gray-800">
              <CardHeader className="p-4">
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={
                      project.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9F-bf31CHu8DzAkHAa2_ET3pv4UuMKj0A1A&s"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-700 text-cyan-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-4 flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-gray-900 font-bold px-4 py-2 rounded hover:bg-cyan-300 transition">
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-cyan-400 font-bold px-4 py-2 rounded hover:bg-gray-600 transition">
                  GitHub Code
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
