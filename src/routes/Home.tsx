import { useState } from "react";
import ActionLink from "../components/ActionLink";
import Divider from "../components/Divider";
import SectionLabel from "../components/SectionLabel";
import ProjectModal from "../components/projects/ProjectModal";
import ProjectRow from "../components/projects/ProjectRow";
import { projects, type Project } from "../data/projects";

type FeaturedProject = Project & { featuredOrder: number };

function isFeaturedProject(project: Project): project is FeaturedProject {
    return project.featuredOrder !== undefined;
}

function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const featuredProjects = projects
        .filter(isFeaturedProject)
        .sort((first, second) => first.featuredOrder - second.featuredOrder);

    return (
        <main>
            <section className="grid items-center gap-10 py-12 sm:py-16 md:grid-cols-2 md:gap-12 md:py-20">
                <div className="motion-fade-up">
                    <SectionLabel>SOFTWARE DEVELOPER</SectionLabel>
                    <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground theme-transition sm:text-5xl lg:text-6xl">
                        Hi, I&apos;m <span className="text-accent theme-transition">Cyruss.</span>
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-6 text-secondary theme-transition sm:text-base sm:leading-7">
                        I&apos;m a GTA-based software developer who turns complex problems into reliable software. I combine full-stack development, testing, and AI-assisted tools to build practical solutions and improve how software is delivered.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <ActionLink href="/projects" showArrow>
                            View My Projects
                        </ActionLink>
                        <ActionLink href="mailto:contact@cyrussamante.com" variant="text">
                            Get in Touch
                        </ActionLink>
                    </div>
                </div>
                <div
                    className="motion-fade-up relative mx-auto w-full max-w-md md:justify-self-end"
                    style={{ animationDelay: "120ms" }}
                >
                    <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full border border-accent/60" />
                    <div
                        role="img"
                        aria-label="Portrait placeholder"
                        className="relative grid aspect-4/3 place-items-center border border-border bg-surface text-3xl font-semibold tracking-widest text-muted theme-transition"
                    >
                        CA
                    </div>
                </div>
            </section>
            <Divider />
            <section
                className="motion-fade-up py-10 sm:py-12"
                style={{ animationDelay: "100ms" }}
            >
                <SectionLabel>EDUCATION</SectionLabel>
                <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground theme-transition">University</h2>
                        <p className="mt-1 text-sm text-foreground theme-transition">B.Eng. in Software Engineering</p>
                        <p className="mt-1 text-sm text-secondary theme-transition">McMaster University</p>
                        <p className="mt-2 text-xs text-muted theme-transition">2021 - 2025</p>

                    </div>
                    <p className="max-w-xl text-sm leading-6 text-secondary theme-transition md:border-l md:border-border md:pl-8">
                        My Software Engineering degree at McMaster strengthened my foundation in programming, algorithms, software design, and testing. It taught me to approach complex technical problems methodically and build software with reliability, maintainability, and real-world needs in mind.
                    </p>
                </div>
            </section>
            <Divider />
            <section
                className="motion-fade-up py-10 sm:py-12"
                style={{ animationDelay: "160ms" }}
            >
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <SectionLabel>FEATURED PROJECTS</SectionLabel>
                        <h2 className="mt-2 text-2xl font-bold text-foreground theme-transition">Projects</h2>
                    </div>
                    <ActionLink href="/projects" variant="text" showArrow>
                        View All Projects
                    </ActionLink>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-secondary theme-transition">
                    Here are a few projects I&apos;ve built, from robotics and visualization tools to mobile and web apps.
                </p>
                <div className="mt-3">
                    {featuredProjects.map((project, index) => (
                        <ProjectRow
                            key={project.id}
                            project={project}
                            number={String(index + 1).padStart(2, "0")}
                            onSelect={setSelectedProject}
                            animationDelay={100 + index * 35}
                        />
                    ))}
                </div>
            </section>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </main>
    );
}

export default Home;