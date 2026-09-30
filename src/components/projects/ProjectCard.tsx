import type { Project } from "../../data/projects";
import ProjectMedia from "./ProjectMedia";
import ProjectBadges from "./ProjectBadges";

interface ProjectCardProps {
    project: Project;
    onSelect: (project: Project) => void;
    animationDelay: number;
}

function ProjectCard({ project, onSelect, animationDelay }: ProjectCardProps) {
    return (
        <button
            type="button"
            onClick={() => onSelect(project)}
            aria-label={`View details for ${project.title}`}
            style={{ animationDelay: `${animationDelay}ms` }}
            className="motion-fade-up project-card-motion group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-surface text-left shadow-sm theme-transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:shadow-none dark:hover:shadow-none motion-reduce:transform-none"
        >
            <ProjectMedia
                project={project}
                className="w-full border-0 border-b transition-opacity duration-300 group-hover:opacity-90 motion-reduce:transition-none"
            />
            <span className="flex flex-1 flex-col p-4">
                <span className="flex items-start justify-between gap-3">
                    <span className="font-semibold text-foreground theme-transition">
                        {project.title}
                    </span>
                    <span
                        aria-hidden="true"
                        className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    >
                        →
                    </span>
                </span>
                {project.description && (
                    <span className="mt-2 line-clamp-3 text-sm leading-5 text-secondary theme-transition">
                        {project.description}
                    </span>
                )}
                <ProjectBadges
                    items={project.technologies ?? []}
                    maxItems={3}
                    className="mt-auto pt-4"
                />
            </span>
        </button>
    );
}

export default ProjectCard;