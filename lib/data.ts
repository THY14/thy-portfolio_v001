import { Project, SkillCategory, SocialLink, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "#home", href: "#home" },
  { label: "#works", href: "#projects" },
  { label: "#about-me", href: "#about-me" },
  { label: "#contacts", href: "#contacts" },
];

export const projects: Project[] = [
  {
    id: "chertnodes",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    image: "/project-chertnodes.jpg",
    tags: ["HTML", "SCSS", "Python", "Flask"],
    liveUrl: "#",
    cachedUrl: "#",
  },
  {
    id: "protectx",
    title: "ProtectX",
    description: "Discord anti-crash bot",
    image: "/project-protectx.png",
    tags: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
    liveUrl: "#",
  },
  {
    id: "kahoot",
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    image: "/project-kahoot.png",
    tags: ["CSS", "Express", "Node.js"],
    liveUrl: "#",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Personal portfolio website",
    image: "/project-portfolio.png",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveUrl: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "Lua", "Python", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["SQLite", "PostgreSQL", "Mongo"],
  },
  {
    title: "Tools",
    skills: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"],
  },
  {
    title: "Other",
    skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "#", icon: "/github.svg" },
  { name: "Twitter", href: "#", icon: "/twitter.svg" },
  { name: "LinkedIn", href: "#", icon: "/linkedin.svg" },
  { name: "Discord", href: "#", icon: "/discord.svg" },
  { name: "Telegram", href: "#", icon: "/telegram.svg" },
  { name: "Email", href: "methymuy@gmail.com", icon: "/email.svg" },
];
