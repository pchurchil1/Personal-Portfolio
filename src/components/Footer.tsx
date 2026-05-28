import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-ink-600">
          <span className="text-ink-300">© {new Date().getFullYear()} {profile.name}.</span>{" "}
          <span className="text-ink-500">Built with Next.js and Tailwind CSS.</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-ink-300 transition hover:-translate-y-0.5 hover:border-blue-300/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink-950"
            aria-label="GitHub profile"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-ink-300 transition hover:-translate-y-0.5 hover:border-blue-300/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink-950"
            aria-label="LinkedIn profile"
          >
            <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-ink-300 transition hover:-translate-y-0.5 hover:border-blue-300/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink-950"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
