type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-normal text-ink-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-base leading-8 text-ink-600">{description}</p> : null}
    </div>
  );
}
