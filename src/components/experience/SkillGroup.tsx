interface SkillGroupProps {
    title: string;
    skills: string[];
}

function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <section aria-label={title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="rounded-full border border-border bg-page px-2.5 py-1 text-[11px] text-secondary theme-transition"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default SkillGroup;
