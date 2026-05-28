import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { experience, profile, projects, skills } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Resume | ${profile.name}`,
  description: `Resume overview for ${profile.name}.`
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-ink-50">
      <div className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-4"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to portfolio
        </Link>

        <section className="mt-8 rounded-lg border border-ink-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 border-b border-ink-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-normal text-ink-900 sm:text-4xl">{profile.name}</h1>
              <p className="mt-2 text-lg font-medium text-blue-700">{profile.role}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-600">{profile.intro}</p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
          </div>

          <div className="mt-8 grid gap-8">
            <section aria-labelledby="resume-experience">
              <h2 id="resume-experience" className="text-sm font-bold uppercase tracking-[0.18em] text-ink-500">
                Experience
              </h2>
              <div className="mt-4 space-y-5">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.role}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-bold text-ink-900">
                        {item.role}, {item.company}
                      </h3>
                      <p className="text-sm font-medium text-ink-500">{item.period}</p>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-ink-600">
                      {item.description.map((description) => (
                        <li key={description}>{description}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="resume-projects">
              <h2 id="resume-projects" className="text-sm font-bold uppercase tracking-[0.18em] text-ink-500">
                Projects
              </h2>
              <div className="mt-4 space-y-4">
                {projects.map((project) => (
                  <article key={project.title}>
                    <h3 className="font-bold text-ink-900">{project.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink-600">{project.description}</p>
                    <p className="mt-1 text-sm font-medium text-ink-700">{project.technologies.join(" | ")}</p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="resume-skills">
              <h2 id="resume-skills" className="text-sm font-bold uppercase tracking-[0.18em] text-ink-500">
                Skills
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {skills.map((group) => (
                  <p key={group.category} className="text-sm leading-6 text-ink-600">
                    <span className="font-bold text-ink-900">{group.category}: </span>
                    {group.skills.join(", ")}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
