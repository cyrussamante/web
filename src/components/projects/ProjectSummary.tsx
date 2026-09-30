import type { Project } from "../../data/projects";
import ProjectBadges from "./ProjectBadges";

interface ProjectSummaryProps {
    project: Project;
    className?: string;
    descriptionClassName: string;
    badgesClassName: string;
    maxTechnologies?: number;
}

function ProjectSummary({
    project,
    className = "",
    descriptionClassName,
    badgesClassName,
    maxTechnologies,
}: ProjectSummaryProps) {
    return (
        <span className={`flex min-w-0 flex-col ${className}`}>
            {project.description && (
                <span className={descriptionClassName}>
                    {project.description}
                </span>
            )}
            <ProjectBadges
                items={project.technologies ?? []}
                maxItems={maxTechnologies}
                className={badgesClassName}
            />
        </span>
    );
}

export default ProjectSummary;
