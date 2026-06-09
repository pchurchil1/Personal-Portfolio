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
"My interest in programming started in fifth grade, when I used Scratch to build a simple platformer game. What began as a way to make a character jump across the screen quickly turned into a curiosity about how software works beneath the surface.",
"Since then, I’ve become interested in building reliable tools that connect low-level systems, applied AI, and practical user workflows. As a Computer Science student at Michigan State University, my in-class and personal work spans C++ systems projects, ML-assisted productivity tools, robotics software, and full-stack applications.",
"I’m drawn to engineering challenges that combine technical depth with real-world usefulness. This portfolio is a place to share the projects, experience, and technologies I’m continuing to grow with."
];

export const projects: Project[] = [
  {
    title: "Vehicle Telemetry Platform",
    summary: "A full-stack telemetry system for vehicle, ECU, signal, and event monitoring.",
    description:
      "Built a production-shaped platform with a FastAPI/PostgreSQL telemetry API, JWT role-based auth, background ingestion worker, React/TypeScript fleet dashboard, Redis-backed API gateway rate limiter, structured logging, health/metrics endpoints, tests, documentation, and one-command Docker orchestration.",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Redis",
      "Docker",
      "JWT/RBAC",
      "Pytest"
    ],
    status: "Full-stack platform",
    links: {
      github: "https://github.com/pchurchil1/vehicle-telemetry-platform"
    }
  },
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
  }
];

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Bosch",
    period: "May 2025 - Present",
    location: "Farmington Hills, MI",
    description: [
      "Designed and implemented software tools to optimize calibration workflows, reducing engineering time and improving process efficiency.",
      "Applied AI/ML techniques to automate data analysis and anomaly flagging, enhancing accuracy and scalability of calibration tasks, saving calibration engineers multiple hours per week of analysis time.",
      "Collaborated with cross-functional teams to identify workflow bottlenecks and deliver tailored software solutions and streamlined operations.",
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
