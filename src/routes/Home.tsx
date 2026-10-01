import ActionLink from "../components/ActionLink";
import Divider from "../components/Divider";
import SectionLabel from "../components/SectionLabel";
import ProjectModal from "../components/projects/ProjectModal";
import ProjectRow from "../components/projects/ProjectRow";
import { education } from "../data/experience";
import { projects } from "../data/projects";
import useProjectModal from "../hooks/useProjectModal";
import usePageMetadata from "../hooks/usePageMetadata";
import { getFeaturedProjects } from "../utils/projects";
import { getContactEmailHref } from "../utils/email";

const featuredProjects = getFeaturedProjects(projects);

function Home() {
    const { selectedProject, openProject, closeProject } = useProjectModal();
    usePageMetadata(
        "Software Developer",
        "Cyruss Amante is a GTA-based software developer building full-stack web applications with React, TypeScript, and Java/Spring Boot.",
    );

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
                        <ActionLink href={getContactEmailHref()} variant="text">
                            Get in Touch
                        </ActionLink>
                    </div>
                </div>
                <div
                    className="motion-fade-up relative mx-auto w-full max-w-md md:justify-self-end"
                    style={{ animationDelay: "120ms" }}
                >
                    <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full border border-accent/60" />
                    <img
                        src="/images/profile.jpg"
                        alt="Portrait of Cyruss Amante"
                        draggable={false}
                        onContextMenu={(event) => event.preventDefault()}
                        className="relative aspect-4/5 w-full border border-border object-cover object-[85%_center] select-none theme-transition"
                    />
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
                        <p className="mt-1 text-sm text-foreground theme-transition">{education.qualification}</p>
                        <p className="mt-1 text-sm text-secondary theme-transition">{education.organization}</p>
                        <p className="mt-2 text-xs text-muted theme-transition">{education.period}</p>

                    </div>
                    <p className="max-w-xl text-sm leading-6 text-secondary theme-transition md:border-l md:border-border md:pl-8">
                        {education.summary}
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
                            onSelect={openProject}
                            animationDelay={100 + index * 35}
                        />
                    ))}
                </div>
            </section>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    projectSequence={featuredProjects}
                    onNavigate={openProject}
                    onClose={closeProject}
                />
            )}
        </main>
    );
}

export default Home;