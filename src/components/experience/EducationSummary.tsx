import ScrollReveal from "../ScrollReveal";
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
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {education.details.map((detail) => (
                            <li
                                key={detail}
                                className="rounded-full border border-border bg-page px-2.5 py-1 text-xs text-secondary theme-transition"
                            >
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </ScrollReveal>
        </section>
    );
}

export default EducationSummary;
