import { Mail } from "lucide-react";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsGroup } from "@/components/SkillsGroup";
import { about, experience, profile, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />

        <section id="about" className="border-y border-ink-200/80 bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeading
              eyebrow="About"
              title="TODO."
              description="I care about code that is understandable, interfaces that are usable, and teams that communicate clearly."
            />
            <div className="space-y-5 border-l border-ink-200 pl-6 text-base leading-8 text-ink-700">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-ink-50 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work and in-progress builds."
              description="A couple of my favorite projects right now."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeading
              eyebrow="Experience"
              title="Learning by building, supporting, and shipping."
              description="Use this section for internships, technical roles, education, certifications, or project-based experience."
            />
            <div className="space-y-5">
              {experience.map((item) => (
                <ExperienceItem key={`${item.company}-${item.role}`} experience={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-ink-200/80 bg-ink-50 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Skills"
              title="Technologies I use."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((group) => (
                <SkillsGroup key={group.category} group={group} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build!"
              //description="I am open to entry-level software engineering roles, internships, and collaborative projects."
              centered
            />
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Me
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-ink-300 px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
