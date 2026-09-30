import type { Project } from "../../data/projects";
import ProjectMedia from "./ProjectMedia";
import ProjectBadges from "./ProjectBadges";

interface ProjectRowProps {
    project: Project;
    number: string;
    onSelect: (project: Project) => void;
    animationDelay: number;
}

function ProjectRow({ project, number, onSelect, animationDelay }: ProjectRowProps) {
    return (
        <button
            type="button"
            onClick={() => onSelect(project)}
            aria-label={`View details for ${project.title}`}
            style={{ animationDelay: `${animationDelay}ms` }}
            className="motion-fade-up group grid w-full cursor-pointer gap-5 border-b border-border py-6 text-left theme-transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:grid-cols-[2rem_minmax(0,1fr)_minmax(10rem,0.7fr)_1.5rem] md:items-center md:gap-5"
        >
            <span className="self-start pt-0.5 text-xl font-medium tabular-nums text-accent md:text-2xl">
                {number}
            </span>
            <span className="flex min-w-0 flex-col items-start">
                <span className="text-base font-semibold text-foreground theme-transition">
                    {project.title}
                </span>
                {project.description && (
                    <span className="mt-1 text-sm leading-5 text-secondary theme-transition">
                        {project.description}
                    </span>
                )}
                <ProjectBadges
                    items={project.technologies ?? []}
                    className="mt-3"
                />
            </span>
            <ProjectMedia
                project={project}
                className="w-full max-w-56 transition-colors duration-300 group-hover:border-accent/60 group-focus-visible:border-accent/60 motion-reduce:transition-none md:justify-self-end"
            />
            <span
                aria-hidden="true"
                className="text-lg text-accent transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none md:justify-self-end"
            >
                →
            </span>
        </button>
    );
}

export default ProjectRow;
