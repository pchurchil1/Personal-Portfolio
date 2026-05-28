import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const hasLinks = Boolean(project.links.github || project.links.demo);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft">
      <div className="flex items-center justify-between border-b border-ink-200 bg-ink-950 px-5 py-4 text-white">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">{project.status}</span>
        <span className="font-mono text-sm text-white/60">{projectNumber}</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
      <div>
        <h3 className="text-2xl font-bold tracking-normal text-ink-950 transition group-hover:text-blue-700">{project.title}</h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-ink-700">{project.summary}</p>
        <p className="mt-4 text-sm leading-7 text-ink-600">{project.description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-700 transition group-hover:border-blue-100 group-hover:bg-blue-50"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-7">
        {project.links.github ? (
          <a
            href={project.links.github}
            target={project.links.github.startsWith("http") ? "_blank" : undefined}
            rel={project.links.github.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-ink-800 transition hover:gap-2 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-4"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            Code
          </a>
        ) : null}
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target={project.links.demo.startsWith("http") ? "_blank" : undefined}
            rel={project.links.demo.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-ink-800 transition hover:gap-2 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-4"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Demo
          </a>
        ) : null}
        {!hasLinks ? <span className="text-sm font-semibold text-ink-400">Details coming soon</span> : null}
      </div>
      </div>
    </article>
  );
}
