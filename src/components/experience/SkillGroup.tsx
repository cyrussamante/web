import TagList from "../TagList";

interface SkillGroupProps {
    title: string;
    skills: readonly string[];
}

function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <section aria-label={title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {title}
            </h3>
            <TagList items={skills} className="mt-3" />
        </section>
    );
}

export default SkillGroup;
