import { Link, useLocation } from "react-router";
import type { CreativeProject } from "../../types/creative";
import ProjectBadges from "../projects/ProjectBadges";
import ProjectImage from "./ProjectImage";

interface CreativeProjectRowProps {
    project: CreativeProject;
    number: string;
    animationDelay?: number;
}

function CreativeProjectRow({ project, number, animationDelay = 0 }: CreativeProjectRowProps) {
    const { search } = useLocation();

    return (
        <Link
            to={{ pathname: `/creative/${project.slug}`, search }}
            style={{ animationDelay: `${animationDelay}ms` }}
            className="motion-fade-up group grid gap-4 border-b border-border py-5 theme-transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(10rem,14rem)_1.5rem] md:items-center md:gap-5"
        >
            <span className="text-xl font-medium tabular-nums text-accent theme-transition md:text-2xl">{number}</span>
            <span className="min-w-0">
                <h3 className="text-base font-semibold text-foreground theme-transition">{project.title}</h3>
                {project.date && <span className="mt-0.5 block text-xs text-muted theme-transition">{project.date}</span>}
                <span className="mt-1 block text-sm leading-5 text-secondary theme-transition">
                    {project.description}
                </span>
                <ProjectBadges items={project.responsibilities} className="mt-3" />
            </span>
            {project.coverImage ? (
                <ProjectImage
                    src={project.coverImage.src}
                    alt={project.coverImage.alt ?? `${project.title} cover image`}
                    aspectClass="aspect-video"
                    quiet
                    className="max-w-56 border border-border group-hover:border-accent/60 md:justify-self-end"
                />
            ) : (
                <span aria-hidden="true" className="hidden md:block" />
            )}
            <span
                aria-hidden="true"
                className="hidden text-lg text-accent transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none md:block md:justify-self-end"
            >
                {"\u2192\uFE0E"}
            </span>
        </Link>
    );
}

export default CreativeProjectRow;
