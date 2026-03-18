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
    id: "Safe AID",
    title: "Safe Aid",
    description: "A Mobile Application using Flutter user can find a guidence to get emergency assistance",
    image: "/projects/safeaid.png",
    tags: ["Dart", "Flutter"],
    // liveUrl: "#",
    cachedUrl: "https://github.com/sokundeny/safeaid_kh.git",
  },
  {
    id: "Sastra",
    title: "Sastra",
    description: "An Khmer Language website, user can buy course with bakong and self-learning",
    image: "/projects/sastra.png",
    tags: ["Node.js", "Tailwind", "Next.js","Express"],
    // liveUrl: "#",
    cachedUrl: "https://github.com/pychey/Online-Learning-Platform.git",
   
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JAVA", "C/C++", "JavaScript" ,"Dart" ,"Python"],
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
    skills: ["React", "Vue", "FLutter", "Flask", "Express.js","Nest"],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/THY14", icon: "/github.svg" },
  // { name: "Twitter", href: "#", icon: "/twitter.svg" },
  // { name: "LinkedIn", href: "#", icon: "/linkedin.svg" },
  // { name: "Discord", href: "#", icon: "/discord.svg" },
  { name: "Telegram", href: "https://t.me/methy14", icon: "/telegram.svg" },
  { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=methymuy@gmail.com"
, icon: "/email.svg" },
];
