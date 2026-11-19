import type { CreativeCategory, CreativeProject } from "../types/creative";

export function getFeaturedProject(projects: readonly CreativeProject[]) {
    return projects.find((project) => project.featured);
}

export function getProjectsByCategory(projects: readonly CreativeProject[], category: CreativeCategory) {
    return projects.filter(
        (project) =>
            !project.featured &&
            (project.category === category || project.additionalCategories?.includes(category)),
    );
}

export function getProjectBySlug(projects: readonly CreativeProject[], slug: string | undefined) {
    return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(projects: readonly CreativeProject[], project: CreativeProject) {
    const index = projects.findIndex((candidate) => candidate.id === project.id);
    return {
        previous: index > 0 ? projects[index - 1] : undefined,
        next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
    };
}

export function getRelatedProjects(projects: readonly CreativeProject[], project: CreativeProject) {
    return (project.relatedSlugs ?? [])
        .map((slug) => projects.find((candidate) => candidate.slug === slug))
        .filter((related): related is CreativeProject => related !== undefined);
}
