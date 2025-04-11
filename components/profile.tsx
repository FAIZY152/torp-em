"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export function Profile() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-center md:text-left">
        <div className="mb-6 inline-block rounded-full border-4 border-cyan-400 p-1">
          <Image
            width={128}
            height={128}
            src="/profile.jpg"
            alt="Profile"
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="mb-2 text-4xl font-bold">Muhammad Fayaz</h1>{" "}
        <h2 className="mb-4 text-xl text-cyan-400">
          Full Stack Developer | MERN & Next.js Specialist
        </h2>
        <p className="mb-6 text-gray-300">
          Hi, I'm Muhammad Fayaz, a skilled Full Stack Developer with expertise
          in the MERN stack and Next.js. I specialize in building scalable,
          high-performance web applications and delivering user-centric
          solutions. My experience includes working on real-world projects,
          writing efficient test cases to ensure application quality, and
          deploying secure, production-ready systems. With a strong foundation
          in modern development practices, I strive to bridge the gap between
          functionality and design to create seamless digital experiences.{" "}
        </p>
        <div className="mb-6 flex justify-center md:justify-start gap-4">
          <Button variant="outline" size="icon" className="bg-cyan-400">
            <FaWhatsapp className="h-5 w-5 text-white" />
          </Button>

          <Link
            href="https://www.linkedin.com/in/faizy-bangash-6a9852340/"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-cyan-400">
              <FaLinkedin className="h-5 w-5 text-white" />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            className="bg-cyan-400 hover:bg-cyan-500"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume-f.pdf";
              link.setAttribute("download", "My_Resume.pdf");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>
            Download CV
          </Button>

          <a href="mailto:developer15246@gmail.com" target="_blank">
            <Button variant="outline" className="text-gray-800 mt-1">
              Email me
            </Button>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
        {[
          {
            period: "Nov - 2024 - March - 2025",
            title:
              "Full Stack Developer - Intern: Uk Institute of Computer Science",
            description:
              "My first internship where I gained hands-on experience as a full stack developer. I learned a lot about building scalable web applications, collaborating with teams, and applying modern development practices Worked as a junior Developer on microservices-based projects work with TDD approach write Test cases for each action use Redis for Caching Dockerize Each Service make sure its worked on Production..",
          },
          {
            period: "Parallel Project",
            title: "MERN Stack Developer - Real World Project",
            description:
              "Worked as a freelancer on microservices-based projects, focusing on building high-scalable applications using TypeScript. Developed robust test cases for every action to ensure reliability and implemented intuitive UI designs with Next.js.",
          },
        ].map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 border-l border-cyan-400">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan-400" />
            <span className="text-sm text-cyan-400">{job.period}</span>
            <h4 className="font-semibold text-white">{job.title}</h4>
            <p className="text-sm text-gray-300">{job.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
