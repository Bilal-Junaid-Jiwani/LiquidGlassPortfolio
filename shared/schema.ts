import { z } from "zod";

// Portfolio data types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  year?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Zod schemas
export const contactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactMessage = z.infer<typeof contactMessageSchema>;

// Portfolio data
export const projects: Project[] = [
  {
    id: "cogniclose",
    title: "Cogniclose",
    description: "A modern platform for cognitive closure and mental wellness.",
    longDescription: "Developed a comprehensive platform for cognitive wellness.",
    image: "/Cogniclose.png",
    technologies: ["React", "Web Design", "Modern UI"],
    liveLink: "https://cogniclose.com/",
  },
  {
    id: "attitude-pk",
    title: "Attitude PK CRM",
    description: "Full-Stack E-commerce & CRM Platform.",
    longDescription: "Architected and developed a comprehensive E-commerce solution with a built-in CRM system using Next.js 15, TypeScript, and MongoDB. Features a high-performance storefront and a powerful Admin Dashboard. Key capabilities include Automated Abandoned Cart Recovery, detailed user analytics, Integrated Expense Tracking, real-time sales reporting, and a custom secure checkout flow.",
    image: "/attitude-pk-showcase.jpg",
    technologies: ["Next.js 15", "TypeScript", "MongoDB", "CRM"],
    liveLink: "https://attitude-pk.vercel.app/",
    repoLink: "#",
  },
  {
    id: "bleu-clothing",
    title: "The Bleu Clothing Company",
    description: "Premium digital presence for a textile brand.",
    longDescription: "Designed and deployed a premium digital presence for a textile brand. Features include a dynamic product showcase, seamless contact integration, and a high-performance \"Industrial\" aesthetic tailored to brand identity.",
    image: "/bleu-clothing-showcase.png",
    technologies: ["React", "Tailwind CSS", "Industrial Design"],
    liveLink: "https://www.thebleu.com.pk/",
    repoLink: "#",
  },
  {
    id: "slingshot",
    title: "Slingshot",
    description: "Google Ai Seekho winner, won silver tier prize. A fast, modern web application.",
    longDescription: "Developed a sleek, modern web application named Slingshot. Google Ai Seekho winner, won silver tier prize.",
    image: "/slingshot.png",
    technologies: ["React", "Web App", "Modern UI"],
    liveLink: "https://bilals-slingshot-352425888965.us-central1.run.app/",
  },
  {
    id: "arthur-construction",
    title: "Arthur Construction",
    description: "Professional digital presence for a construction and renovations company.",
    longDescription: "Created a modern website for Arthur Construction And Renovations.",
    image: "/arthur.png",
    technologies: ["WordPress", "SEO", "Responsive Design"],
    liveLink: "https://arthurconstructionandrenovations.ca/",
  },
  {
    id: "beauty-incubator",
    title: "Beauty Incubator",
    description: "Recruitment platform tailored for the beauty industry.",
    longDescription: "Built a specialized recruitment portal for the beauty sector.",
    image: "/beauty.png",
    technologies: ["Web Design", "CMS", "Branding"],
    liveLink: "https://birecruit.com/",
  },
  {
    id: "clear-plan",
    title: "Clear Plan Cleaning",
    description: "Service booking website for a professional cleaning business.",
    longDescription: "Designed an accessible and clean website for a cleaning service.",
    image: "/clearplan.png",
    technologies: ["Frontend", "UI/UX", "Booking System"],
    liveLink: "https://deeppink-stinkbug-468512.hostingersite.com/",
  },
  {
    id: "brooke-zelcer",
    title: "Brooke Zelcer",
    description: "Personal portfolio and professional showcase.",
    longDescription: "Developed a sleek personal portfolio on Squarespace.",
    image: "/brooke.png",
    technologies: ["Squarespace", "Portfolio", "Design"],
    liveLink: "https://polygon-blenny-n6wm.squarespace.com/",
  },
  {
    id: "banking-system",
    title: "Financial Banking System",
    description: "A complete financial management system developed using the Django framework.",
    longDescription: "Developed a Financial management system based on the Django framework with comprehensive features for managing accounts, transactions, and financial reports.",
    image: "/pic42342.webp",
    technologies: ["Python", "Django", "PostgreSQL"],
    liveLink: "https://financial-banking-system.onrender.com/",
    repoLink: "https://github.com/Bilal-Junaid-Jiwani/Financial-Banking-System",
  },
  {
    id: "pitchcraft-ai",
    title: "PitchCraft AI",
    description: "AI-powered pitch generation and website code for startup ideas. (Hackathon Winner)",
    longDescription: "A full-stack web application created during the Zaitoon Ashraf IT Park Hackathon. It transforms a startup idea into a complete business package with AI-powered pitch generation and professional website code.",
    image: "/Screenshot 2025-11-17 152352.webp",
    technologies: ["Full-Stack", "AI", "Hackathon"],
    liveLink: "https://pitchcraft-abzf.vercel.app/",
    repoLink: "https://github.com/Bilal-Junaid-Jiwani/pitchcraft",
  },
  {
    id: "reddit-leads",
    title: "Reddit Leads Automation",
    description: "Automated lead generation system using n8n, Python, and React dashboard.",
    longDescription: "A powerful automation tool that scrapes Reddit for potential leads using Python scripts within n8n workflows. The data is processed and served to a React frontend via an Excel file integration, allowing for efficient lead management.",
    image: "/Screenshot 2025-11-21 002239.webp",
    technologies: ["n8n", "Python", "React", "Automation"],
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", percentage: 60, category: "frontend" },
  { id: "javascript", name: "JavaScript", percentage: 90, category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", percentage: 95, category: "frontend" },
  { id: "bootstrap", name: "Bootstrap", percentage: 80, category: "frontend" },
  { id: "html", name: "HTML", percentage: 95, category: "frontend" },
  { id: "css", name: "CSS", percentage: 95, category: "frontend" },

  // Backend
  { id: "django", name: "Django", percentage: 80, category: "backend" },
  { id: "nodejs", name: "Node.js", percentage: 70, category: "backend" },
  { id: "python", name: "Python", percentage: 90, category: "backend" },
  { id: "mongodb", name: "MongoDB", percentage: 70, category: "backend" },
  // { id: "postgresql", name: "PostgreSQL", percentage: 50, category: "backend" },
  { id: "firebase", name: "Firebase", percentage: 70, category: "backend" },

  // Tools
  { id: "n8n", name: "n8n", percentage: 90, category: "tools" },
  { id: "git", name: "Git & GitHub", percentage: 85, category: "tools" },
  { id: "wordpress", name: "WordPress", percentage: 95, category: "tools" },
  // { id: "adsense", name: "Google AdSense", percentage: 80, category: "tools" },
  { id: "seo", name: "SEO", percentage: 70, category: "tools" },
  // { id: "amazon", name: "Amazon VA", percentage: 40, category: "tools" },
];

export const timeline: TimelineItem[] = [
  {
    id: "higlax-solution-agentic",
    title: "Agentic AI Engineer & Full-Stack Developer @ Higlax Solutions",
    description: "Building intelligent, scalable, and automation-driven applications. (June 2026 - Present)",
    year: "2026",
  },
  {
    id: "google-ai",
    title: "Google AI Seekho Competition Winner",
    description: "Won Google Silver Tier Prize for creating the Slingshot handtracking game.",
    year: "2026",
  },
  {
    id: "higlax-solution-mern",
    title: "Full Stack Developer (MERN Stack) @ Higlax Solutions",
    description: "Developed modern web applications. (May 2026 - June 2026)",
    year: "2026",
  },
  {
    id: "saylani-web",
    title: "Modern Web & App Development @ S.M.I.T",
    description: "Comprehensive training in modern web architecture. (March 2024 - April 2026)",
    year: "2026",
  },
  {
    id: "safina-logistic",
    title: "Junior Software Developer @ SAFINA LOGISTIC",
    description: "Software development and system maintenance. (Nov 2025 - Feb 2026)",
    year: "2025",
  },
  {
    id: "piaic",
    title: "Certified Agentic and Robotic AI Engineer (CAE) @ PIAIC",
    description: "Advanced training in AI and Agentic Systems. (Aug 2025 - Aug 2026)",
    year: "2025",
  },
  {
    id: "saylani-python",
    title: "Python Web Mastery @ S.M.I.T",
    description: "Specialized training in Python web frameworks. (Oct 2024 - March 2025)",
    year: "2024",
  },
  {
    id: "hackathon",
    title: "Zaitoon Ashraf IT Park (Hackathon Winner)",
    description: "Developed \"Pitch Craft AI\" in a high-pressure environment.",
    year: "2024",
  },
  {
    id: "displayjbz",
    title: "WordPress Developer @ DisplayJBZ",
    description: "Professional WordPress site building and Google AdSense Publisher Partner. (Jan 2020 - July 2023)",
    year: "2020",
  },
];

export const stats = {
  projects: 15,
  commits: 500,
  technologies: 18,
  experience: 3,
};
