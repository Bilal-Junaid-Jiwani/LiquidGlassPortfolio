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
    id: "hospital-management",
    title: "Hospital Management System",
    description: "A hospital management system developed using the Django framework.",
    longDescription: "Developed a hospital management system based on the Django framework with features for patient records, appointments, and staff management.",
    image: "/Screenshot 2025-11-17 154124.webp",
    technologies: ["Python", "Django", "Healthcare"],
    repoLink: "https://github.com/Bilal-Junaid-Jiwani/Hospital-Managment-System",
  },
  {
    id: "reddit-leads",
    title: "Reddit Leads Automation",
    description: "Automated lead generation system using n8n, Python, and React dashboard.",
    longDescription: "A powerful automation tool that scrapes Reddit for potential leads using Python scripts within n8n workflows. The data is processed and served to a React frontend via an Excel file integration, allowing for efficient lead management.",
    image: "/Screenshot 2025-11-21 002239.webp",
    technologies: ["n8n", "Python", "React", "Automation"],
  },
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
    id: "saylani",
    title: "Saylani Institute (In Progress)",
    description: "Modern Web Application Development (Learning React)",
  },
  {
    id: "piaic",
    title: "PIAIC (In Progress)",
    description: "Certified Agentic & Robotic AI Engineer (CAE)",
  },
  {
    id: "hackathon",
    title: "Zaitoon Ashraf IT Park (Hackathon Winner)",
    description: "Developed \"Pitch Craft AI\" in a high-pressure environment.",
  },
  {
    id: "wordpress",
    title: "WordPress Developer",
    description: "2 Years Experience (Self-employed, 2023-2024)",
  },
  {
    id: "adsense",
    title: "Google AdSense & ADX Publisher",
    description: "Managed and monetized web properties (2023-2024)",
  },
];

export const stats = {
  projects: 15,
  commits: 500,
  technologies: 18,
  experience: 3,
};
