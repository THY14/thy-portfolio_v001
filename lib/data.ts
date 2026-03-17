import { Project, SkillCategory, SocialLink, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "#home", href: "#home" },
  { label: "#works", href: "#projects" },
  { label: "#about-me", href: "#about-me" },
  { label: "#contacts", href: "#contacts" },
];

export const projects: Project[] = [
  {
    id: "Twatch",
    title: "T Watch",
    description: "E-commerce Website  •  March 2025",
    image: "/projects/Twatch.png",
    tags: ["HTML", "CSS", "React", "Javascripts"],
    // liveUrl: "#",
    cachedUrl: "https://github.com/sokundeny/T_WATCH.git",
  },
  {
    id: "Codify",
    title: "Codify",
    description: "Coding Based LMS",
    image: "/projects/codify.png",
    tags: ["Next.js", "Typescripts", "Nest.js", "Docker", "Tailwind CSS", "" ,"","" ],
    liveUrl: "http://codify.works/",
    cachedUrl: "https://github.com/THY14/Codify-hosting.git",
  },
  {
    id: "Gym club",
    title: "Gym club",
    description: "Club that transform your body",
    image: "/projects/gym.png",
    tags: ["React", "Express", "Node.js","Tailwind CSS"],
    // liveUrl: "#",
    cachedUrl: "https://github.com/THY14/gym.git",
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
    skills: ["TypeScript", "JAVA", "C/C++", "JavaScript" ,"Dart"],
  },
  {
    title: "Databases",
    skills: ["SQLite", "PostgreSQL", "Mongo"],
  },
  {
    title: "Tools",
    skills: ["VSCode", "Neovim", "Linux", "Figma", "Git", "Docker" ,"AWS" ,"Jira","Notion"],
  },
  {
    title: "Other",
    skills: ["HTML", "CSS", "EJS", "Tailwind CSS", "REST", "DSA"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Vue", "FLutter", "Flask", "Express.js"],
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
