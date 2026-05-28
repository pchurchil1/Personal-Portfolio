import type { SkillsGroupData } from "@/data/portfolio";

type SkillsGroupProps = {
  group: SkillsGroupData;
};

export function SkillsGroup({ group }: SkillsGroupProps) {
  return (
    <article className="rounded-lg border border-ink-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft">
      <h3 className="text-base font-bold tracking-normal text-ink-950">{group.category}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li key={skill} className="rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1 text-sm font-medium text-ink-700">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
