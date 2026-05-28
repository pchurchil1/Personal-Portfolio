import { BriefcaseBusiness, FileText, GitBranch, Mail } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/portfolio";

const heroLinks = [
  {
    label: "Resume",
    href: profile.links.resumePdf,
    icon: FileText,
    download: "Parker-Churchill-Resume.pdf"
  },
  {
    label: "GitHub",
    href: profile.links.github,
    icon: GitBranch,
    external: true
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: BriefcaseBusiness,
    external: true
  },
  {
    label: "Contact",
    href: profile.links.contact,
    icon: Mail
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-14 px-6 py-20 sm:py-24 md:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white/75 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {profile.role}
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold tracking-normal text-ink-950 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-ink-700 sm:text-xl sm:leading-9">{profile.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {heroLinks.map((link, index) => {
              const Icon = link.icon;
              const isPrimary = index === 0;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  download={link.download}
                  className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2 ${
                    isPrimary
                      ? "bg-ink-950 text-white hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-soft"
                      : "border border-ink-300 bg-white/90 text-ink-800 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-lg border border-white/70 bg-white/40 shadow-soft" aria-hidden="true" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white bg-white shadow-soft ring-1 ring-ink-200/80">
            <Image
              src="/hero-workspace.png"
              alt="Clean software engineering workspace with a laptop and notebook"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/35 to-transparent" aria-hidden="true" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="premium-panel rounded-lg border border-white p-4 shadow-sm ring-1 ring-ink-200/80 transition hover:-translate-y-0.5 hover:shadow-soft">
              <p className="text-2xl font-bold text-ink-950">10+</p>
              <p className="mt-1 text-sm text-ink-600">Years of Coding Experience</p>
            </div>
            <div className="premium-panel rounded-lg border border-white p-4 shadow-sm ring-1 ring-ink-200/80 transition hover:-translate-y-0.5 hover:shadow-soft">
              <p className="text-2xl font-bold text-ink-950">$3000+</p>
              <p className="mt-1 text-sm text-ink-600">Raised for Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
