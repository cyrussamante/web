import type {
    Project,
    ProjectFilter,
    ProjectSortOrder,
} from "../data/projects";
import { allProjectsFilter, projectSortOptions } from "../data/projects";

type FeaturedProject = Project & { featuredOrder: number };

function isFeaturedProject(project: Project): project is FeaturedProject {
    return project.featuredOrder !== undefined;
}

export function getFeaturedProjects(projectList: readonly Project[]) {
    return projectList
        .filter(isFeaturedProject)
        .sort((first, second) => first.featuredOrder - second.featuredOrder);
}

function compareProjects(
    first: Project,
    second: Project,
    sortOrder: ProjectSortOrder,
) {
    if (sortOrder === "alphabetical") {
        return first.title.localeCompare(second.title);
    }

    if (first.year === undefined) return second.year === undefined ? 0 : 1;
    if (second.year === undefined) return -1;

    return sortOrder === "newest"
        ? second.year - first.year
        : first.year - second.year;
}

export function filterAndSortProjects(
    projectList: readonly Project[],
    category: ProjectFilter,
    sortOrder: ProjectSortOrder,
) {
    return projectList
        .filter(
            (project) =>
                category === allProjectsFilter || project.category === category,
        )
        .sort((first, second) => compareProjects(first, second, sortOrder));
}

export function isProjectSortOrder(value: string): value is ProjectSortOrder {
    return projectSortOptions.some((option) => option.value === value);
}
