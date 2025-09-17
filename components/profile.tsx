"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
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
          Full-Stack MERN & Next.js Developer | React Native | AI Integration in web apps
        </h2>
        <p className="mb-6 text-gray-300">
           I'm a passionate Full-Stack Developer with hands-on experience in building scalable web and mobile applications using the MERN stack, Next.js, and React Native. I have strong knowledge of both SQL and NoSQL databases, real-time tools like Socket.io, Redis, and Kafka, and experience working with Docker, GraphQL, Prisma, and microservices.

During my internship at the UK Institute of IT in Peshawar, I worked on real-world projects, contributed to both monolithic and microservices-based systems, wrote test cases, and integrated OpenAI APIs into full-stack applications. I’ve also built and deployed two major projects: an AI SaaS platform and a FoodPanda clone, both using modern tools and best practices.

I’m always eager to learn, build, and solve problems using clean and efficient code. I’m ready to bring value to any team looking for a dedicated and skilled developer.

        </p>
   <div className="mb-6 flex justify-center md:justify-start gap-4">
  {/* WhatsApp */}
  <Button variant="outline" size="icon" className="bg-cyan-400">
    <FaWhatsapp className="h-5 w-5 text-white" />
  </Button>

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/in/faizy-bangash-6a9852340/"
    target="_blank"
    rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="bg-cyan-400">
      <FaLinkedin className="h-5 w-5 text-white" />
    </Button>
  </Link>

  {/* GitHub */}
  <Link
    href="https://github.com/FAIZY152"
    target="_blank"
    rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="bg-cyan-400">
      <FaGithub className="h-5 w-5 text-white" />
    </Button>
  </Link>
</div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            className="bg-cyan-400 hover:bg-cyan-500"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/real-resum-templ.pdf";
              link.setAttribute("download", "My_Resume.pdf");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>
            Download CV
          </Button>

          <a 
  href="mailto:developer15246@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button variant="outline" className="text-gray-800 mt-1 md:mt-0">
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
            
            title:
              "Full Stack Developer - Remote Internship -  Mentoga ",
            description:
              `Mentoga offer self-paced learning Remote Internship where They provide five tasks for newly graduated fashion design students, each requiring approximately 40 hours of work, with mock data included where necessary. The tasks focus on building practical skills, portfolio development, and industry-relevant experience.
              I build :
      Build a Blog Platform with Content Management 
Create an E-Commerce Product Listing Page 
Develop a Task Management Dashboard with Authentication 
Create a Weather Forecast Web App`
          },
          {
            period: "",
            title: "MERN Stack Developer - UK Institute Of Computer Science - SH",
            description:
              `During my Second internship + job  at the UK Institute of IT in Peshawar, I worked on real-world 
projects, contributed to both monolithic and microservices-based systems, wrote test cases, 
and integrated OpenAI APIs into full-stack applications. I’ve also built and deployed two major 
projects: an AI SaaS platform and a FoodPanda clone, both using modern tools and best 
practices. 
Worked as a junior Developer on monolithic and  microservices based projects   
write Test cases for each action   
Use  Graph Ql, Open APis , Redis, Kafka  
Build Full stack apps in Mern sack  
Dockerize Each Service make sure its worked on Production   
Integration Each service in React`
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
