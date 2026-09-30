import { useState } from "react";
import { projectCategories, projects, type Project } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import SectionLabel from "../components/SectionLabel";

const categories = [
    "All",
    ...projectCategories,
] as const;

type ProjectSortOrder = "newest" | "oldest" | "alphabetical";

const sortOptions: { value: ProjectSortOrder; label: string }[] = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "alphabetical", label: "A\u2013Z" },
];

function Projects() {
    const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [sortOrder, setSortOrder] = useState<ProjectSortOrder>("newest");

    const filteredProjects = projects
        .filter((project) => activeCategory === "All" || project.category === activeCategory)
        .sort((first, second) => {
            if (sortOrder === "alphabetical") {
                return first.title.localeCompare(second.title);
            }

            if (first.year === undefined) return second.year === undefined ? 0 : 1;
            if (second.year === undefined) return -1;

            return sortOrder === "newest"
                ? second.year - first.year
                : first.year - second.year;
        });

    return (
        <main className="py-12 sm:py-16">
            <header className="motion-fade-up max-w-2xl">
                <SectionLabel>MY PROJECTS</SectionLabel>
                <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground theme-transition sm:text-5xl">
                    Things I&apos;ve <span className="text-accent theme-transition">Built</span>
                </h1>
                <p className="mt-4 text-sm leading-6 text-secondary theme-transition sm:text-base">
                    A collection of personal projects, side builds, and experiments where I turn ideas into real, usable products.
                </p>
            </header>

            <section className="mt-8" aria-label="Project collection">
                <div
                    className="motion-fade-up flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border theme-transition"
                    style={{ animationDelay: "100ms" }}
                >
                    <div
                        role="group"
                        aria-label="Filter projects by category"
                        className="flex flex-wrap gap-x-6 gap-y-2"
                    >
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative cursor-pointer py-3 text-xs font-medium theme-transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                                        isActive
                                            ? "text-accent"
                                            : "text-secondary hover:text-foreground"
                                    }`}
                                >
                                    {category}
                                    {isActive && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <label className="flex items-center gap-2 pb-2 text-xs text-secondary theme-transition">
                        <span>Sort by</span>
                        <span className="relative inline-flex">
                            <select
                                value={sortOrder}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    if (
                                        value === "newest" ||
                                        value === "oldest" ||
                                        value === "alphabetical"
                                    ) {
                                        setSortOrder(value);
                                    }
                                }}
                                className="w-36 shrink-0 cursor-pointer appearance-none rounded-md border border-border bg-surface py-1.5 pl-2.5 pr-10 text-xs text-foreground theme-transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary"
                            >
                                <path
                                    d="m4 6 4 4 4-4"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </span>
                    </label>
                </div>

                <p className="sr-only" aria-live="polite">
                    Showing {filteredProjects.length} {activeCategory === "All" ? "" : `${activeCategory} `}
                    {filteredProjects.length === 1 ? "project" : "projects"}
                </p>

                {filteredProjects.length > 0 ? (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onSelect={setSelectedProject}
                                animationDelay={Math.min(index, 4) * 30}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="py-12 text-center text-sm text-secondary">
                        No projects found in this category yet.
                    </p>
                )}
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

export default Projects;