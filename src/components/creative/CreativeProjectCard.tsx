import { Link } from "react-router";
import type { CreativeProject } from "../../types/creative";
import ProjectBadges from "../projects/ProjectBadges";
import ProjectImage from "./ProjectImage";

interface CreativeProjectCardProps {
    project: CreativeProject;
    aspectClass?: string;
    animationDelay?: number;
}

function CreativeProjectCard({ project, aspectClass = "aspect-4/3", animationDelay = 0 }: CreativeProjectCardProps) {
    return (
        <Link
            to={`/creative/${project.slug}`}
            style={{ animationDelay: `${animationDelay}ms` }}
            className="motion-fade-up project-card-motion group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm hover:-translate-y-1 hover:border-accent/60 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:shadow-none dark:hover:shadow-none motion-reduce:transform-none"
        >
            <ProjectImage
                src={project.coverImage?.src}
                alt={project.coverImage?.alt ?? `${project.title} cover image`}
                aspectClass={aspectClass}
                quiet
                className="border-b border-border"
            />
            <span className="flex flex-1 flex-col p-4">
                <span className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-foreground theme-transition">{project.title}</h3>
                    <span
                        aria-hidden="true"
                        className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    >
                        {"\u2192\uFE0E"}
                    </span>
                </span>
                {project.date && <span className="mt-1 text-xs text-muted theme-transition">{project.date}</span>}
                <span className="mt-2 line-clamp-3 text-sm leading-5 text-secondary theme-transition">
                    {project.description}
                </span>
                <ProjectBadges items={project.responsibilities} maxItems={3} className="mt-auto pt-4" />
            </span>
        </Link>
    );
}

export default CreativeProjectCard;
