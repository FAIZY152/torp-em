"use client";

import { motion } from "framer-motion";
import { Code, Paintbrush, Webhook, Computer } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    skills:
      "MERN Stack, Next.js, TypeScript , SQL & NoSQL , Docker , Git & Git Hub , CI/CD , Testing , Code Review",
  },
  {
    icon: Computer,
    title: "Front End Development",
    skills:
      "JavaScript, Tailwind, Bootstrap, React.js, Redux, Next.js, Zustand, Zod , Vitest",
  },
  {
    icon: Webhook,
    title: "Back End Development",
    skills:
      "Node.js, Express.js, Laravel(Beginer), MongoDB, PostgreSQL, Redis, Socket.io, JWT, Passport.js, Docker CI/CD(Starter)",
  },
  {
    icon: Paintbrush,
    title: "Other",
    skills:
      "Figma, Photoshop , jest , Vercel, Netlify , Postman ,  Git & Git Hub ",
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
            <h3 className="text-xl tracking-wider font-semibold mb-2">
              {service.title}
            </h3>
            {/* <p className="text-gray-400 mb-4">{service.description}</p> */}
            <div className="text-lg tracking-wide  font-extrabold text-cyan-400">
              Master Skills: {service.skills}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
