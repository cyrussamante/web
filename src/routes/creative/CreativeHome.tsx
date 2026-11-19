import { useLocation, useNavigate, useParams } from "react-router";
import CreativeProjectCard from "../../components/creative/CreativeProjectCard";
import CreativeProjectModal from "../../components/creative/CreativeProjectModal";
import CreativeProjectRow from "../../components/creative/CreativeProjectRow";
import CreativeToolbar from "../../components/creative/CreativeToolbar";
import FeaturedProject from "../../components/creative/FeaturedProject";
import Divider from "../../components/Divider";
import ScrollReveal from "../../components/ScrollReveal";
import SectionLabel from "../../components/SectionLabel";
import { creativeCategoryDetails, creativeProjects } from "../../data/creativeProjects";
import useCreativeBrowseState from "../../hooks/useCreativeBrowseState";
import usePageMetadata from "../../hooks/usePageMetadata";
import type { CreativeCategory, CreativeProject } from "../../types/creative";
import { creativeCategories } from "../../types/creative";
import {
    belongsToCategory,
    filterCreativeProjects,
    getFeaturedProject,
    getProjectBySlug,
    getProjectYear,
    getSkillOptions,
    getYearOptions,
    hasActiveFilters,
    sortCreativeProjects,
} from "../../utils/creative";
import NotFound from "../NotFound";

const featuredProject = getFeaturedProject(creativeProjects);
const skillOptions = getSkillOptions(creativeProjects);
const yearOptions = getYearOptions(creativeProjects);
const categoryCounts = Object.fromEntries(
    creativeCategories.map((category) => [
        category,
        creativeProjects.filter((project) => belongsToCategory(project, category)).length,
    ]),
);
const years = creativeProjects.map(getProjectYear).filter((year): year is number => year !== undefined);
const stats = [
    { label: "Projects", value: String(creativeProjects.length) },
    { label: "Skills", value: String(skillOptions.length) },
    years.length > 0 && {
        label: "Active",
        value: Math.min(...years) === Math.max(...years) ? String(years[0]) : `${Math.min(...years)}\u2013${Math.max(...years)}`,
    },
].filter((stat): stat is { label: string; value: string } => stat !== false);

function renderGroupedProjects(category: CreativeCategory, projects: CreativeProject[]) {
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
            return renderCards(projects, "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", "aspect-video");
        case "graphic-design":
            return renderCards(projects, "mt-6 grid gap-6 md:grid-cols-2 md:gap-8", "aspect-square sm:aspect-4/3");
        case "video-multimedia":
            return renderCards(projects, "mt-6 grid gap-6 md:grid-cols-2 md:gap-8", "aspect-video");
    }
}

function renderCards(projects: CreativeProject[], listClass: string, aspectClass: string) {
    return (
        <ul className={listClass}>
            {projects.map((project, index) => (
                <li key={project.id}>
                    <CreativeProjectCard project={project} aspectClass={aspectClass} animationDelay={Math.min(index, 4) * 30} />
                </li>
            ))}
        </ul>
    );
}

function CreativeHome() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { search } = useLocation();
    const { state, update, clearFilters } = useCreativeBrowseState();
    const selectedProject = getProjectBySlug(creativeProjects, slug);

    usePageMetadata(
        selectedProject?.title ?? "Creative Production",
        selectedProject?.description ??
            "Creative production portfolio of Cyruss Amante: live event and theatre production, sound, projection, lighting design, graphic design, and video.",
        { path: selectedProject ? `/creative/${selectedProject.slug}` : "/creative" },
    );

    if (slug && !selectedProject) return <NotFound />;

    const filtersActive = hasActiveFilters(state);
    const visibleProjects = sortCreativeProjects(filterCreativeProjects(creativeProjects, state), state.sort);
    const modalSequence =
        selectedProject && !visibleProjects.some((project) => project.id === selectedProject.id)
            ? [selectedProject]
            : visibleProjects;
    const groups = (state.category === "all" ? creativeCategories : [state.category])
        .map((category) => ({
            category,
            projects: visibleProjects.filter((project) => belongsToCategory(project, category)),
        }))
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
                    shows with sound and lighting cues to projection and backdrop design, graphic design, and video.
                </p>
                <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
                    {stats.map(({ label, value }) => (
                        <div key={label} className="flex flex-col-reverse">
                            <dt className="text-xs uppercase tracking-[0.16em] text-muted theme-transition">{label}</dt>
                            <dd className="text-2xl font-bold tabular-nums text-foreground theme-transition">{value}</dd>
                        </div>
                    ))}
                </dl>
            </header>

            {featuredProject && !filtersActive && <FeaturedProject project={featuredProject} />}

            <section aria-label="All creative work" className={filtersActive || !featuredProject ? "mt-10" : "mt-4"}>
                <SectionLabel>ALL WORK</SectionLabel>
                <div className="mt-4">
                    <CreativeToolbar
                        state={state}
                        onChange={update}
                        onClear={clearFilters}
                        hasFilters={filtersActive}
                        categoryCounts={categoryCounts}
                        skillOptions={skillOptions}
                        yearOptions={yearOptions}
                        resultCount={visibleProjects.length}
                        totalCount={creativeProjects.length}
                    />
                </div>

                {visibleProjects.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-sm text-secondary theme-transition">No projects match your search or filters.</p>
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-3 cursor-pointer text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : state.view === "grid" ? (
                    <div className="mt-6">{renderCards(visibleProjects, "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", "aspect-video")}</div>
                ) : state.view === "list" ? (
                    <ul className="mt-4">
                        {visibleProjects.map((project, index) => (
                            <li key={project.id}>
                                <CreativeProjectRow project={project} number={String(index + 1).padStart(2, "0")} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    groups.map(({ category, projects }, index) => (
                        <div key={category}>
                            {index > 0 && <Divider />}
                            <ScrollReveal>
                                <section aria-labelledby={`${category}-heading`} id={category} className="scroll-mt-6 py-6 sm:py-8">
                                    <h2 id={`${category}-heading`} className="text-2xl font-bold text-foreground theme-transition">
                                        {creativeCategoryDetails[category].label}
                                    </h2>
                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary theme-transition">
                                        {creativeCategoryDetails[category].description}
                                    </p>
                                    {renderGroupedProjects(category, projects)}
                                </section>
                            </ScrollReveal>
                        </div>
                    ))
                )}
            </section>

            {selectedProject && (
                <CreativeProjectModal
                    project={selectedProject}
                    projectSequence={modalSequence}
                    onNavigate={(project) => navigate({ pathname: `/creative/${project.slug}`, search }, { replace: true })}
                    onClose={() => navigate({ pathname: "/creative", search })}
                />
            )}
        </main>
    );
}

export default CreativeHome;
