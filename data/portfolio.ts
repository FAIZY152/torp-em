import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNetlify,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiRailway,
  SiReact,
  SiRedux,
  SiRedis,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiVuedotjs,
  SiZod,
  SiFramer,
  SiAntdesign,
  SiShadcnui,
} from "react-icons/si";
import {
  Activity,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  History,
  Layers3,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTubeDiagonal,
  Users,
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

export type SkillMarqueeItem = {
  name: string;
  icon?: IconType;
  short?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  range: string;
  linkLabel?: string;
  highlights?: string[];
  bullets: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  bullets: string[];
  liveUrl?: string;
  sourceLabel?: string;
  image: string;
  preview: {
    type: "workflow" | "dashboard" | "legacy" | "commerce" | "ai";
    eyebrow: string;
    metric: string;
    accent: string;
  };
};

export type Testimonial = {
  name: string;
  role: string;
  project: string;
  year: string;
  quote: string;
  source: string;
  accent: string;
};

export type PricingPlan = {
  title: string;
  label: string;
  description: string;
  price: number;
  duration: string;
  icon: typeof Rocket;
  featured?: boolean;
  features: string[];
};

export const profile = {
  name: "Muhammad Fayaz",
  logo: "MF",
  eyebrow: "Full Stack Web & App | AI Integration | DevOps",
  headlineLead: "I Build SaaS",
  headlineAccent: "Platforms That Scale",
  headlineTail: "& Ship Fast",
  title: "Full-Stack Software Engineer",
  email: "infodevs152@gmail.com",
  phone: "+92 3333735364",
  resumePath: "/muhammad-fayaz-resume.pdf",
  imagePath: "/profile-img.jpg",
  meetingHref:
    "mailto:infodevs152@gmail.com?subject=Schedule%20a%20portfolio%20meeting&body=Hi%20Muhammad%2C%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20to%20discuss%20a%20role%20or%20project.%0A%0ABest%2C",
  summary:
    "Full-Stack Software Engineer with 4+ years of experience building production SaaS platforms, workflow systems, AWS deployments, AI-powered features, and scalable web applications.",
  detailedBio:
    "I build scalable SaaS platforms, workflow systems, AI-powered applications, and cloud-based products used in real company environments. My experience includes multi-tenant architecture, lifecycle/state engines, immutable/versioned submissions, audit systems, role and permission models, REST APIs, AWS ECS deployments, shared infrastructure, and production optimization.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Years Exp.", value: 4, suffix: "+", icon: BriefcaseBusiness },
  { label: "Delivered Projects", value: 10, suffix: "+", icon: Rocket },
  { label: "Collaborations", value: 15, suffix: "+", icon: Users },
  { label: "Company SaaS Apps", value: 5, suffix: "+", icon: Workflow },
];

export const advantages = [
  {
    title: "Production SaaS Delivery",
    description:
      "Built and deployed live SaaS products including Recommendas, Chronoca, and Accompliq for real company environments.",
    icon: Rocket,
  },
  {
    title: "Hybrid Architecture",
    description:
      "Designed flexible multi-tenant systems using neutral entities, hybrid architecture, structured APIs, and reusable workflow models.",
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
      "Designed shared AWS ECS infrastructure with VPC, ECS cluster, ALB, target groups, security groups, and isolated services.",
    icon: Cloud,
  },
  {
    title: "Secure Systems",
    description:
      "Delivered authentication, role permissions, audit logs, lifecycle controls, immutable submissions, and tamper-resistant records.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Ownership",
    description:
      "Handled SaaS architecture, backend logic, deployment infrastructure, scalability, performance, and production release details.",
    icon: Workflow,
  },
];

export const services: Service[] = [
  {
    title: "Full-Stack SaaS Development",
    description:
      "Production-grade apps with Next.js, MERN, Laravel, dashboards, workflows, authentication, APIs, and scalable data models.",
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
      "Multi-tenant workflow models, lifecycle engines, audit trails, versioned records, service isolation, queues, cache, and secure APIs.",
    icon: Layers3,
    tags: ["GraphQL", "Redis", "RabbitMQ", "WebSockets"],
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "AWS ECS shared clusters, VPCs, load balancers, target groups, security groups, container deployments, CI/CD, and production optimization.",
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
      { name: "TypeScript", level: 90, icon: SiTypescript },
      { name: "Nest.js", level: 94, icon: SiNestjs },
      { name: "AI Agents", level: 70, icon: Bot},
      { name: "Dev Ops", level: 85, icon: Cloud },
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
      { name: "AWS ECS", level: 84 },
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

export const skillMarqueeRows: SkillMarqueeItem[][] = [
  [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "shadcn/ui", short: "UI", icon: SiShadcnui },
    { name: "Ant Design", short: "AD", icon: SiAntdesign },
    { name: "Framer Motion", short: "FM", icon: SiFramer },
    { name: "GSAP", short: "GS" },
  ],
  [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Nest.js", icon: SiNestjs },
    { name: "Express.js", icon: SiExpress },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Laravel", icon: SiLaravel },
    { name: "PHP", icon: SiPhp },
    { name: "Python", icon: SiPython },
    { name: "REST APIs", short: "API", icon: Code2 },
    { name: "JWT Auth", short: "JWT" },
    { name: "RBAC", short: "RB" },
    { name: "WebSockets", short: "WS" },
    { name: "Microservices", short: "MS" },
  ],
  [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "Prisma ORM", icon: SiPrisma },
    { name: "TypeORM", short: "TO" },
    { name: "Redis", icon: SiRedis },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Zustand", short: "ZS" },
    { name: "Zod", icon: SiZod },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
  ],
  [
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "AWS ECS", short: "ECS" },
    { name: "Docker", icon: SiDocker },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Vercel", icon: SiVercel },
    { name: "Railway", icon: SiRailway },
    { name: "Netlify", icon: SiNetlify },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Stripe", icon: SiStripe },
    { name: "OpenAI APIs", icon: SiOpenai },
    { name: "Vitest", icon: SiVitest },
    { name: "Jest", icon: SiJest },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
  ],
];

export const experiences: Experience[] = [
  {
    company: "Thinkasa | ASA Global",
    role: "MERN Stack Developer / Full-Stack SaaS Engineer",
    location: "Remote",
    range: "Nov 2023 - Working",
    linkLabel: "U.S.-based SaaS company",
    highlights: ["Recommendas", "Chronoca", "Accompliq", "AWS ECS", "Multi-tenant SaaS"],
    bullets: [
      "Contributed heavily to Recommendas and Chronoca across backend architecture, SaaS workflow logic, deployment infrastructure, and scalability.",
      "Designed Recommendas around neutral multi-tenant entities such as Organization, Professional, Recommender, and Recommendation Record so the platform can support multiple industries without hardcoded workflow assumptions.",
      "Implemented a versioned submission model where submitted records stay immutable, updates create new submissions, previous versions remain preserved, and the latest active submission is tracked separately for auditability.",
      "Built controlled lifecycle transitions including Draft, Sent, In Progress, Submitted, Recorded, and Unlocked so actions, permissions, notifications, and audit events remain predictable.",
      "Designed a shared AWS ECS deployment architecture using a shared VPC, single ECS cluster, shared load balancer, separate ECS services/tasks, target groups, and security groups for cost-efficient isolated deployments.",
      "Worked on authentication, authorization, REST APIs, database modeling, role and permission systems, audit/lifecycle systems, performance optimization, and production deployment.",
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
    title: "Recommendas",
    category: "Production SaaS",
    description:
      "A workflow-driven SaaS platform for managing professional recommendations, reference workflows, secure records, and organization-level tracking.",
    stack: ["MERN", "Next.js", "REST APIs", "AWS ECS", "RBAC", "Audit Logs", "Multi-Tenant SaaS"],
    liveUrl: "https://www.recommendas.com",
    sourceLabel: "Private company repository",
    image: "/recommendas.png",
    preview: {
      type: "workflow",
      eyebrow: "Recommendation lifecycle",
      metric: "6-state workflow",
      accent: "#C9F31D",
    },
    bullets: [
      "Designed neutral workflow entities so the product can support hiring, staffing, education, agencies, and professional services.",
      "Implemented immutable/versioned submissions to preserve record integrity and improve auditability.",
      "Built lifecycle controls, permissions, audit tracking, secure recommendation handling, and structured workflow management.",
    ],
  },
  {
    title: "Chronoca",
    category: "Workforce Productivity",
    description:
      "A workforce productivity and time-tracking platform inspired by tools like Hubstaff for work sessions, activity tracking, and operational visibility.",
    stack: ["MERN", "Next.js", "AWS ECS", "Activity Tracking", "Performance Optimization", "SaaS"],
    liveUrl: "https://www.chronoca.com",
    sourceLabel: "Private company repository",
    image: "/chronoca.png",
    preview: {
      type: "dashboard",
      eyebrow: "Productivity visibility",
      metric: "Work session tracking",
      accent: "#38BDF8",
    },
    bullets: [
      "Contributed to backend architecture, SaaS workflow logic, deployment infrastructure, and system scalability.",
      "Focused on lightweight optimized tracking behavior without hurting system performance.",
      "Helped organizations track work sessions, monitor activity, manage productivity, and improve visibility.",
    ],
  },
  {
    title: "Accompliq",
    category: "Personal Organization",
    description:
      "A platform for personal organization, storytelling, digital legacy management, goals, documents, milestones, and long-term life records.",
    stack: ["SaaS", "Next.js", "MERN", "Document Workflows", "User Records", "Cloud Deployment"],
    liveUrl: "https://www.accompliq.com",
    sourceLabel: "Private company repository",
    image: "/accompliq.png",
    preview: {
      type: "legacy",
      eyebrow: "Digital legacy records",
      metric: "Goals + documents",
      accent: "#A78BFA",
    },
    bullets: [
      "Supported a product direction combining productivity, personal records, and digital legacy management.",
      "Built around organizing goals, bucket lists, documents, milestones, experiences, and personal stories.",
      "Contributed to the production SaaS ecosystem deployed and maintained in a real company environment.",
    ],
  },
  {
    title: "Food Panda App",
    category: "MERN Platform",
    description:
      "A full-stack food delivery platform with double authentication for customers and restaurant holders.",
    stack: ["MERN", "GraphQL", "Redis", "Zustand", "TypeScript", "Zod", "Cloudinary"],
    image: "/food-panda-clone.png",
    preview: {
      type: "commerce",
      eyebrow: "Restaurant operations",
      metric: "Real-time orders",
      accent: "#F97316",
    },
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
    image: "/ai-saas.jpeg",
    preview: {
      type: "ai",
      eyebrow: "AI workflow suite",
      metric: "Multi-model tools",
      accent: "#22C55E",
    },
    bullets: [
      "Built a high-performance Next.js frontend with scalable architecture.",
      "Integrated Prisma ORM with MongoDB for secure data modeling and querying.",
      "Connected multiple AI APIs and optimized assistant, analyzer, image generation, and background removal tools.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Thinkasa / ASA Global",
    role: "U.S.-based SaaS company",
    project: "Recommendas + Chronoca",
    year: "2023 - Present",
    quote:
      "Contributed heavily to production SaaS architecture, backend workflow logic, deployment infrastructure, scalability, role permissions, audit systems, and real company product releases.",
    source: "Experience summary",
    accent: "#C9F31D",
  },
  {
    name: "Recommendas",
    role: "Workflow SaaS",
    project: "Recommendation records",
    year: "Live",
    quote:
      "Built a flexible multi-tenant workflow model with immutable versioned submissions, lifecycle states, audit tracking, and secure recommendation handling.",
    source: "Project case study",
    accent: "#38BDF8",
  },
  {
    name: "Chronoca",
    role: "Workforce productivity",
    project: "Time tracking platform",
    year: "Live",
    quote:
      "Helped organizations track work sessions, monitor activity, manage productivity, and improve operational visibility with lightweight optimized tracking behavior.",
    source: "Project case study",
    accent: "#22C55E",
  },
  {
    name: "SH Software House",
    role: "Junior MERN Developer",
    project: "SaaS, HMS, LMS, food platform",
    year: "2022 - 2023",
    quote:
      "Delivered real-world MERN and Laravel systems, integrated GraphQL, OpenAI APIs, Redis, queues, WebSockets, Dockerized services, and testing coverage.",
    source: "Resume experience",
    accent: "#F97316",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "SaaS MVP",
    label: "Premium",
    description: "Production-ready web app with auth, dashboard, APIs, database, and deployment.",
    price: 1500,
    duration: "3-5 weeks",
    icon: Rocket,
    featured: true,
    features: [
      "Next.js or MERN full-stack build",
      "Authentication and role permissions",
      "Dashboard and CRUD workflows",
      "REST API and database modeling",
      "Production deployment support",
      "Basic documentation handoff",
    ],
  },
  {
    title: "AI Feature Integration",
    label: "Professional",
    description: "Add OpenAI-powered chat, content tools, code helpers, or automation to an existing app.",
    price: 550,
    duration: "7-12 days",
    icon: Sparkles,
    features: [
      "OpenAI API integration",
      "Prompt and response workflow",
      "Secure backend API endpoint",
      "Usage-aware UI states",
      "Error handling and optimization",
      "Deployment-ready implementation",
    ],
  },
  {
    title: "Cloud & DevOps Setup",
    label: "Professional",
    description: "Docker, AWS ECS, load balancer, CI/CD, and production deployment assistance.",
    price: 800,
    duration: "10-14 days",
    icon: Cloud,
    features: [
      "Dockerized application setup",
      "AWS ECS service structure",
      "Load balancer and target groups",
      "Environment and security basics",
      "GitHub Actions CI/CD flow",
      "Deployment troubleshooting",
    ],
  },
  {
    title: "Testing & Fix Sprint",
    label: "Focused",
    description: "QA, bug fixing, performance cleanup, and critical frontend/backend improvements.",
    price: 300,
    duration: "5-7 days",
    icon: TestTubeDiagonal,
    features: [
      "Bug reproduction and fixes",
      "Frontend responsiveness cleanup",
      "API and state issue fixes",
      "Unit/integration test additions",
      "Performance and UX polish",
      "Final summary report",
    ],
  },
];

export const architectureHighlights = [
  {
    title: "Multi-tenant workflow model",
    description:
      "Used neutral domain entities instead of hardcoded industry roles, allowing one workflow system to support many business use cases.",
    icon: Workflow,
  },
  {
    title: "Versioned submissions",
    description:
      "Protected sensitive recommendation records with immutable submissions, preserved history, and separate latest-active tracking.",
    icon: History,
  },
  {
    title: "Shared AWS ECS architecture",
    description:
      "Reduced cost and simplified scaling with shared VPC, ECS cluster, application load balancer, service isolation, target groups, and security groups.",
    icon: Cloud,
  },
  {
    title: "Lifecycle state engine",
    description:
      "Modeled Draft, Sent, In Progress, Submitted, Recorded, and Unlocked transitions so permissions and audit events stay consistent.",
    icon: Activity,
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
  { label: "GitHub", value: "github.com/FAIZY152", href: "https://github.com/FAIZY152", icon: SiGithub },
  { label: "LinkedIn", value: "Available in resume as LINK", href: undefined, icon: MessageSquare },
];
