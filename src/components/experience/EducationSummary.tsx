import ScrollReveal from "../ScrollReveal";
import TagList from "../TagList";
import { education } from "../../data/experience";

function EducationSummary() {
    return (
        <section aria-labelledby="education-heading">
            <h2
                id="education-heading"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"
            >
                Education
            </h2>
            <ScrollReveal className="mt-4">
                <div className="rounded-xl border border-border bg-surface p-5 theme-transition">
                    <p className="text-xs font-medium text-accent">{education.period}</p>
                    <h3 className="mt-2 text-base font-semibold text-foreground theme-transition">
                        {education.qualification}
                    </h3>
                    <p className="mt-1 text-sm text-secondary theme-transition">
                        {education.organization}
                    </p>
                    <TagList
                        items={education.details}
                        className="mt-4"
                        size="medium"
                    />
                </div>
            </ScrollReveal>
        </section>
    );
}

export default EducationSummary;
