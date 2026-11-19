import { useNavigate, useParams } from "react-router";
import CreativeProjectModal from "../../components/creative/CreativeProjectModal";
import FeaturedProject from "../../components/creative/FeaturedProject";
import CreativeProjectCard from "../../components/creative/CreativeProjectCard";
import CreativeProjectRow from "../../components/creative/CreativeProjectRow";
import Divider from "../../components/Divider";
import ScrollReveal from "../../components/ScrollReveal";
import SectionLabel from "../../components/SectionLabel";
import { creativeCategoryDetails, creativeProjects } from "../../data/creativeProjects";
import usePageMetadata from "../../hooks/usePageMetadata";
import type { CreativeCategory, CreativeProject } from "../../types/creative";
import { creativeCategories } from "../../types/creative";
import { getFeaturedProject, getProjectBySlug, getProjectsByCategory } from "../../utils/creative";
import NotFound from "../NotFound";

const featuredProject = getFeaturedProject(creativeProjects);

function renderCategoryProjects(category: CreativeCategory, projects: CreativeProject[]) {
    switch (category) {
        case "live-production":
            return (
                <ul className="mt-2">
                    {projects.map((project, index) => (
                        <li key={project.id}>
                            <CreativeProjectRow project={project} number={String(index + 1).padStart(2, "0")} />
                        </li>
                    ))}
                </ul>
            );
        case "visual-design":
            return (
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <CreativeProjectCard project={project} aspectClass="aspect-video" />
                        </li>
                    ))}
                </ul>
            );
        case "graphic-design":
            return (
                <ul className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <CreativeProjectCard project={project} aspectClass="aspect-square sm:aspect-4/3" />
                        </li>
                    ))}
                </ul>
            );
        case "video-multimedia":
            return (
                <ul className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <CreativeProjectCard project={project} aspectClass="aspect-video" />
                        </li>
                    ))}
                </ul>
            );
    }
}

function CreativeHome() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const selectedProject = getProjectBySlug(creativeProjects, slug);

    usePageMetadata(
        selectedProject?.title ?? "Creative Production",
        selectedProject?.description ??
            "Creative production portfolio of Cyruss Amante: live event and theatre production, sound, projection, lighting design, graphic design, and video.",
        { path: selectedProject ? `/creative/${selectedProject.slug}` : "/creative" },
    );

    if (slug && !selectedProject) return <NotFound />;

    const sections = creativeCategories
        .map((category) => ({ category, projects: getProjectsByCategory(creativeProjects, category) }))
        .filter(({ projects }) => projects.length > 0);

    return (
        <main className="py-12 sm:py-16">
            <header className="motion-fade-up max-w-3xl">
                <SectionLabel>CREATIVE PRODUCTION</SectionLabel>
                <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground theme-transition sm:text-5xl lg:text-6xl">
                    Live shows, <span className="text-accent theme-transition">visuals</span> &amp; video
                </h1>
                <p className="mt-5 text-sm leading-6 text-secondary theme-transition sm:text-base sm:leading-7">
                    My work in live entertainment, theatre, concerts, visual production, and multimedia, from calling
                    shows with sound and lighting cues to projection and backdrop design, graphic design, and video.</p>
                <nav aria-label="Creative categories" className="mt-6">
                    <ul className="flex flex-wrap gap-2">
                        {sections.map(({ category }) => (
                            <li key={category}>
                                <a
                                    href={`#${category}`}
                                    className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-secondary theme-transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                >
                                    {creativeCategoryDetails[category].label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {featuredProject && <FeaturedProject project={featuredProject} />}

            {sections.map(({ category, projects }) => (
                <div key={category}>
                    <Divider />
                    <ScrollReveal>
                        <section aria-labelledby={`${category}-heading`} id={category} className="scroll-mt-6 py-6 sm:py-8">
                            <h2
                                id={`${category}-heading`}
                                className="text-2xl font-bold text-foreground theme-transition"
                            >
                                {creativeCategoryDetails[category].label}
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary theme-transition">
                                {creativeCategoryDetails[category].description}
                            </p>
                            {renderCategoryProjects(category, projects)}
                        </section>
                    </ScrollReveal>
                </div>
            ))}

            {selectedProject && (
                <CreativeProjectModal
                    project={selectedProject}
                    projectSequence={creativeProjects}
                    onNavigate={(project) => navigate(`/creative/${project.slug}`, { replace: true })}
                    onClose={() => navigate("/creative")}
                />
            )}
        </main>
    );
}

export default CreativeHome;
