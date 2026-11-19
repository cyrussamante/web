import type { CreativeSortOrder } from "../data/creativeBrowse";
import { creativeCategoryDetails } from "../data/creativeProjects";
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

const monthPattern = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*/gi;
const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

export function getProjectYear(project: CreativeProject): number | undefined {
    if (project.year !== undefined) return project.year;
    const match = project.date?.match(/\b(?:19|20)\d{2}\b/);
    return match ? Number(match[0]) : undefined;
}

/** Sortable month index derived from the display date; the latest month is used for ranges like "March / May 2026". */
function getProjectTimeValue(project: CreativeProject): number | undefined {
    const year = getProjectYear(project);
    if (year === undefined) return undefined;

    const months = [...(project.date?.matchAll(monthPattern) ?? [])].map((match) =>
        monthNames.indexOf(match[1].toLowerCase()),
    );
    return year * 12 + (months.length > 0 ? Math.max(...months) : 0);
}

export interface CreativeFilters {
    query: string;
    category: CreativeCategory | "all";
    skills: readonly string[];
    year: number | "all";
}

export function hasActiveFilters({ query, category, skills, year }: CreativeFilters) {
    return query.trim() !== "" || category !== "all" || skills.length > 0 || year !== "all";
}

export function belongsToCategory(project: CreativeProject, category: CreativeCategory) {
    return project.category === category || project.additionalCategories?.includes(category) === true;
}

function getSearchText(project: CreativeProject) {
    const categories = [project.category, ...(project.additionalCategories ?? [])].map(
        (category) => creativeCategoryDetails[category].label,
    );
    return [
        project.title,
        project.description,
        project.date,
        project.note,
        ...project.responsibilities,
        ...project.skills,
        ...categories,
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
}

export function filterCreativeProjects(projects: readonly CreativeProject[], filters: CreativeFilters) {
    const terms = filters.query.toLowerCase().split(/\s+/).filter(Boolean);

    return projects.filter((project) => {
        if (filters.category !== "all" && !belongsToCategory(project, filters.category)) return false;
        if (filters.skills.some((skill) => !project.skills.includes(skill))) return false;
        if (filters.year !== "all" && getProjectYear(project) !== filters.year) return false;
        if (terms.length === 0) return true;

        const text = getSearchText(project);
        return terms.every((term) => text.includes(term));
    });
}

export function sortCreativeProjects(projects: readonly CreativeProject[], order: CreativeSortOrder) {
    const sorted = [...projects];

    if (order === "alphabetical") {
        return sorted.sort((first, second) => first.title.localeCompare(second.title));
    }

    // Undated projects always sort last.
    return sorted.sort((first, second) => {
        const firstValue = getProjectTimeValue(first);
        const secondValue = getProjectTimeValue(second);
        if (firstValue === undefined) return secondValue === undefined ? 0 : 1;
        if (secondValue === undefined) return -1;
        return order === "newest" ? secondValue - firstValue : firstValue - secondValue;
    });
}

export function getSkillOptions(projects: readonly CreativeProject[]) {
    const counts = new Map<string, number>();
    projects.forEach((project) => project.skills.forEach((skill) => counts.set(skill, (counts.get(skill) ?? 0) + 1)));
    return [...counts.entries()]
        .sort(([firstSkill, firstCount], [secondSkill, secondCount]) =>
            secondCount - firstCount || firstSkill.localeCompare(secondSkill))
        .map(([skill, count]) => ({ skill, count }));
}

export function getYearOptions(projects: readonly CreativeProject[]) {
    const years = new Set<number>();
    projects.forEach((project) => {
        const year = getProjectYear(project);
        if (year !== undefined) years.add(year);
    });
    return [...years].sort((first, second) => second - first);
}
