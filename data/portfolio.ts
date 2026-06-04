import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiDocker,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: typeof Rocket;
};

export type Service = {
  title: string;
  description: string;
  icon: typeof Rocket;
  tags: string[];
};

export type Skill = {
  name: string;
  level: number;
  icon?: IconType;
};

export type SkillGroup = {
  title: string;
  icon: typeof Rocket;
  skills: Skill[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  range: string;
  linkLabel?: string;
  bullets: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  bullets: string[];
};

export const profile = {
  name: "Muhammad Fayaz",
  logo: "MF",
  eyebrow: "Full Stack Web & App | AI Integration | DevOps",
  headlineLead: "I Build SaaS",
  headlineAccent: "Platforms That Scale",
  headlineTail: "& Ship Fast",
  title: "Full-Stack Software Engineer",
  email: "developer15246@gmail.com",
  phone: "+92 3333735364",
  resumePath: "/muhammad-fayaz-resume.pdf",
  imagePath: "/profile-img.jpeg",
  summary:
    "Full-Stack Software Engineer with 4+ years of experience building and deploying production-grade web applications using the MERN Stack, Next.js, Laravel, cloud infrastructure, and AI-powered workflows.",
  detailedBio:
    "I build scalable platforms, workflow systems, AI-powered applications, and cloud-based products used by real customers. My experience covers monolithic and microservices architectures, GraphQL, Redis, RabbitMQ, Docker, AWS, authentication systems, API integrations, and OpenAI-powered features from concept through production.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Years Exp.", value: 4, suffix: "+", icon: BriefcaseBusiness },
  { label: "Core Services", value: 5, suffix: "+", icon: Workflow },
  { label: "SaaS Products", value: 5, suffix: "+", icon: Rocket },
  { label: "Tech Stack", value: 30, suffix: "+", icon: Code2 },
];

export const advantages = [
  {
    title: "Production SaaS Delivery",
    description:
      "Built scalable SaaS platforms, dashboards, workflow systems, billing, PDF signing, and agency operations used by real customers.",
    icon: Rocket,
  },
  {
    title: "Hybrid Architecture",
    description:
      "Comfortable across monoliths, microservices, and hybrid systems with distributed services, queues, caching, and secure APIs.",
    icon: Layers3,
  },
  {
    title: "AI Integration",
    description:
      "Integrated OpenAI APIs for recommendation engines, grammar refinement, auto-correction, chatbots, code tools, and image workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Managed Dockerized services and deployments across AWS Lambda, EC2, RDS, S3, SES, Vercel, Railway, and Netlify.",
    icon: Cloud,
  },
  {
    title: "Secure Systems",
    description:
      "Delivered JWT authentication, role-based access control, token refresh, private S3 signed URLs, and token-based communication.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Ownership",
    description:
      "Handled architecture, development, testing, deployment, performance optimization, and milestone delivery from concept to launch.",
    icon: Workflow,
  },
];

export const services: Service[] = [
  {
    title: "Full-Stack SaaS Development",
    description:
      "Production-grade web apps with Next.js, MERN, Laravel, dashboards, workflows, authentication, APIs, and scalable data models.",
    icon: Code2,
    tags: ["Next.js", "MERN", "Laravel", "SaaS"],
  },
  {
    title: "AI-Powered Web Apps",
    description:
      "OpenAI-powered features, chatbots, code generation, recommendation engines, content refinement, and automation workflows.",
    icon: Bot,
    tags: ["OpenAI", "LangChain", "Chatbots", "Automation"],
  },
  {
    title: "Microservices Architecture",
    description:
      "Distributed auth, catalog, order, notification, payment, queue, cache, and real-time systems with reliable communication.",
    icon: Layers3,
    tags: ["GraphQL", "Redis", "RabbitMQ", "WebSockets"],
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "Dockerized deployments, CI/CD, AWS infrastructure, serverless functions, private storage, email services, and production optimization.",
    icon: Cloud,
    tags: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", level: 96, icon: SiReact },
      { name: "Next.js", level: 95, icon: SiNextdotjs },
      { name: "Vue.js", level: 82, icon: SiVuedotjs },
      { name: "Tailwind CSS", level: 94 },
      { name: "shadcn/ui", level: 90 },
      { name: "Ant Design", level: 84 },
    ],
  },
  {
    title: "Backend",
    icon: Layers3,
    skills: [
      { name: "Nest.js", level: 92, icon: SiNestjs },
      { name: "Express.js", level: 92 },
      { name: "GraphQL", level: 90, icon: SiGraphql },
      { name: "Laravel", level: 86, icon: SiLaravel },
      { name: "PHP", level: 84 },
      { name: "Python", level: 78 },
    ],
  },
  {
    title: "Data & State",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 92, icon: SiMongodb },
      { name: "PostgreSQL", level: 88, icon: SiPostgresql },
      { name: "MySQL", level: 84 },
      { name: "Prisma ORM", level: 88, icon: SiPrisma },
      { name: "TypeORM", level: 86 },
      { name: "Redux Toolkit", level: 86 },
      { name: "Zustand", level: 90 },
    ],
  },
  {
    title: "Cloud, AI & Tools",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 86, icon: SiAmazonwebservices },
      { name: "Docker", level: 88, icon: SiDocker },
      { name: "Redis", level: 88, icon: SiRedis },
      { name: "RabbitMQ", level: 84 },
      { name: "OpenAI APIs", level: 90, icon: SiOpenai },
      { name: "GitHub Actions", level: 84, icon: SiGithub },
      { name: "Vercel", level: 88, icon: SiVercel },
      { name: "Figma", level: 78, icon: SiFigma },
    ],
  },
];

export const floatingSkills: Skill[] = [
  { name: "React", level: 96, icon: SiReact },
  { name: "Next", level: 95, icon: SiNextdotjs },
  { name: "TS", level: 94, icon: SiTypescript },
  { name: "Node", level: 92, icon: SiJavascript },
  { name: "AWS", level: 86, icon: SiAmazonwebservices },
  { name: "Docker", level: 88, icon: SiDocker },
  { name: "OpenAI", level: 90, icon: SiOpenai },
  { name: "Mongo", level: 92, icon: SiMongodb },
];

export const experiences: Experience[] = [
  {
    company: "Thinkasa | ASA Global",
    role: "Full-Stack Software Engineer",
    location: "Remote",
    range: "Nov 2023 - Working",
    linkLabel: "Link listed in resume",
    bullets: [
      "Led full development of Recommendas, a multi-tenant SaaS platform for professional recommendations, compliance checks, and agency workflows.",
      "Designed and implemented a unified microservices + monolithic hybrid architecture for enterprise healthcare clients.",
      "Built a unified payment system supporting 5 SaaS products with Stripe subscriptions and usage-based billing.",
      "Developed an AI-assisted recommendation engine using OpenAI API for grammar refinement, auto-correction, and personalized generation.",
      "Implemented secure PDF generation and e-signatures with private AWS S3 storage and expiring signed URLs.",
      "Built real-time messaging, AWS SES notifications, AWS Lambda/EC2 deployments, RDS, S3, SES integrations, GDPR flows, dashboards, and agency branding.",
    ],
  },
  {
    company: "SH",
    role: "Junior MERN Stack Developer",
    location: "Onsite",
    range: "June 2022 - July 2023",
    linkLabel: "Link listed in resume",
    bullets: [
      "Joined a UK institute and software house as a junior developer and contributed to real-world monolithic and microservices systems.",
      "Built and deployed full-stack MERN applications including a SaaS platform, food ordering platform, HMS, and LMS with Laravel.",
      "Integrated GraphQL, OpenAI APIs, Redis, Kafka, RabbitMQ, WebSockets, and React/Next.js frontends.",
      "Dockerized microservices and wrote unit and integration test cases for critical features.",
      "Built a microservices system with Auth, Catalog, Order, Notification, and supporting services, including JWT auth, RBAC, and token refresh.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Food Panda App",
    category: "MERN Platform",
    description:
      "A full-stack food delivery platform with double authentication for customers and restaurant holders.",
    stack: ["MERN", "GraphQL", "Redis", "Zustand", "TypeScript", "Zod", "Cloudinary"],
    bullets: [
      "Built restaurant, menu, and order management with an interactive admin dashboard.",
      "Implemented advanced search by country, city, and restaurant.",
      "Enabled real-time order updates and optimized media delivery through Cloudinary.",
    ],
  },
  {
    title: "AI SaaS App",
    category: "AI Product",
    description:
      "An AI SaaS web app offering chatbots, code generation, code review, image tools, AI coach, and AI fun bot workflows.",
    stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "OpenAI", "Claude", "Gemini"],
    bullets: [
      "Built a high-performance Next.js frontend with scalable architecture.",
      "Integrated Prisma ORM with MongoDB for secure data modeling and querying.",
      "Connected multiple AI APIs and optimized assistant, analyzer, image generation, and background removal tools.",
    ],
  },
];

export const education = [
  {
    title: "Full Stack Web Development",
    institution: "Government e-Hunar Certification",
    range: "March 2024",
    description:
      "Completed a 6-month web development certification with hands-on MERN Stack and Laravel projects under professional guidance.",
    icon: GraduationCap,
  },
];

export const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Govt e-Hunar",
    range: "March 2024",
    description:
      "Hands-on certification covering MERN Stack, Laravel, and real-world project workflows.",
  },
];

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Mobile", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "GitHub", value: "Available in resume as LINK", href: undefined, icon: SiGithub },
  { label: "LinkedIn", value: "Available in resume as LINK", href: undefined, icon: MessageSquare },
];
