import type { ExperienceOrganization as ExperienceOrganizationData } from "../../data/experience";
import { sortExperienceRoles } from "../../utils/experience";
import ScrollReveal from "../ScrollReveal";
import TagList from "../TagList";

interface OrganizationTimelineProps {
    organization: ExperienceOrganizationData;
}

function OrganizationTimeline({ organization }: OrganizationTimelineProps) {
    const sortedRoles = sortExperienceRoles(organization.roles);

    return (
        <li className="relative border-b border-border pb-8 pl-7 last:border-b-0 sm:pl-9 theme-transition">
            <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-page theme-transition"
            />
            <ScrollReveal className="mb-5">
                <h3 className="text-base font-semibold text-foreground theme-transition">
                    {organization.name}
                </h3>
            </ScrollReveal>
            <ol className="relative space-y-6 before:absolute before:bottom-3 before:left-1 before:top-2 before:w-px before:bg-border before:content-['']">
                {sortedRoles.map((role) => (
                    <li key={role.id} className="relative pl-7 sm:pl-8">
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-page theme-transition"
                        />
                        <ScrollReveal>
                            <div className="flex flex-col-reverse gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
                                <h4 className="min-w-0 text-sm font-semibold text-foreground theme-transition">
                                    {role.title}
                                </h4>
                                <p className="shrink-0 text-xs font-medium tabular-nums text-accent md:text-right">
                                    {role.period}
                                </p>
                            </div>
                            {role.context && (
                                <p className="mt-1 text-xs text-muted theme-transition">
                                    {role.context}
                                </p>
                            )}
                            <ul className="mt-4 list-disc space-y-2.5 pl-5 marker:text-accent">
                                {role.details.map((detail) => (
                                    <li
                                        key={detail}
                                        className="text-sm leading-6 text-secondary theme-transition"
                                    >
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                            {role.spotlight && (
                                <section
                                    aria-label={role.spotlight.title}
                                    className="mt-4 rounded-lg border border-accent/40 bg-accent/5 p-4"
                                >
                                    <h5 className="text-xs font-semibold uppercase tracking-wide text-accent">
                                        {role.spotlight.title}
                                    </h5>
                                    <p className="mt-2 text-sm leading-6 text-secondary theme-transition">
                                        {role.spotlight.description}
                                    </p>
                                    <TagList
                                        items={role.spotlight.skills}
                                        label={role.spotlight.skillsLabel}
                                        className="mt-3"
                                    />
                                </section>
                            )}
                            {role.skills && role.skills.length > 0 && (
                                <TagList
                                    items={role.skills}
                                    label="Technologies and methods used"
                                    className="mt-4"
                                />
                            )}
                        </ScrollReveal>
                    </li>
                ))}
            </ol>
        </li>
    );
}

export default OrganizationTimeline;
