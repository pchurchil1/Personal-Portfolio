export type Project = {
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  status: string;
  links: {
    demo?: string;
    github?: string;
  };
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
};

export type SkillsGroupData = {
  category: string;
  skills: string[];
};

export const profile = {
  name: "Parker Churchill",
  role: "Entry-Level Software Engineer",
  location: "Detroit, Michigan",
  intro:
    "I build reliable, accessible web applications with clean interfaces, thoughtful details, and maintainable code.",
  email: "parker.churchill@example.com",
  links: {
    resume: "/resume",
    github: "https://github.com/parkerchurchill",
    linkedin: "https://www.linkedin.com/in/parkerchurchill/",
    contact: "#contact"
  }
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const about = [
  "I am a software engineer focused on building practical, maintainable products. I enjoy turning ambiguous problems into organized, usable interfaces.",
  "My current interests include full-stack web development, accessibility, API design, and improving the small details that make software feel dependable.",
  "This portfolio is intentionally simple: a place to share projects, experience, and the technologies I am growing with."
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    summary: "A responsive personal site built with Next.js, TypeScript, and Tailwind CSS.",
    description:
      "Designed and built a polished portfolio foundation with reusable components, editable content data, and accessible section navigation.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
    status: "Production-ready foundation",
    links: {
      github: "https://github.com/parkerchurchill"
    }
  },
  {
    title: "Task Management App",
    summary: "A focused app for organizing tasks, priorities, and project progress.",
    description:
      "Placeholder project for a full-stack application with CRUD workflows, responsive layouts, and clean state management.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    status: "Case study placeholder",
    links: {}
  },
  {
    title: "API Dashboard",
    summary: "A dashboard concept for monitoring API health, usage, and recent activity.",
    description:
      "Placeholder project for presenting metrics, loading states, empty states, and data visualizations in a production-style interface.",
    technologies: ["Next.js", "REST APIs", "Tailwind CSS", "Charts"],
    status: "Interface concept",
    links: {}
  }
];

export const experience: Experience[] = [
  {
    role: "Software Engineering Student",
    company: "Personal Projects",
    period: "2024 - Present",
    location: "Remote",
    description: [
      "Built responsive web interfaces using React, TypeScript, and modern CSS tooling.",
      "Practiced breaking features into reusable components and keeping project content easy to update.",
      "Focused on accessibility, semantic HTML, and clear user flows."
    ]
  },
  {
    role: "Technical Support / Customer-Facing Role",
    company: "Placeholder Company",
    period: "2022 - 2024",
    location: "Michigan",
    description: [
      "Solved user problems in a detail-oriented environment with clear communication and follow-through.",
      "Documented recurring issues and collaborated with teammates to improve repeatable workflows."
    ]
  }
];

export const skills: SkillsGroupData[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "npm", "Vercel"]
  },
  {
    category: "Practices",
    skills: ["Accessibility", "Responsive Design", "Testing Basics", "Debugging", "Documentation"]
  }
];
