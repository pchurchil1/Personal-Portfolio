import type { Experience } from "@/data/portfolio";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-normal text-ink-950">{experience.role}</h3>
          <p className="mt-1 text-sm font-medium text-ink-700">{experience.company}</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="rounded-md bg-blue-50 px-2.5 py-1 text-sm font-semibold text-blue-700">{experience.period}</p>
          <p className="mt-2 text-sm text-ink-500">{experience.location}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-600">
        {experience.description.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.10)]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
