import OrganizationTimeline from "../components/experience/OrganizationTimeline";
import EducationSummary from "../components/experience/EducationSummary";
import ScrollReveal from "../components/ScrollReveal";
import SkillGroup from "../components/experience/SkillGroup";
import SectionLabel from "../components/SectionLabel";
import { professionalExperience, skillGroups } from "../data/experience";

function getMostRecentRoleDate(organization: (typeof professionalExperience)[number]) {
    return organization.roles.reduce(
        (mostRecent, role) => role.sortDate > mostRecent ? role.sortDate : mostRecent,
        "",
    );
}

function Experience() {
    const chronologicallySortedExperience = [...professionalExperience].sort(
        (first, second) => {
            if (first.id === "adp-current") return -1;
            if (second.id === "adp-current") return 1;

            return getMostRecentRoleDate(second).localeCompare(getMostRecentRoleDate(first));
        },
    );

    return (
        <main className="py-12 sm:py-16">
            <header className="motion-fade-up flex flex-col gap-5 border-b border-border pb-8 theme-transition sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                    <SectionLabel>WORK &amp; EDUCATION</SectionLabel>
                    <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground theme-transition sm:text-5xl">
                        My <span className="text-accent theme-transition">Journey</span>
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-secondary theme-transition sm:text-base">
                        From software development and teaching to community work, here is a timeline of my experience and education.
                    </p>
                </div>
                <p className="text-sm text-secondary theme-transition sm:max-w-32 sm:text-right">
                    Always learning.
                    <br />
                    Always building.
                </p>
            </header>

            <div className="grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
                <div className="min-w-0">
                    <section aria-labelledby="experience-heading">
                        <h2
                            id="experience-heading"
                            className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"
                        >
                            Experience
                        </h2>
                        <ol className="relative mt-6 space-y-7 before:absolute before:bottom-7 before:left-1.25 before:top-1 before:w-px before:bg-border before:content-['']">
                            {chronologicallySortedExperience.map((organization) => (
                                <OrganizationTimeline
                                    key={organization.id}
                                    organization={organization}
                                />
                            ))}
                        </ol>
                    </section>
                </div>

                <aside
                    className="h-fit border-t border-border pt-8 theme-transition lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
                >
                    <div className="space-y-9">
                        <EducationSummary />
                        <section aria-labelledby="skills-heading">
                            <h2
                                id="skills-heading"
                                className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"
                            >
                                Skills
                            </h2>
                            <div className="mt-5 space-y-7">
                                {skillGroups.map((group) => (
                                    <ScrollReveal key={group.title}>
                                        <SkillGroup
                                            title={group.title}
                                            skills={group.skills}
                                        />
                                    </ScrollReveal>
                                ))}
                            </div>
                        </section>
                    </div>
                </aside>
            </div>
        </main>
    );
}

export default Experience;
