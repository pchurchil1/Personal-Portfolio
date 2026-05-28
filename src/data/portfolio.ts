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
  location: "Ann Arbor, Michigan",
  intro:
    "Software Engineer building practical systems across backend tools, applied AI, robotics, and low-level computing.",
  email: "Church66@msu.edu",
  links: {
    resume: "/resume",
    resumePdf: "/resume.pdf",
    github: "https://github.com/pchurchil1",
    linkedin: "https://www.linkedin.com/in/parker-churchill-841b71247/",
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
  "I’m a software engineer interested in building reliable tools that connect low-level systems, ",
  "applied AI, and practical user workflows. My work spans C++ systems projects, ML-assisted productivity tools, robotics software, and full-stack applications.",
  "This portfolio is intentionally simple: a place to share projects, experience, and the technologies I am growing with."
];

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    summary: "A responsive personal site built with Next.js, TypeScript, and Tailwind CSS.",
    description:
      "Designed and built this portfolio as a polished, accessible home base for projects, experience, resume access, and contact links.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
    status: "Live portfolio",
    links: {
      github: "https://github.com/pchurchil1/Personal-Portfolio"
    }
  },
  {
    title: "Atlas REST Explorer",
    summary: "A developer-focused tool for exploring REST API endpoints and responses.",
    description:
      "Built to make API exploration easier with a practical interface for sending requests, inspecting responses, and iterating on REST workflows.",
    technologies: ["JavaScript", "REST APIs", "Developer Tools", "Frontend"],
    status: "API tooling",
    links: {
      github: "https://github.com/pchurchil1/Atlas-REST-Explorer"
    }
  },
  {
    title: "Vehicle Telemetry API",
    summary: "A backend API for working with vehicle telemetry and operational data.",
    description:
      "Created a service-oriented API foundation for receiving, organizing, and exposing telemetry-style vehicle data through structured endpoints.",
    technologies: ["Backend", "REST APIs", "Node.js", "Telemetry"],
    status: "Backend service",
    links: {
      github: "https://github.com/pchurchil1/vehicle-telemetry-api"
    }
  }
];

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Bosch",
    period: "May 2025 - Present",
    location: "Farmington Hills, MI",
    description: [
      "TODO",
      "TODO."
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
